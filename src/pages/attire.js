import React from 'react';
import Layout from "../components/Layout"
import boomMaestro from "../images/boommaestro.png"
import boomFennec from "../images/boomfennec.png"
import yajDominus from "../images/yajdominus.png"
import yajFennec from "../images/yajfennec.png"
import yajOctane from "../images/yajoctane.png"
import yajOctane2 from "../images/yajoctane2.png"

const attireArray = [boomMaestro, boomFennec, yajDominus, yajFennec, yajOctane, yajOctane2]

const attireRenderer = () => {
    return attireArray.map(image => {
        return(<img src={image} alt='' />)
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
