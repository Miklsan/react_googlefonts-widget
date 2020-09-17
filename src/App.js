import React from 'react';
import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import FontSizeSlider from "./components/FontSizeSlider"
import TextArea from "./components/TextArea"
import FontsCategories from './components/FontsCategories';



function App() {

  return (
    <>
      <Header />
      <div className="container min-vh-100">
        <div className="row my-5">
          <div className="col-lg-3">
            <div className="aside">

              <TextArea />
              <FontSizeSlider />
            </div>
          </div>
          <div className="col-lg-9">
            <FontsCategories
              sort="date"
              title="Les plus récentes"
            />
            <FontsCategories
              sort="trending"
              title="Trending Fonts"
            />
            <FontsCategories
              sort="popularity"
              title="Les plus populaires"
            />

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
