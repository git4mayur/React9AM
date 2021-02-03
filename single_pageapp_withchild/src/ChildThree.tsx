import React from "react";

interface IState{};

interface IProp{};

class ChildThree extends React.Component<IProp,IState>
{
    constructor(props:IProp)
    {
        super(props)
    }
    render(){
        return(
<h1>Hello I'm From ChildThree Page</h1>
            );
    };
};

export default ChildThree;