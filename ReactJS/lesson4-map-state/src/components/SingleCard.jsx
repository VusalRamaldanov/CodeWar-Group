import React, { Component } from 'react'

class SingleCard extends Component {
    render() {
        const {img,title,price,color,stock} = this.props.propdata;
        return (
            <div className="col-12 col-sm-6 col-md-4">
                <div className="card">
                    <img src={img} height={500} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{price}$</p>
                        <p className="card-text">{color} <span style={{"height":"30px","width":"30px","border":"1px solid #000","display":"inline-block","backgroundColor":color}}></span></p>
                        <button onClick={()=>{alert('product add basket')}} className={`btn btn-${stock?"success":"danger"} ${stock?"":"disabled"}`}>Buy now</button>
                    </div>
                </div>
            </div>

        )
    }
}

export default SingleCard