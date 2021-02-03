import React from "react";
import {BrowserRouter ,Route,NavLink} from "react-router-dom";
import PageOne from "./PageOne";
import PageThree from "./PageThree";
import PageTwo from "./PageTwo";

class Main extends React.Component<{},{}>
{
    constructor(props:{})
    {
        super(props);
    }
    render()
    {
        return(
            <React.Fragment>
                <BrowserRouter>
                    <NavLink to = "/page_One" style={{margin:100}} activeStyle={{color:"Red"}} 
                    exact={true} strict>Page One</NavLink>
                    <NavLink to = "/page_Two" style={{margin:100}} activeStyle={{color:"Red"}} 
                    exact={true} strict>Page Two</NavLink>
                    <NavLink to = "/page_Three" style={{margin:100}} activeStyle={{color:"Red"}} 
                    exact={true} strict>Page Three</NavLink>
               <Route path="/page_One" component={PageOne} exact={true} strict></Route>
               <Route path="/page_Two" component={PageTwo} exact={true} strict></Route>
               <Route path="/page_Three" component={PageThree} exact={true} strict></Route>
               
                </BrowserRouter>
            </React.Fragment>
        );
    };
};

export default Main;