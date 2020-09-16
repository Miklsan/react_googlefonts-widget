import React from 'react';
import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import FontSizeSlider from "./components/FontSizeSlider"
import TextArea from "./components/TextArea"
import FontsCards from "./components/FontsCards"

function App() {
  return (
    <>
      <Header />
      <TextArea />
      <FontSizeSlider />
      <FontsCards />
      <Footer />
    </>
  );
}

export default App;
