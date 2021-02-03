import React from "react";

interface IState{};
interface IProps{};

class PageOne extends React.Component<IState,IProps>
{
    render(){
        return(

            <h1>This Is From Page One</h1>
        );
    }
}

export default  PageOne;