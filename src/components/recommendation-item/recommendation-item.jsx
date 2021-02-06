import React from 'react'
import './recommendation-item.css'

export default function RecommendationItem(props) {

    const img = 'https://static.netshoes.com.br/produtos/camisa-flamengo-i-2021-sn-torcedor-adidas-masculina/02/NQQ-1178-002/NQQ-1178-002_zoom1.jpg?ts=1599854677&'
    const description = 'Camisa Flamengo I 20/21 S/N° Torcedor Adidas Masculina'
    const price = 'R$ 150,00'
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