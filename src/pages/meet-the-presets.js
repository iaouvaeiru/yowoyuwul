import React from 'react';
import Layout from "../components/Layout"
import yajDominus from "../images/yajdominus.png"
import yajFennec from "../images/yajfennec.png"
import yajOctane from "../images/yajoctane.png"
import yajOctane2 from "../images/yajoctane2.png"

const yajjiiPresetArray = [
    {
        image: yajDominus,
        name: "yajDominus"
    },
    {
        image: yajFennec,
        name: "yajFennec"
    },
    {
        image: yajOctane,
        name: "yajOctane"
    },
    {
        image: yajOctane2,
        name: "yajOctane2"
    }
]

const yajjiiPresetGenerator = () => {
    return (yajjiiPresetArray.map(presetObj => {
        return (
            <div>

            </div>
        )
    }))
}

const roughBuddyPresetArray = []

const roughBuddyPresetGenerator = () => {
    return (roughBuddyPresetArray.map(presetObj => {
        return (
            <div>

            </div>
        )
    }))
}

const MeetThePresets = () => {
    return (
        <Layout>
            <div>
            
            </div>
        </Layout>
    );
}

export default MeetThePresets;
