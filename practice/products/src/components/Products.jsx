import { useState } from 'react';
import '../index.css'
import Style from './style.module.css'

function Product({ product: { image_url, id, rating, title, price, category } }) {

    const ProductRate = rating >= 4 ? Style.ratingHigh : Style.ratingLow

    return (
        <div className="col-4">
            <div className="product-details">
                <div className="product-img">
                    <img src={image_url} />
                </div>
                <div className="product-content">
                    <h3>{id}</h3>
                    <p>{category}</p>
                    <p>{title}</p>
                    <p className={ProductRate}>{rating}</p>
                    <strong>${price}</strong>
                </div>
            </div>
        </div>
    );
}

export { Product }