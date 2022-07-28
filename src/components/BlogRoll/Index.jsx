import React, { useEffect, useReducer, useRef } from 'react'
import '../../css/index.scss'

import { ArticleCard } from "../ArticleCard"
import { Articles } from './consts'
import Article from '../BlogArticle/Article'
import { Navbar } from "../Navbar";


const UpdateState = (state, action) => {
    switch (action.type) {
        case "SetIndex":
            // have not implemented React Router for
            // the sake of time so I am mimicking
            // a Link router with a boolean (index)
            state.index = action.value
            break;
        case "SetPage":
            state.page = action.value
            break;
        case "SetLimit":
            state.limit = action.value
            break;
        case "SetOffset":
            state.offset = action.value
            break;
        case "SetLoading":
            state.loading = action.value
            break;

    }
    return { ...state }

}

export default function Index() {

    const [{
        index,
        page,
        offset,
        limit,
        loading
    }, dispatch] = useReducer(UpdateState, {
        index: true,
        page: 1,
        offset: 0,
        limit: 6,
        loading: true
    }, undefined)

    const paginateBackRef = useRef()
    const mainRef = useRef()

    const handlePaginateNext = () => {
        if (offset !== 16 && limit !== 24) {
            dispatch({
                type: 'SetLimit',
                value: limit + 6
            })

            dispatch({
                type: 'SetPage',
                value: page + 1
            })

            dispatch({
                type: 'SetOffset',
                value: offset + 6
            })
        }
    }

    const handlePaginateBack = () => {
        if (offset !== 0 && limit !== 6) {
            dispatch({
                type: 'SetLimit',
                value: limit - 6
            })

            dispatch({
                type: 'SetPage',
                value: page - 1
            })

            dispatch({
                type: 'SetOffset',
                value: offset - 6
            })
        }
    }

    useEffect(() => {
        // prevent FOUC; there are better solutions for this :)
        if (mainRef.current?.classList.contains('loading')) {
            setTimeout(() => {
                mainRef.current?.classList.toggle('loading')
            }, 800)
        }
    }, [])

    useEffect(() => {
        paginateBackRef.current?.scrollIntoView()
    }, [limit])

    return (
        <>
            {loading &&
                <main ref={mainRef} id="main" className="loading">
                    {
                        index ?
                            <>
                                <header id="mainHeader">
                                    <h1>Scylla Group</h1>
                                </header>
                                <Navbar index={index}/>

                                <div id="featured-article_wrapper">
                                    <header id="featured-article_header">
                                        <h1>Goose? Geese? Goss? Ryan Gooseling?</h1>
                                    </header>
                                    <div id="featured-article_body">
                                        <h3>Ryan Gooseling Method Acting Video</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque deleniti dignissimos
                                            eos, harum illum laudantium nihil qui quidem vitae voluptatum. Accusantium alias
                                            animi dolores eos, hic illo inventore ipsa unde.</p>

                                        <div className="read-more_btn">
                                            <a href="#Article">Read More</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="divider"/>

                                <div id="mainBody">
                                    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis cupiditate dolore
                                        doloremque doloribus, fugiat itaque, labore laboriosam maiores maxime necessitatibus
                                        perspiciatis praesentium sunt! Deserunt enim ipsam quia quos. Minus, voluptatum.</h1>
                                </div>

                                <div id="paginate">
                                    {offset !== 0 &&
                                        <div ref={paginateBackRef} className="paginate-btn back" onClick={handlePaginateBack}>
                                            Back
                                        </div>
                                    }

                                    {
                                        Articles.slice(offset, limit).map((article) => {
                                            return (
                                                <ArticleCard title={article.title} img={article.img} desc={article.desc}
                                                             dispatchUp={dispatch}/>
                                            )
                                        })
                                    }

                                    {limit !== 24 &&
                                        <div className="paginate-btn next" onClick={handlePaginateNext}> Next </div>
                                    }
                                </div>
                                <div id="pages">
                                    <ol>
                                        {[1, 2, 3, 4].map((step, i) => {
                                            if (step === page) {
                                                return (
                                                    <li id='active-step' key={i}>{step}</li>
                                                )
                                            } else {
                                                return (
                                                    <li key={i}>{step}</li>
                                                )
                                            }
                                        })}
                                    </ol>
                                </div>
                            </>
                            :
                            <>

                                <header id="mainHeader">
                                    <h1>Scylla Group</h1>
                                </header>
                                <Navbar index={index}/>
                                <div className="divider"/>
                                <Article/>
                            </>
                    }
                </main>
            }
        </>
    )
}