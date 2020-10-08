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
    title1: "Bienvenidos a R&RMP",
    title2: "Amplia gama de materias primas",
    title3: "Despacho Nacional e Internacional",
    title4: "Líderes en materias primas",
  },
  subtitles: {
    subtitle1: "",
    subtitle2: "",
    subtitle3: "",
  },
  h1: {
    galeria: "Materias primas para fabricación de artículos de aseo.",
  },
};

function App() {
  // const firebase = useFirebaseApp();
  // console.log(firebase);
  return (
    <div className="App">
      <Header title="R&R-Mp" id="1" />
      <Slider
        titleImg1={Textos.titles.title1}
        titleImg2={Textos.titles.title2}
        titleImg3={Textos.titles.title3}
        titleImg4={Textos.titles.title4}
      />
      <Galery className="Galery" titleGalery={Textos.h1.galeria} />
      <Footer />
    </div>
  );
}

export default App;
