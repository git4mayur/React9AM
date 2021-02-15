import React from "react";
import {BrowserRouter ,Route,NavLink} from "react-router-dom";
import ChildOne from "./ChildOne";
interface IState{};

interface IProp{};

class PageOne extends React.Component<IProp,IState>
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
                    <br></br><br></br>   Child One
                    </NavLink>
                    <Route path="/child_One" component={ChildOne} exact={true} strict></Route>  
                </BrowserRouter>
            </React.Fragment>
        );
    };
};

export default PageOne;
