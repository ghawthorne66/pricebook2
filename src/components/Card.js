import React from 'react'
import '../css/CardList.component.css'
import {Link} from 'react-router-dom'

function Card(props) {
    return (
        <ul className="cards">
            <li className="cards__item">
                <p>{props.id}</p>
                <div className="card">
                    <div className="card__image">
                        <img src={props.img} alt={props.alt}/>
                    </div>
                    <div className="card__content">
                        <div className="card__title">
                            <Link to={"/product-page/" + props.id}>{props.title}</Link>
                        </div>
                        <p className="card__text">{props.description}</p>
                        <p>{props.descriptionTwo}</p>
                        <p className="price">${props.price}</p>

                        <button className="btn btn--block card__button">Add to Cart</button>
                    </div>
                </div>
            </li>

        </ul>

    )
}

export default Card







