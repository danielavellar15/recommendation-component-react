import React from 'react'

import RecommendationItem from '../recommendation-item/recommendation-item.jsx'
import './recommendation-list.css'

export default function RecommendationList(props) {

    const img = 'https://static.netshoes.com.br/produtos/camisa-flamengo-i-2021-sn-torcedor-adidas-masculina/02/NQQ-1178-002/NQQ-1178-002_zoom1.jpg?ts=1599854677&'
    const description = 'Camisa Flamengo I 20/21 S/N° Torcedor Adidas Masculina'
    const price = 'R$ 150,00'

    return (
        <div className="main">
            <RecommendationItem description={description} price={price} img={img}></RecommendationItem>
            <RecommendationItem description={description} price={price} img={img}></RecommendationItem>
            <RecommendationItem description={description} price={price} img={img}></RecommendationItem>
        </div>
    )
}