import React,{useEffect,useState} from 'react';
import NewsTable from './NewsTable';
import {useDispatch, useSelector} from 'react-redux';
import {setItems} from '../Redux/Actions/productAction';
import axios from 'axios';

 const NewsList = () => {
    const[searchTerm,setSearchTerm]=useState("")
    const[searchResults,setSearchResults]=useState([]);
     const items=useSelector((state)=>state.allItem.items);
     const dispatch=useDispatch()
     console.log(items);
     const fetchItems=async()=>{
         const response=await axios.get('https://newsapi.org/v2/everything?q=apple&from=2021-05-10&to=2021-05-10&sortBy=popularity&pageSize=100&apiKey=eae83c949ea141e28e85f18c05a34173').catch((err)=>{
             console.log("Err",err);
         })
         dispatch(setItems(response.data.articles));
     }
     useEffect(()=>{
         fetchItems();
     },[]);
     console.log("items:",items);
     const searchHandler=(searchTerm)=>{
         setSearchTerm(searchTerm);
         if(searchTerm!==""){
             const newData=items.filter((newInfo)=>{
                 return Object.values(newInfo).join("").toLowerCase().includes(searchTerm.toLowerCase()); 
             })
             setSearchResults(newData);
             
         }
         else{
             setSearchResults(items);
         }
     }
    return (
        <>
        
            <NewsTable items={searchTerm.length<1? items : searchResults}term={searchTerm} searchKeyWord={searchHandler}/>
        </>
    )
}
export default NewsList;