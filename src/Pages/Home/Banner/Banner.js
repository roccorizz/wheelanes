import React from 'react';


const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-[480px]">
                <div id="item1" className="carousel-item w-full">
                    <img src="https://i.ibb.co/wMxgbZJ/porsche-1851246-1280.jpg" className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src="https://i.ibb.co/hgbWTR0/car-4965498-1920.jpg" className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src="https://i.ibb.co/yQPrYTm/tunnel-4276025-1920.jpg" className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src="https://i.ibb.co/MZrTdWR/car-2039180-1920.jpg" className="w-full" />
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