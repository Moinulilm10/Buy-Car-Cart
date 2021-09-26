import React from 'react';

const Cart = (props) => {

    const { cart } = props || {};

    let rent = 0
    for (const info of cart) {
        rent = rent + info.rent
    }

    // const totalRent = cart.reduce((prev, curr) => prev + curr.rent, 0)

    return (
        <div>
            <h3>Track your cart</h3>
            <h5><strong>Total car taken: </strong>{cart.length}</h5>
            {<h5><strong>Total Rent: </strong>{rent}</h5>}
            <br />
            <h5>car list</h5>
            <br />
            <ul>
                {
                    cart.map(info => <li>{info.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Cart;