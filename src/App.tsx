import React, { useState, useEffect } from "react";
import "./App.css";
import AdvisorList from "./components/Home/AdvisorList";
import Header from "./components/common/Header";
import SortInput from "./components/common/SortInput";
import { AdvisorContext } from "./context/AdvisorContext";

function App() {
  const [sortBy, setSortBy] = useState("");
  useEffect(() => {
    console.log(sortBy);
  });
  return (
    <AdvisorContext.Provider value={{ sortBy, setSortBy }}>
      <Header>
        <SortInput />
      </Header>
      <AdvisorList />
    </AdvisorContext.Provider>
  );
}

export default App;
