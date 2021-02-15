import React from "react";
import  axios from "axios";
import {CountryData} from "../Model/Dom";

interface IState{

    CountrysData:CountryData[];

}
interface IProps{

}

export default class extends React.Component<IProps,IState>
{

    constructor(props:IProps)
    {
        super(props);
        this.state = {
            CountrysData:[]
        }
    }

    componentDidMount()
    {

        axios.get("https://restcountries.eu/rest/v2/lang/es").then((posRes)=>{

        const {data}= posRes;
        this.setState({
            CountrysData:data
        })        

        },(errorRes)=>{
            console.log(errorRes)
        });
    };

    render()
    {
        return(
            <React.Fragment>

                <table>
                        <tr>
                            <th>Name</th>
                            <th>NativeName</th>
                            <th>Capital</th>
                            <th>ohterAcronym</th>
                        </tr>
                {this.state.CountrysData.map((val:CountryData,inx:number)=>(
                    <tr>
                        <td>{val.name}</td>
                        <td>{val.nativeName}</td>
                        <td>{val.capital}</td>
                        <td>{val.ohterAcronym}</td>
                    </tr>
                ))};

                </table>

            </React.Fragment>

        );
    };

}