import React from "react";

interface IState{};

interface IProp{};

class ChildOne extends React.Component<IProp,IState>
{
    constructor(props:IProp)
    {
        super(props)
    }
    render(){
        return(
<h1>Hello I'm From Child One Page</h1>
            );
    };
};

export default ChildOne;