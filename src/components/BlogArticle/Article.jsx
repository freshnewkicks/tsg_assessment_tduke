import React, {useEffect, useState} from 'react'
import { Navbar } from "../Navbar"
import { Articles } from '../BlogRoll/consts'

export default function Article() {
    const [randArticle, setRandArticle] = useState({
        title: 'A Title',
        desc: 'A description',
        img: undefined
    })

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        let rand = Math.floor(Math.random() * Articles.length);

        (async() => {
            await fetch('https://picsum.photos/3840/2160?blur')
                .then((res) => {
                setRandArticle({
                    title: Articles[rand].title,
                    desc: Articles[rand].desc,
                    img: res.url
                })
            })
                .catch( (error) => {
                    throw new Error(error)
                })
                .finally(() => {
                    setLoading(false)
                })
        })()


    }, [])

    return (
        <>
            {!loading ?
                <>
                    <div id="article_hero">
                        <div id="hero_overlay">
                            <h1>{randArticle.title}</h1>
                            <p>{randArticle.desc}</p>
                            <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, cumque, voluptas. Ad aliquid autem dolorem est, fuga nihil nulla obcaecati, quae quo quos repudiandae, velit veritatis? Ad autem deserunt eum!</span></p>
                            <div className="byline">
                                <address className="author">By George Orwell</address>
                                on <time dateTime="1984-08-28" title="August 28th, 1984">8/28/1984</time>
                            </div>
                        </div>
                        <img id="hero_img" src={randArticle.img} alt=""/>
                    </div>

                    <div className="divider" />

                    <div id="article_wrapper">
                        <article id="article_body">
                            <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur cum deserunt dolores ducimus ea earum esse impedit iure nam nemo nobis non odit praesentium, quaerat qui repudiandae saepe vel voluptas.</span><span>Animi cumque ea exercitationem expedita fugiat officiis quam ratione vel. A ab, adipisci alias consequuntur cumque distinctio doloremque eaque est impedit itaque modi, odio perspiciatis quos sapiente temporibus, ut vitae?</span><span>Assumenda at eaque earum esse eveniet ex expedita explicabo illum iusto laborum laudantium mollitia, neque nisi odio pariatur provident quam quas quidem, quos repellat sapiente sit ullam veritatis? Natus, quis?</span></p>
                        </article>
                        <aside>
                            <h1>Find your perfect retirement home</h1>
                            <img src={randArticle.img} alt=""/>
                        </aside>
                    </div>

                </>
                :
                <>
                    <h1 id="fetching">Ohh, look! A fetch request! Hold on, I'm grabbing your content!</h1>
                </>
            }
        </>
    )
}