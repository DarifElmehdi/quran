import HeroSection from "./components/pages/HeroSection";
import NavBar from "./components/pages/NavBar";
import Reciters from "./components/pages/Reciters";
import Surahs from "./components/pages/Surahs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuranSurahs from "./components/pages/QuranSurahs";
import Footer from "./components/pages/Footer";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <NavBar />
                            <HeroSection />
                            <Footer />
                        </>
                    }
                />
                <Route
                    path="/reciters"
                    element={
                        <>
                            <NavBar />
                            <HeroSection />
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
                            <HeroSection />
                            <Surahs />
                            <Footer />
                        </>
                    }
                />
                <Route
                    path="/quransurahs"
                    element={
                        <>
                            <NavBar />
                            <HeroSection />

                            <QuranSurahs />
                            <Footer />
                        </>
                    }
                />
                <Route
                    path="/quran"
                    element={
                        <>
                            <NavBar />
                            <HeroSection />
                            <div>in quran section</div>
                        </>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
