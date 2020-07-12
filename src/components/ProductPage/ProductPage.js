import React, {useState} from 'react';
import {Link, useParams} from "react-router-dom";
import './productpage.component.css';
import items from "../../items"

function ProductPage() {
    let params = useParams();
    const currentItem = items.find(function (_item){
        return _item.Id == params.id
    })
    const [item, setItem] = useState(currentItem);
    return (

        <main className="container">
            <div className="left-column">

                <img width="80"
                     height="100" data-image="red" className="active"
                     src={item.image}
                     alt=""/>
            </div>
            <div className="right-column">


                <div className="product-description">
                    <span>{item.type}</span>
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    <p>{item.descriptionTwo}</p>
                </div>


                <div className="product-configuration">


                    <div className="product-color">
                        <span>Size</span>

                    </div>

                    <div className="cable-config">
                        <span>configuration</span>

                        <div className="cable-choose">
                            <button>Natural Gas</button>
                            <button>LP</button>
                            <button>Direct Vent</button>
                        </div>

                        {/*
                            <a href="#">How to configurate your headphones</a>
*/}
                    </div>
                </div>


                <div className="product-price">
                    <span>${item.price}</span>
                    <a href="#" className="cart-btn">Add to cart</a>
                </div>
            </div>
        </main>
    )
}

export default ProductPage;
