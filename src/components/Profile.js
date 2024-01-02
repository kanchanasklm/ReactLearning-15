
import { useEffect, useState } from "react";

const Profile=(props)=>{

    const[count,setCount]=useState(0)
    const[count2,setCount2]=useState(1)

    

    
    useEffect(()=>{
        const timer=setInterval(()=>{
            console.log("namste react op")
        },1000);

        

        return()=>{
            clearInterval(timer)
        };


      
    },[]);

    


    console.log("render");
    return(
        <div>
            <h3>Profile component</h3>
            <h2>{count}</h2>
            <h3>{count2}</h3>
            <button onClick={
                ()=>{setCount(1)}}>SetCount</button>
            <br/>
            <button onClick={
                ()=>{setCount2(2)}}>SetCount1</button>
            
        </div>
    )
}

export default Profile;