import { Button, TextField } from "@material-ui/core";
import React from "react";
import {History, LocationState} from "history";
interface IState{
    uname:String;
    pwd:String;
} 
interface IProps{

    history:History<LocationState>;

};
class Login extends React.Component<IProps,IState>
{
    constructor(props:IProps)
    {
        super(props);
        this.state={
            uname:"",
            pwd: ""
        }
    };

    handleChange = (event:any)=>{
        const {name,val} = event.target;
        console.log("This Is fom OnChange "+this.state.uname)
        
        switch(name)
        {
            case "uname":
                this.setState({
                    uname:val
                });
                break;
            case "pwd":
                this.setState({
                    pwd:val
                })
                break;
        }

    };

    login =()=>{

        console.log("Login Method");
        console.log(this.state.uname + "  "+ this.state.pwd);
        if(this.state.uname ==="mayur" && this.state.pwd === "mayur")
        {
            this.props.history.push("/Main");
        }
        else
        {
            alert("Login Failed Please try Again !!!")
        }
    };
    render(){
        return(
                <React.Fragment>
                    <TextField  variant="outlined" 
                                label="User Name"
                                name="uname"
                                value={this.state.uname}
                                onChange ={this.handleChange} 
                              >
                    </TextField>
                    
                    <br></br><br></br><br></br>
                    <TextField  variant="outlined" 
                                label="Password"
                                name="pwd"
                                value={this.state.pwd}
                                onChange ={this.handleChange}
                              >
                    </TextField>
                    <br></br><br></br><br></br>
                    <Button variant="contained" color="primary" onClick={this.login}
                    > Login</Button>
                </React.Fragment>
                
        );

    };
}

export default Login;