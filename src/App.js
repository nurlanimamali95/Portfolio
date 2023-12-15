import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Preloader from "./components/PreLoader";

const App = () => {
  const [loadingComplete, setLoadingComplete] = useState(false);

  const handleLoadingFinish = () => {
    setLoadingComplete(true);
  };

  return (
    <div className="font-rubik text-buttery">
      <Preloader onFinishLoading={handleLoadingFinish} />
      {loadingComplete && (
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      )}
    </div>
  );
};

export default App;
