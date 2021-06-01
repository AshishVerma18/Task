import React, { useEffect } from 'react';
import profile from '../images/profile.jpg'
import { useHistory } from 'react-router-dom';
const AboutUs = () => {
    const history = useHistory();
    const callAboutPage = async () => {
        try {
            const res = await fetch("/aboutus", {
                
                method: "GET",
                headers: {
                    
                    "Content-Type": "application/json",
                    Accept:"application/json"
                },
                credentials: "include",
                


            })
            const data = await res.json();
            console.log(data);
            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
        } catch (err) {
            // console.log("error",err);
            history.push('/login')
        }

    }
    // try{
    //     const res=await fetch('/about',{
    //         method:"GET",
    //         headers:{
    //             Accept:"application/json",
    //             "Content-Type":"application/json"
    //         },
    //         credentials:"include"

    //     });
    //     const data=await res.json();
    //     console.log(data)
    //     if  (!res.status===200){
    //         const error=new Error(res.error);
    //         throw error;
    //     }
    // }catch(err){
    //     console.log(err);
    //     history.push("/login");
    // }


    useEffect(() => {
        callAboutPage();
    }, [])
    return (
        <>
            <div className="container about-container">
                <form method="GET">
                    <div className="row">

                        <div className="col-md-4">
                            <div className="profile-image" >
                                <img src={profile} alt="profile" height="230" width="200" />
                            </div>

                        </div>
                        <div className="col-md-6" >
                            <div className="profile-head">
                                <div className="profile-name">
                                    Ashish Verma
                            </div>
                                <div className="profile-work">
                                    Web Developer
                            </div>
                                <div className="profile-rating">
                                    Ratings: 2/10

                            </div>
                            </div>
                            <ul className="nav nav-tabs" role="tablist" >
                                <li className="nav-item mr-1">
                                    <a className="nav-link active" data-toggle="tab" id="home-tab" href="#home" role="tab" aria-controls="home" area-selected="home">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" data-toggle="tab" id="profile-tab" href="#profile" role="tab" aria-controls="profile" area-selected="profile">Timeline</a>
                                </li>

                            </ul>

                        </div>
                        <div className="col-md-2">

                            <input type="submit" className="profile-button" value="Edit Profile" name="btnaddmore" />



                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="profile-link-head">
                                Work Link
                        </div>
                            <div className="profile-link-body">
                                <a href="https://www.linkedin.com/in/ashish-verma-3bb68573/" rel="noreferrer" target="_blank">Linkedin</a><br />
                                <a href="https://github.com/AshishVerma18" rel="noreferrer" target="_blank">Git-Hub</a><br />
                                <a href="https://www.facebook.com/ashishcsbe" rel="noreferrer" target="_blank">Facebook</a>
                                <a href="https://www.linkedin.com/in/ashish-verma-3bb68573/" rel="noreferrer" target="_blank">Linkedin</a><br />
                                <a href="https://github.com/AshishVerma18" rel="noreferrer" target="_blank">Git-Hub</a><br />
                                <a href="https://www.facebook.com/ashishcsbe" rel="noreferrer" target="_blank">Facebook</a>
                            </div>

                        </div>
                        <div className="col-md-8 pl-5 about-info">
                            <div className="tab-content profile-tab" id="myTabContent">
                                <div className="tab-pane fade show active mt-3 " id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div className="row mt-2">
                                        <div className="col-md-6">
                                            <label>User ID</label>
                                        </div>
                                        <div className="col-md-6 text-warning">
                                            12122j87r84
                                    </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-md-6">
                                            <label>Name</label>
                                        </div>
                                        <div className="col-md-6 text-warning">
                                            Ashish Verma
                                    </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-md-6">
                                            <label>Profession</label>
                                        </div>
                                        <div className="col-md-6 text-warning">
                                            Web Developer
                                    </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-md-6">
                                            <label className="mr-3">Email</label>
                                        </div>
                                        <div className="col-md-6 text-warning">
                                            aashish.640@gmail.com
                                    </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-md-6">
                                            <label>Phone</label>
                                        </div>
                                        <div className="col-md-6 text-warning">
                                            8892889170
                                    </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade mt-3 " id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <div className="row mt-2">
                                        <div className="col-md-6">
                                            <label>User ID</label>
                                        </div>
                                        <div className="col-md-6 text-warning">
                                            12122j87r84
                                    </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-md-6">
                                            <label>hhhh</label>
                                        </div>
                                        <div className="col-md-6 text-warning">
                                            Ashish Verma
                                    </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-md-6">
                                            <label>Profession</label>
                                        </div>
                                        <div className="col-md-6 text-warning">
                                            Web Developer
                                    </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-md-6">
                                            <label className="mr-3">Email</label>
                                        </div>
                                        <div className="col-md-6 text-warning">
                                            aashish.640@gmail.com
                                    </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-md-6">
                                            <label>Phone</label>
                                        </div>
                                        <div className="col-md-6 text-warning">
                                            8892889170
                                    </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>)
}
export default AboutUs;