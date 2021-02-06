import React from 'react'
import './recommendation-item.css'

export default function RecommendationItem(props) {

    const {description, price, img} = props;
    
    const img_rating = 'https://lh3.googleusercontent.com/proxy/3MSfzunG-ZPzj6ioj6UEwuooBuTe59WWEvxATOig_QQKXwzAifx5JrjnnriHYBoxDZ48-70RPeyfCO9odWveMiAYHc-IBZU0byIPRR_dACjEaeFuJgXlkzvSZqOqRseD'

    return (
        <div className="Card">
            <div className="Card-img">
                <img src={img} alt={description} ></img>
            </div>
            <div className="Card-info">
                <div className="Card-description">
                    {description}
                </div>
                <div className="Card-rating">
                <img src={img_rating} alt="rating" ></img>
                </div>
                <div className="Card-price">
                    {price}
                </div>
            </div>
        </div>
    )
}