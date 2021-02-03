import React from "react";

interface IState{};

interface IProp{};

class ChildTwo extends React.Component<IProp,IState>
{
    constructor(props:IProp)
    {
        super(props)
    }
    render(){
        return(
<h1>Hello I'm From Child Two Page</h1>
            );
    };
};

export default ChildTwo;