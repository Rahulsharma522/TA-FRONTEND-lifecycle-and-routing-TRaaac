import { Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import Battel from './battle';
import Header from './header';
import Tag from './tag';
import ResultCard from './resultcard';

// import Popular from './Popular';

function App() {
  var [perData1, setperData1] = useState(null);
  var [perData2, setperData2] = useState(null);
  var [darkMode, setdarkMode] = useState(false);

  function personDataAll(per1, per2) {
    setperData1(per1);
    setperData2(per2);
  }

  function darkModeSet() {
    setdarkMode(true);
  }
  function whiteMode() {
    setdarkMode(false);
  }

  return (
    <>
      <div className={darkMode === true ? 'darkcolor ' : 'white'}>
        <Header
          darkMode={darkMode}
          darkModeSet={darkModeSet}
          whiteMode={whiteMode}
        />
        <div>
          <Routes>
            <Route path="/" exact element={<Tag darkMode={darkMode} />} />
            <Route
              path="/github"
              exact
              element={
                <Battel personDataAll={personDataAll} darkMode={darkMode} />
              }
            />
            <Route
              path="/resultcard"
              exact
              element={
                <ResultCard
                  perData1={perData1}
                  perData2={perData2}
                  darkMode={darkMode}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;