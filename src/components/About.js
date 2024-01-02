
import Profile from "./Profile";

import ProfileClass from "./ProfileClass";
import { Component } from "react";

import UserContext from "../utils/userContext";

class About extends Component{

    constructor(props){
        super(props);
        // console.log("Parent-Constructor");
    }
    componentDidMount(){
        // console.log("Parent-componentDidMount");
    }
    render(){
        // console.log("Parent-render")
    
    return(
        <>
        <h1>About us page</h1>

        <UserContext.Consumer>
            {/* {(value)=>console.log(value)} */}

            {({user})=>(
                <h4 className="font-bold text-xl p-10">{user.name}-{user.email}</h4>
            )}
        </UserContext.Consumer>
        
       
        <Profile name={"First Child"} />
        
        </>
    )
}
}

export default About;

