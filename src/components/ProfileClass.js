
import React from "react";

class ProfileClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userINfo:{
                name:"dummy name",
                location:"dummy location",
            }
        };
        console.log("child-Constructor"+this.props.name);
    }

    componentDidMount(){

    this.timer=setInterval(()=>{
        console.log("NamsteReact")
    },1000)

    console.log("Child-componentDidMount")
}

    componentDidUpdate(){ 
            console.log("componenetDidUpdate")
            
            }
    componentWillUnmount(){
            clearInterval(this.timer)
            console.log("componentWillUnmount")
        }
    render(){
        const{}=this.state;
        console.log("child-render"+this.props.name);
        return(
            <>
            <h1>ProfileClass Component</h1>
            <img src={this.state.userINfo?.avatar_url}/>
            <h2>Name:{this.state.userINfo?.name}</h2>
            <h2>Location:{this.state.userINfo?.id}</h2>
           </>
        )
    }

}


export default ProfileClass;