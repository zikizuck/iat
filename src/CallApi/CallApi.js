import React, {Component} from 'react';
import Post from "./Post/Post";
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";



class CallApi extends Component {
    constructor(props) {
        super(props);
        this.state ={
            product:[],
            search :"",
            search2 :"",
            search3 :"",
            value : "item"
        }

    }

    componentDidMount () {
        fetch( 'https://sheet.best/api/sheets/60b772a2-1a0e-422e-9467-6182a09001c3' )
            .then(res => res.json())
            .then(product => {
                this.setState({product});
                console.log(product);
            })

    }
     clickHandler (e){
        if(e.target.value !==""){
            this.setState({search : e.target.value.toUpperCase()})
        }

     }
    search2Handler (e){
        if(e.target.value !==""){
            this.setState({search2 : e.target.value.toUpperCase()})
        }

    }
    search3Handler (e){
        if(e.target.value !==""){
            this.setState({search3 : e.target.value.toUpperCase()})
        }

    }

    optionHandler(event) {
        this.setState({value:event.target.value})
    }



render() {
        const searchValue = this.state.value;
        return (

            <div>


                <div className="container">
                    {/*<select onChange={this.optionHandler.bind(this)}>*/}
                    {/*    <option value="wai">WAI</option>*/}
                    {/*    <option value="wai">WAI</option>*/}
                    {/*    <option value="wai">WAI</option>*/}
                    {/*    <option value="wai">WAI</option>*/}
                    {/*</select>*/}

                    <form  className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search"
                               placeholder="by IAT number"
                               onChange={this.clickHandler.bind(this)}
                               onKeyPress={(e)=>{e.key === 'Enter'&& e.preventDefault()}}/>
                        <input className="form-control mr-sm-2" type="search"
                               placeholder="By WAI number"
                               onChange={this.search2Handler.bind(this)}
                               onKeyPress={(e)=>{e.key === 'Enter'&& e.preventDefault()}}
                        />
                        <input className="form-control mr-sm-2" type="search"
                               placeholder="By J&N number"
                               onChange={this.search3Handler.bind(this)}
                               onKeyPress={(e)=>{e.key === 'Enter'&& e.preventDefault()}}
                        />

                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Reset</button>
                    </form>
                    <Loader type="Bars" color="#somecolor" height={80} width={80} timeout={3000}/>



                    <div className="card-deck">
                        {this.state.product
                            .filter(prod => prod.item.includes(this.state.search) )
                            .filter(prod => prod.WAI.includes(this.state.search2) )
                            .filter(prod => prod.JN.includes(this.state.search3) )
                            .map(product => {
                                return <Post
                                    {...product}

                                />
                            })}

                    </div>
                </div>
            </div>
        );
    }
}

export default CallApi;

