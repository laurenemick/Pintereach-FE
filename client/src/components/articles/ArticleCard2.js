import React from 'react'
import styled from 'styled-components'

const Article = styled.div`
    margin: 2%;
    padding: 4%;
    border: 1px solid rgba(var(--ca6,219,219,219),1);
    box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
    border-radius: 3px;
    text-align: center;
    font-family: 'Roboto', sans-serif;
`;

function ArticleCard2(props) {
    const { article } = props;

    const EachArticle = ({ info }) => (
        <Article className='article'>
            <h3 className='title'>{info.title}</h3>
            <br />
            <div className='description'>{info.description}</div>
            <br />
            <div>
                <img style={{ width:'40%' }} src={info.urlToImage} />
            </div>
        </Article>
    )

    return (
        <div className="article-card">
            {
                article.map(ar => {
                    return <EachArticle key={ar.title} info={ar} />
                })
            }
        </div>
    )
}

export default ArticleCard2;