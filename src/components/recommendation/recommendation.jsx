import React from 'react'
import './recommendation.css'
import RecommendationList from '../recommendation-list/recommendation-list.jsx'

export default function Recommendation(props) {
    return (
        <React.Fragment>
            <h2>Recommendações</h2>
            <RecommendationList />
        </React.Fragment>
    )
}