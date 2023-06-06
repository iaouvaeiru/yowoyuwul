import React from 'react';
import Layout from "../components/Layout"
import yajDominus from "../images/yajdominus.png"
import yajFennec from "../images/yajfennec.png"
import yajOctane from "../images/yajoctane.png"
import yajOctane2 from "../images/yajoctane2.png"

const yajjiiPresetArray = [
    {
        image: yajDominus,
        name: "yajjii Dominus"
    },
    {
        image: yajFennec,
        name: "yajjii Fennec"
    },
    {
        image: yajOctane,
        name: "yajjii Octane"
    },
    {
        image: yajOctane2,
        name: "yajjii Octane 2"
    }
]

const roughBuddyPresetArray = []

const PresetGenerator = (array) => {
    return (array.map(presetObj => {
        return (
                <img src={presetObj.image} alt={presetObj.name}/>
        )
    }))
}


const MeetThePresets = () => {
    return (
        <Layout>
            <div>
                {PresetGenerator(yajjiiPresetArray)}
                {PresetGenerator(yajjiiPresetArray)}
            </div>
        </Layout>
    );
}

export default MeetThePresets;
