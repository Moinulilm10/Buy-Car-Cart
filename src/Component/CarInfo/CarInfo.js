import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const CarInfo = (props) => {

    const element = <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>

    const { name, model, brand, country, rent, img } = props.info || {}

    console.log(props.info)

    return (
        <div className="col-md-4 g-5">
            <div class="row row-cols-1 row-cols-md-3">
                <div class="col">
                    <div class="card" style={{ "width": "18rem" }}>
                        <img src={img} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title"><strong> Name: </strong> {name}</h5>
                            <h5 class="card-title"><strong> Model: </strong> {model}</h5>
                            <h5 class="card-title"><strong> Brand: </strong> {brand}</h5>
                            <h5 class="card-title"><strong> Country: </strong> {country}</h5>
                            <h5 class="card-title"><strong> Rent: </strong> {rent}</h5>

                            <button onClick={() => props.handleAddToCart(props.info)} className="btn btn-primary">{element} Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default CarInfo;