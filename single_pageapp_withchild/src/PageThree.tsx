import React from "react";
import {BrowserRouter ,Route,NavLink} from "react-router-dom";
import ChildThree from "./ChildThree";
interface IState{};

interface IProp{};

class PageThree extends React.Component<IProp,IState>
{
    constructor(props:IProp)
    {
        super(props)
    }
    render(){
        return(

            <React.Fragment>
                <BrowserRouter>
                    <NavLink to ="/child_One" style={{margin:100}} activeStyle={{color:"tomato"}} 
                    exact={true} strict>
                    <br></br><br></br>   Child Three
                    </NavLink>
                    <Route path="/child_One" component={ChildThree} exact={true} strict></Route>  
                </BrowserRouter>
            </React.Fragment>
        );
    };
};

export default PageThree;
