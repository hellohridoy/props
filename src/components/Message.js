import React from "react";

export default class Message extends React.Component{
    

    constructor(){
        super();
        this.state = {
            message: "Welcome Visitor"
        }
    }
    
    chageMessage(){
        this.setState({
            message: "Thanks for Subscribe"
        })
    }


    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.chageMessage()}>Subscribe</button>
            </div>
            
        );
    }
}