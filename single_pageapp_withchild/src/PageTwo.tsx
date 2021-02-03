import React from "react";
import {BrowserRouter ,Route,NavLink} from "react-router-dom";
import ChildTwo from "./ChildTwo";
interface IState{};

interface IProp{};

class PageTwo extends React.Component<IProp,IState>
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
                    <br></br><br></br>   Child Two
                    </NavLink>
                    <Route path="/child_One" component={ChildTwo} exact={true} strict></Route>  
                </BrowserRouter>
            </React.Fragment>
        );
    };
};

export default PageTwo;
