import React, { useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store from "./store/store";
import "./App.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import MainContent from "./components/MainContent";
import RelatedSearches from "./components/RelatedSearches";
import Footer from "./components/Footer";
import JobDetailsPage from "./components/JobDetailsPage";
import { SearchProvider } from "./context/SearchContext"; // Import Context

function App() {
  return (
    <Provider store={store}>
      <Router>
        <SearchProvider>
          <div className="App">
            <Header />
            <Routes>
              <Route path="/" element={<MainContent />} />
              <Route
                path="/job/:jobCompany/:jobTitle"
                element={<JobDetailsPage />}
              />
            </Routes>
            <RelatedSearches />
            <Footer />
          </div>
        </SearchProvider>
      </Router>
    </Provider>
  );
}

export default App;
