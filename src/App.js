import HeroSection from "./components/pages/HeroSection";
import NavBar from "./components/pages/NavBar";
import Reciters from "./components/pages/Reciters";
import Surahs from "./components/pages/Surahs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuranSurahs from "./components/pages/QuranSurahs";
import Footer from "./components/pages/Footer";
import Statistics from "./components/pages/Statistics";
import RandomAyah from "./components/pages/RandomAyah";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <NavBar />
                            <HeroSection img="/assets/quran-kareem.png" />
                            <RandomAyah />
                            <Statistics />
                            <Footer />
                        </>
                    }
                />
                <Route
                    path="/reciters"
                    element={
                        <>
                            <NavBar />
                            <HeroSection img="/assets/quran-kareem.png" />
                            <Reciters />
                            <Footer />
                        </>
                    }
                />
                <Route
                    path="/audio/:identifier"
                    element={
                        <>
                            <NavBar />
                            <HeroSection img="/assets/quran-kareem.png" />
                            <Surahs />
                        </>
                    }
                />
                <Route
                    path="/quransurahs"
                    element={
                        <>
                            <NavBar />
                            <HeroSection img="/assets/quran-kareem.png" />
                            <QuranSurahs />
                            <Footer />
                        </>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
