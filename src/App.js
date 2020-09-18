import React, { useState } from 'react';
import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import FontSizeSlider from "./components/FontSizeSlider"
import TextArea from "./components/TextArea"
import FontsCategories from './components/FontsCategories';



function App() {
  const [size, setSize] = useState(20)
  const [text, setText] = useState("Portez ce vieux whisky au juge blond qui fume !? 0123456789")

  return (
    <>
      <Header />
      <div className="container min-vh-100">
        <div className="row my-5">
          <div className="col-lg-3">
            <div style={{ position: "sticky", top: 0 }}>

              <TextArea text={text} setText={setText} />
              <FontSizeSlider size={size} setSize={setSize} />
            </div>
          </div>
          <div className="col-lg-9">
            <FontsCategories
              sort="date"
              title="Les plus récentes"
              text={text}
              size={size}
            />
            <FontsCategories
              sort="trending"
              title="Trending Fonts"
              text={text}
              size={size}
            />
            <FontsCategories
              sort="popularity"
              title="Les plus populaires"
              text={text}
              size={size}
            />

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
