import React from "react";

function HeroSection(props) {
    let { img } = props;
    return (
        <div className="bg-hero-bg md:bg-cover bg-center bg-no-repeat w-full flex justify-center py-20">
            <div className="relative z-0">
                <div className=" flex justify-center my-8 md:my-12">
                    <img src={img} alt={img} className="h-36 md:h-52 w-auto" />
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
