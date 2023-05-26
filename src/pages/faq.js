import React from 'react';
import Layout from "../components/Layout"

const imgLayout = {
    height: "auto",
    maxWidth: '60%',
    display: "block",
    marginLeft: "auto",
    marginRight: 'auto'
}

const Faq = () => {
    return (
        <Layout>
            <div>
                <img src='https://i.imgur.com/6Olxq0m.jpg' alt='must be good then?'  style={imgLayout}/>
                <br/>
                image source: https://www.reddit.com/r/RocketLeague/comments/g804a3/silver_league_for_life/
            </div>
        </Layout>
    );
}

export default Faq;
