import React, {Component} from 'react';
import './Post.css';
import 'bootstrap/dist/css/bootstrap.css';
import { faShekelSign ,faSearchLocation} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Post.css';

class Post extends Component {
    render() {
        const cls = (this.props.onhand_quantity > 0) ? 'qty' : '';
        const cls2 = (this.props.stock5 > 0) ? 'qty' : '';


        return (
                <div >
                    <div className="card " >
                        <div>{this.props.id}</div>
                        {/*<span>*/}
                        {/*    <img src={this.props.thumbnailUrl}  className="pic" alt="..."/>*/}
                        {/*    <img src={this.props.thumbnailUrl2}  className="pic" alt="..."/>*/}
                        {/*</span>*/}

                        <div className="card-body">
                            <h5 className="card-title">{this.props.item}</h5>
                            <p className="card-text">W.A.I # :{this.props.WAI}</p>
                            <p className="card-text">YouTech # :{this.props.YouTech}</p>
                            <p className="card-text">Lester # :{this.props.Lester}</p>
                            <p className="card-text">Class :{this.props.class}</p>
                            <p className="card-text">{this.props.vpartno} </p>
                            <p className="card-text" >{this.props.description}</p>
                            <p className= {cls}  >In Stock: {this.props.onhand_quantity}</p>
                            {/*<p className={cls2} >{this.props.stock5}  : במלאי מחסן 5 </p>*/}
                            {/*<p className="card-text">{this.props.Amp}Amp </p>*/}
                            {/*<p className="card-text">{this.props.R} {this.props.N}</p>*/}
                            <p className="card-text">IAT Cost Price :{this.props.unit_cost}  </p>
                            {/*<p className="card-text" dir="rtl">*/}
                            {/*    <FontAwesomeIcon icon={faSearchLocation} style={{color:"blue"}}/>*/}
                            {/*    {this.props.FirstFloor} כמות- {this.props.stock1} <br/> {this.props.secFloor}   כמות-{this.props.stock2}</p>*/}
                            {/*<a href="#" className="btn btn-primary">Go somewhere</a>*/}
                        </div>
                    </div>
                </div>
        );
    }
}

export default Post;