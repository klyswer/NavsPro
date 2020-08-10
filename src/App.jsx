import React from "react";
import "./App.css";
// import { useFirebaseApp } from "reactfire";

//COMPONENTS
import Header from "./componentes/Header.jsx";
import Slider from "./componentes/Slider.jsx";
import Footer from "./componentes/Footer.jsx";
import Galery from "./componentes/Galery.jsx";

// OBJETO DE DATOS
const Textos = {
  titles: {
    title1: "Bienvenidos a Mpr&r",
    title2: "Materias primas de calidad",
    title3: "Lava constantemente tus manos",
  },
  subtitles: {
    subtitle1: "Toda la diversidad en Mpr&r",
    subtitle2: "Otro titulo",
    subtitle3: "Este es otro título",
  },
  h1: {
    galeria: "Deslice y vea nuestro catalogo de materias primas",
  },
};

function App() {
  // const firebase = useFirebaseApp();
  // console.log(firebase);
  return (
    <div className="App">
      <Header title="Mp-R&R" id="1" />
      <Slider
        titleImg1={Textos.titles.title1}
        titleImg2={Textos.titles.title2}
        titleImg3={Textos.titles.title3}
      />
      <Galery className="Galery" titleGalery={Textos.h1.galeria} />
      <Footer />
    </div>
  );
}

export default App;
