import React from "react";

function HeroSection(props) {
    let results = [
        { key: 1, title: "Al Mulk", link: "/" },
        { key: 2, title: "Yaseen", link: "/" },
        { key: 3, title: "Ayat Lkursi", link: "/" },
        { key: 4, title: "Al Kahf", link: "/" },
        { key: 5, title: "Maryam", link: "/" },
    ];
    return (
        <div className="bg-hero-bg md:bg-cover bg-center bg-no-repeat w-full flex justify-center pt-20">
            <div className="relative z-0">
                <div className=" flex justify-center my-8 h-36 md:h-52 md:my-12">
                    <img src="/assets/quran-kareem.png" alt="quran" />
                </div>
                <div className=" flex justify-center my-8">
                    <input
                        type="text"
                        className="mr-4 md:mr-12 h-12 w-72 p-4 md:w-96 bg-white rounded-full border-gray-300 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="What do you want to listen to?"
                    />
                    <button className="px-4 rounded-full bg-cyan-500 hover:bg-cyan-600 text-white">
                        Search
                    </button>
                </div>
                <div className="my-4 flex justify-between">
                    {results.map((item) => (
                        <a
                            key={item.key}
                            href={item.link}
                            className=" px-2 py-0.5 rounded-full bg-white text-black  hover:bg-slate-100"
                        >
                            {item.title}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
