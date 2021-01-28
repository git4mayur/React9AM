import React from "react";
import { updateNamespaceExport } from "typescript";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";

interface IState{};
interface IProps{};

class Main extends React.Component<IState,IProps>{

    render(){
        return(
            <React.Fragment>
                <Body/>
                <Footer />
                <Header/>
            </React.Fragment>

        );
    }

};
export default Main;