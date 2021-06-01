"# Task" 
1. To fetch an api from newsapi.org and display 100 data in table format 
2. Apply Pagination adn display 10 data per Page 
3. Include Sorting to an column to sort data in ascending and descending order.
4. Display url as button which should display the news on click. 
4. Include Search bar to filter data based on keywords entered by user.

"## Solution ##"

1. Create a new react app using npx create-react-app
2. Install all dependencies redux, react-redux, react-router-dom, axios,   devtools-extension material ui core.
3. Create redux structure as action,action-type,reducer and store.
4. Connect react and redux using Provider from react-redux.

5. Create React Components as Newslist and Newstable
7. Read the current state using useSelector Hook
8. Fetch api from newsapi using axios pass the fetch function inside useEffect Hook.
9. Dispatch the Action with response.data using useDispatch Hook.
10. Based on the action reducer will update the store.

11. In Newstable component to display the data read it using useSelector
12. Create a Material Ui table with all the headers required
13. In tablebody map the array data using Array.map which will return a new array with news data.
14. Display it accordingly in table cells

" ## To Apply pagination "
15. import requried dependcies from material ui as TablePagination
16. Set a current state for current page and new page and  setVaribles to update using useState Hook.
17. Also set state and setvarible for rowsPerPage and give a inital state
18. apply the math using slice method on array as (page * rowsPerPage, page * rowsPerPage + rowsPerPage)
19. define a pagehandler and set the page to next page
20. Set Rowperpage if required

"## To Aplly Sorting on a column"
21. Define  initial state for orderDirection  and  orderBy 
22. Create a handleSorting function to and check for isAscending 
23. set orderBy to property
24. also set the order direction with is Ascending check
25. Define another function as handleSort for calling up the previous function in our coulumn
26. create a function to store the sorted result whic takes two parameters array and comparator
27. define a stablizedArray using map on the array
28. Sort the stablized array using sort method by taking two parameters a,b 
29. define order variable with comparator()
30. if Order request does not exist return the current order
31. Else return the a[1]-b[1] 
32. Now return the stabliezedArray.map with a argument
33. Define a descdending Comparator with 3 parameters a,b and orderBy
34. check for b[orderBy]< or > a[orderBy] and return false and true respectively
35. Else return 0.

36. Define A funcyion to get the comparator 
37. check for order direction if its desc then return (descendingComparator(a, b, orderBy))
38. Else return (-descendingComparator(a, b, orderBy))

39. apply this sortedReuslt function on array with getComparator before using slice for pagination
40. It will sort the coloumn in ascending and descending order

"## Searching and Filtering ##""

41. Create an searchbar which takes input as text 
42. Create a searchhandler to handle searching
43. Go to NewsList component and define initial state for search term and search results
42. Pass both as props to newslist component
43. Also define a searchhandler and pass it as props to newsList
44. in searcjhandler set the searchterm to seacrhTerm and check if a searchterm is there apply filter on the existting data to get newData into Object.value format to perform the search
45. Now set the setSeacrhResults to newData
46. Else set the setSeacrhResults to existing data

47. After passing handler to newstable component go newstable component and define all the props in input tag
48. now define the get Searchterm and set value using useRef named InputE1 to event.target.value using the props. handler
49. to Display only the title and description while search is perofrmed take a seach state and inititlize it ot false and set it true in getSearchterm method
50. in render check if search is there if its not being performed display all the table  columns
51. In case search is being performed display only title and description coloumn.



react 
react redux
material ui
react saga
react persist 
hooks
hooks forms
google map
thunk


node express typeOrm 
postgreSql
keyKloak 