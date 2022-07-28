import React, { useEffect, useState } from 'react'
import '../css/articleCard.scss'

export const ArticleCard = ({ title, img, desc, dispatchUp }) => {

    const [getImgAwaited, setImgAwaited] = useState("")

    const handleNextStep = () => {
        dispatchUp({
            type: 'SetIndex',
            value: false
        })
    }

    useEffect(() => {
        img.then( (result) => {
            setImgAwaited(result.url)
        })
    }, [])

    return (
        <>
            <a className="article-card" href="#Article">
                <article
                    onClick={handleNextStep}
                    className="article">
                    <h2>{title}</h2>
                    <div className="img-container">
                        <img src={getImgAwaited} alt="Article Image"/>
                        <sub>{desc}</sub>
                    </div>
                </article>
            </a>
        </>
    )
}