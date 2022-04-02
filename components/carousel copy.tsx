import React, { FC, Props } from 'react'
import { CarouselEntry } from '../lib/types/data-types';
import 'tw-elements';


const Carousel: FC<{ images: CarouselEntry[] }> = ({ images, children }) => {

    console.log(images)

    return (
        <div id="carouselExampleCaptions" className="carousel slide relative" data-bs-ride="carousel">
            <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                {images.map((image, i) => {
                    return (
                        <button 
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to={i}
                            key={i}
                            className="active"
                            aria-current="true"
                            aria-label="Slide 1"
                        ></button>
                    )
                })}
            </div>
            <div className="carousel-inner relative w-full overflow-hidden">
                {images.map((image, i) => {
                    return(
                    <div key={i} className="carousel-item active relative float-left w-full">
                        <div className="relative overflow-hidden bg-no-repeat bg-cover" style={{ backgroundPosition: "50%" }}>
                            <img src={image.img} className="block w-full h-full" />
                            <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-black opacity-50"></div>
                        </div>
                        <div className="carousel-caption hidden md:block absolute text-center">
                            <h5 className="text-xl">{image.labelTitle}</h5>
                            <p>{image.labelBody}</p>
                        </div>
                    </div>
                    )
                })}
            </div>
            <button
                className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousel
