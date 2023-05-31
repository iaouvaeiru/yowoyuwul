import React from 'react';
import Layout from "../components/Layout"
import boomMaestro from "../images/boommaestro.png"
import boomFennec from "../images/boomfennec.png"


const attireArray = [boomMaestro, boomFennec]

const attireRenderer = () => {
    return attireArray.map(image => {
        return(
            <div>
                <img src={image} alt='' />
            </div>
        )
    })
}

// const attireRenderer = () => {
//     return attireArray.map((image, index) => (
//       <img key={index} src={image} alt="" />
//     ));
//   };

const Attire = () => {
    return (
        <Layout>
            <div>
                {attireRenderer()}
            </div>
        </Layout>
    );
}

export default Attire;
