import React, { FC, useEffect, useState } from 'react'
import { CarouselEntry } from '../lib/types/data-types';
import Image from 'next/image'

const Carousel: FC<{ id:string, images: CarouselEntry[] }> = ({ id, images, children }) => {
    
    //TODO should find the maximum width
    const maxWidth:number = images[0].imgWidth;
    const containerStyle = "carousel slide relative flex-column"
    let imagesLeft = images.length - 1;
    const [imgs, setImgs] = useState(images.slice(0, 1));

    const nextImage = (x:any) => {
        if(imgs.length < images.length){
            const x:CarouselEntry[] =  images.slice(0, imgs.length + 1);
            setImgs(x)
        }
    }
    
    return (
        <div id={id} className={containerStyle} style={{maxWidth: maxWidth + "px"}} data-bs-ride="carousel">
            <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                {imgs.map((image, i) => {
                    if (i == 0) {
                        return (
                            <button
                                type="button"
                                data-bs-target={"#" + id}
                                data-bs-slide-to={i}
                                key={i}
                                className="active"
                                aria-current="true"
                                aria-label="Slide "
                            ></button>
                        )
                    } else {
                        return (
                            <button
                                key={i}
                                type="button" 
                                data-bs-target={"#" + id}
                                data-bs-slide-to={i}
                                aria-label={"Slide " + i}
                            ></button>
                        )
                    }
                })}
            </div>
            <div className="carousel-inner relative w-full overflow-hidden">
                {imgs.map((image, i) => {
                    if (i == 0) {
                        return (
                            <div key={i} className="carousel-item active relative float-left w-full">
                                <div className="relative overflow-hidden bg-no-repeat bg-cover" style={{ backgroundPosition: "50%" }}>
                                    <Image onLoadingComplete={(x) => nextImage(x)}  src={image.img} height={image.imgHeight} width={image.imgWidth} priority={true} className="block w-full h-full " />
                                </div>
                                <div className="carousel-caption hidden md:block absolute text-center">
                                    <h5 className="text-xl">{image.labelTitle}</h5>
                                    <p>{image.labelBody}</p>
                                </div>
                            </div>
                        )
                    } else {
                        return (
                            <div key={i} className="carousel-item relative float-left w-full">
                                <Image onLoadingComplete={(x) => nextImage(x)} src={image.img} height={image.imgHeight} priority={true} width={image.imgWidth} 
                                    className="block w-full h-full"
                                    alt="..."
                                />
                                <div className="carousel-caption hidden md:block absolute text-center">
                                    <h5 className="text-xl">{image.labelTitle}</h5>
                                    <p>{image.labelBody}</p>
                                </div>
                            </div>
                        )
                    }

                })}
            </div>
            <button
                className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                type="button"
                data-bs-target={"#" + id}
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                type="button"
                data-bs-target={"#" + id}
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousel