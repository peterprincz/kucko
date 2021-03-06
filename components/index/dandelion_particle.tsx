import React, { FC, useEffect, useState } from 'react'
import { DandelitonParticleData } from '../../lib/types/data-types';

const DandelitonParticle: FC<DandelitonParticleData> = ({ xTarget, yTarget, rotate, offsetX, offsetY,fadeOutTimeMS, animationtimeS, children }) => {

    const animationDef = "translate(" + xTarget+ "px, "+ yTarget + "px) rotate(" + rotate + "deg)";
    const [transform, setTransfrom] = useState("");
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setTransfrom(animationDef);
            setOpacity(1)
        }, 400);
        setTimeout(() => {
            setOpacity(0)
        }, fadeOutTimeMS)
        return () => {
        };
    }, []);

    return (
        <img 
        style={{
            transform: transform,
            transition: "opacity 4s  ease-in-out, transform " + animationtimeS +"s ease-in-out",
            opacity: opacity,
            position: "absolute",
            paddingLeft: offsetX,
            paddingRight: offsetY
        }} src={"/images/dandelion_piece_2.png"} />

    )
}
export default DandelitonParticle