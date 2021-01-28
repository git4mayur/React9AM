import Footers from "react";

interface IState{

};

interface IProps{

};

class Footer extends Footers.Component<IState,IProps>{

    render()
    {
        return(
            <h1> This is From Footer Component </h1>
        );
    };

};

export default Footer;