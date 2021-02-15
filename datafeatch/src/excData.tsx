import React from "react";
import axios from "axios";
import {country} from "./countries";

interface IProp{
} 
interface Istate{
    countries : country[];

}
 class Main extends React.Component<IProp,Istate>
{
    constructor(props:IProp)
    {
        super(props);
        this.state = {
            countries:[]
        }
    }
    componentDidMount()
    {
            axios.get("https://restcountries.eu/rest/v2/all").then((posRes)=>{

            const {data}=posRes;
            this.setState(
                {
                    countries:data
                }
            );
            },(errorRes)=>{
                console.log(errorRes);
            });

    };
    render()
    {
        return(
            <React.Fragment>
                <h1>Countries Data</h1>
                <table>
                        <tr>
                            <th>Name</th>
                            <th>Capital</th>
                            <th>Region</th>
                            <th>Population</th>
                            <th>Currencies</th>
                            <th>Flag</th>
                        </tr>
                        {this.state.countries.map((ex:country,inx:number)=>(

                            <tr>
                                    <td>{ex.name}</td>
                                    <td>{ex.capital}</td>
                                    <td>{ex.region}</td>
                                    <td>{ex.population}</td>
                                    <td>{ex.currencie}</td>
                                    <td><img width="100Px" height="50px" src={ex.flag}></img></td>  
                            </tr>
                        ))};

                </table>
            </React.Fragment>
        );
    }
}
export default Main;