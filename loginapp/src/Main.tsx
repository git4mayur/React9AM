import { BrowserRouter , Route,NavLink} from "react-router-dom";
import React from "react";
import Login from "./login";
import Dashbord from "./Dashbord";

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
                    <Route path="/" component={Login} exact={true} strict></Route>
               <Route path="/dashbord" component={Dashbord} exact={true} strict></Route>
                </BrowserRouter>
            </React.Fragment>
        );
    };
};

export default Main;