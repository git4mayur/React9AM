import Bodys from "react";

interface IState{};
interface IProps{};

class Body extends Bodys.Component<IState,IProps>{

    render(){
    return(
        <h1> This Is Coming From Body Section......</h1>
    );
}
    
};

export default Body;