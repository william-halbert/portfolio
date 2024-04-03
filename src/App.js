import React from "react";
import Landing from "./pages/landing";

import "./css/App.css";
import { Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>William Halbert</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta
          name="description"
          content="William Halbert portfolio React Node.js developer and entrepreneur and founder"
        />
      </Helmet>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
