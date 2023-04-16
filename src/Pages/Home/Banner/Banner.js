import React from 'react';


const Banner = () => {
    return (
        <div>
            <div className="carousel w-full ">
                <div id="item1" className="carousel-item w-full h-full">
                    <img src="https://i.ibb.co/Y71VLh5/car-4965498-1920-4.jpg" className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src="https://i.ibb.co/yddGWYs/pexels-nordic-overdrive-627678-1-1.jpg" className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src="https://i.ibb.co/TTzHykm/pexels-abdulwahab-alawadhi-3422964-1-1.jpg" className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src="https://i.ibb.co/kSc8X0M/pexels-pixabay-326259-1-1.jpg" className="w-full" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Banner;