import React, { useEffect, useState } from 'react';
import CarInfo from '../CarInfo/CarInfo';
import Cart from '../Cart/Cart';

const Card = () => {

    const [infos, setInfo] = useState([])

    // cart car state
    const [cart, setCart] = useState([])

    // event handleer for card button 
    const handleAddToCart = (info) => {
        const newCart = [...cart, info]
        setCart(newCart)
    }


    useEffect(() => {
        fetch('./fakeData.json')
            .then(res => res.json())
            .then(data => setInfo(data))
    }, [])


    return (
        <div>
            <div className="row">
                <div className="col-md-9">
                    {/* car card  */}
                    <div className="row">

                        {
                            infos.map(info => <CarInfo
                                key={info.id}
                                info={info}
                                handleAddToCart={handleAddToCart}
                            >
                            </CarInfo>)
                        }


                    </div>

                </div>
                <div className="col-md-3">
                    {/* calculation cart  */}
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Card;