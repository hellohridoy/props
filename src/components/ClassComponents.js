import React from "react";

export default class ClassComponents extends React.Component{
    render(){
        return(
            <h1>{this.props.name} a.k.s {this.props.id}</h1>
        );
    }
}