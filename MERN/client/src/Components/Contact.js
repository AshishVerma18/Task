import React from 'react'

 const Contact = () => {
    return (
        <>
       
        <div className="container"style={{background:"none"}}>
            <div className="row">
                <div className="col-4">
   
                    <div className="card "style={{width:"70%",backgroundColor:"slategrey ",textAlign:"center",fontSize:"20px"}}>
                        <div className="card-header"><i className="zmdi  zmdi-phone-in-talk float-left m-2"/>Phone</div>
                        <div className="card-body">8892889170</div>
                    </div>
                   
                </div>
                <div className="col-4">
                <div className="card"style={{backgroundColor:"slategrey ",textAlign:"center",fontSize:"20px",width:"70%"}}>
                        <div className="card-header"><i className="zmdi  zmdi-email float-left m-2"/>Email</div>
                        <div className="card-body">aashish.640@gmail.com</div>
                    </div>
                </div>
                <div className="col-4">
                <div className="card" style={{backgroundColor:"slategrey ",fontSize:"20px",textAlign:"center",width:"70%"}}>
                        <div className="card-header "><i className="zmdi  zmdi-map float-left m-2"/>Address</div>
                        <div className="card-body">Bangalore, India</div>
                    </div>
                </div>
            </div>
            <div className="row"style={{backgroundColor:"slategrey",marginTop:"20px",borderRadius:"10px"}}>
                <div className="col-6">
                    <div className="card"style={{width:"200%",textAlign:"center"}}>
                        <div className="card-header">
                            Get in Touch
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="form-group"style={{float:"left",marginLeft:"20px"}}>
                                    <input type="text" className="form-control"name="contact_form_name" id="contact_form_name" placeholder="Your Name" />
                                </div>
                                <div className="form-group"style={{float:"left",marginLeft:"20px"}}>
                                    <input type="email" className="form-control"name="contact_form_email" id="contact_form_email" placeholder="Your Email"/>
                                </div>
                                <div className="form-group"style={{float:"left",marginLeft:"20px"}}>
                                    <input type="number" className="form-control"name="contact_form_number" id="contact_form_number" placeholder="Your Phone Number"/>
                                </div>
                                <div className="form-group">
                                    <textarea type="text" className="form-control" placeholder="Message"rows="10" cols="50"/>
                                </div>
                                <div className="form-group form-button">
                                    <input type="submit" className="btn btn-primary"name="contact_form_btn" id="contact_form_btn" value="Send Message"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
        </>
    )
}
export default Contact;