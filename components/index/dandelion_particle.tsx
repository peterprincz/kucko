import React, { FC, Props, useEffect, useState } from 'react'
import { Dandelion } from '../../lib/types/data-types';

function getRndInteger(min:number, max:number):number {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
  

const DandelitonParticle: FC<Dandelion> = ({ xTarget, yTarget, rotate, offsetX, offsetY,fadeOutTimeMS, animationtimeS, children }) => {


    const animationDef = "translate(" + xTarget+ "px, "+ yTarget + "px) rotate(" + rotate + "deg)";
    const [transform, setTransfrom] = useState("");
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setTransfrom(animationDef);
            setOpacity(1)
        }, 100);
        setTimeout(() => {
            setOpacity(0)
        }, fadeOutTimeMS)
        return () => {
        };
    }, []);



    return (
        <img style={{
            transform: transform,
            transition: "opacity 4s  ease-in-out, transform " + animationtimeS +"s ease-in-out",
            opacity: opacity,
            position: "absolute",
            paddingLeft: offsetX,
            paddingRight: offsetY
        }} src={"/images/dandelion_piece.png"} />

    )
}
export default DandelitonParticle