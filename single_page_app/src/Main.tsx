import React from "react";
import {BrowserRouter as Router , Route,NavLink} from "react-router-dom";

import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import PageThree from "./PageThree";

class Main extends React.Component<{},{}>{

    constructor(props:{})
    {
        super(props);
    }

    render(){
        return(

            <React.Fragment>
                    <Router>
                        <NavLink to ="/page_one" exact={true} strict
                        activeStyle={{color:"turquoise"}}
                        style={{margin:100}}> <b>Page One</b>
                        </NavLink>
                        <NavLink to ="/page_two" exact={true} strict
                        activeStyle={{color:"tomato"}}
                        style={{margin:100}}><b>Page Two</b>
                        </NavLink>
                        <NavLink to ="/page_three" exact={true} strict
                        activeStyle={{backgroundColor:"springgreen"}}
                        style={{margin:100}}> <b>Page Three</b>
                        </NavLink>
                
                <Route path="/page_one" component={PageOne} exact={true} strict></Route>
                <Route path="/page_two" component={PageTwo} exact={true} strict></Route>
                <Route path="/page_thee" component={PageThree} exact={true} strict></Route>
            
                </Router>

            </React.Fragment>

        );

    };

};

export default Main;