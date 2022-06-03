import React, { useState } from "react";
import "../styles/form.css"
import User from "../images/add-user.png"


export default function App() {

    const [errmsgn, seterrorn] = useState("")
    const [emilerror, setemailerr] = useState("")
    const [namerror, setnameerror] = useState("")
    const [errmsge, seterrore] = useState("")
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [mobile, setmobile] = useState("")
    const [country, setcountry] = useState("")
    const [state, setstate] = useState("")
    const [city, setcity] = useState("")
    const [message, setmessage] = useState("")
    const [success, setsuccess] = useState("d-none")
    const [forms, setfoms] = useState("")

    const validate = () => {
        if (!name) {
            seterrorn("errors")
            setnameerror("Name is required")
        } else if (!email || !(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email))) {
            seterrore("errors")
            setemailerr("Please enter valid email id !")
        } else {
            setfoms("d-none")
            setsuccess("")
            setTimeout(() => {
                setfoms("")
                setsuccess("d-none")
                setname("")
                setemail("")
                setcity("")
                setmobile("")
                setcountry("")
                setstate("")
                setmessage("")
            }, 2000);
        }
    }


    return (
        <div className="total h-100">
            <div className="info text-center mb-3 pt-3">
            </div>
            <div className={"form "}>
                <div className="thumbnail"><img src={User} /></div>
                <form className={"login-form " + forms}>
                    <div className="row">
                        <div className="col">
                            <input type="text" value={name} name="Name" maxLength="30" className={"form-control mb-0" + errmsgn} onChange={(e) => {
                                seterrorn("")
                                setnameerror(" ")
                                setname(e.target.value)
                            }} placeholder="Name*" />
                             <p className={"errmsgs text-left mt-0 mb-2 text-danger pl-2 text-small "}>{namerror}</p>
                        </div>
                        <div className="col">
                            <input type="text" value={email} name="Email" maxLength="50" className={"form-control mb-0 " + errmsge} onChange={(e) => {
                                seterrore("")
                                setemailerr("")
                                setemail(e.target.value)
                            }} placeholder="Email*" />
                            <p className={"errmsgs text-left mt-0 mb-2 text-danger pl-2 text-small "}>{emilerror}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <input type="text" value={mobile} className="form-control" maxLength="20" pattern="[0-9]*" onKeyPress={(event) => {
                                if (!/[0-9+]/.test(event.key)) {
                                    event.preventDefault();
                                }
                            }} onChange={(e) => { setmobile(e.target.value) }} placeholder="Mobile" />
                        </div>
                        <div className="col ">
                            <input type="text" value={country} className="form-control" maxLength="15" onChange={(e) => { setcountry(e.target.value) }} placeholder="Country" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <input type="text" value={city} className="form-control" maxLength="15" onChange={(e) => { setcity(e.target.value) }} placeholder="City" />
                        </div>
                        <div className="col">
                            <input type="text" value={state} className="form-control" maxLength="15" onChange={(e) => { setstate(e.target.value) }} placeholder="State" />
                        </div>
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" value={message} placeholder="Message" maxLength="300" onChange={(e) => { setmessage(e.target.value) }} id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>

                    <button type="button" onClick={validate} className="btn btn-primary btn-lg btn-block">Submit</button>
                </form>
                <div className={"profile " + success}>
                    <h5>Hi I'm {name}</h5>
                    <p>{email}</p>
                    <p>{mobile}</p>
                    <p>{country}</p>
                    <p>{city}</p>
                    <p>{state}</p>

                </div>

            </div>
        </div>


    );
}