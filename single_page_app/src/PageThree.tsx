import React from "react";

interface IState{};
interface IProps{};

class PageThree extends React.Component<IState,IProps>
{
    render(){
        return(
          <h1>This Is From Page Three</h1>
        );
    }
};

export default PageThree;