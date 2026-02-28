import { useState } from "react";
import Navbar from "./components/Navbar";
import UploadSection from "./components/UploadSection";
import SearchSection from "./components/SearchSection";
import AnswerCard from "./components/AnswerCard";
import OrganizerSection from "./components/OrganizerSection";

function App() {
  return (
    <div>

      <Navbar />

      <div id="home" style={{ display: "flex", justifyContent: "space-around", padding: "40px" }}>
        <UploadSection />
        <SearchSection />
      </div>

      <div id="answer" style={{ padding: "40px" }}>
        <AnswerCard />
      </div>

      <div id="organizer" style={{ padding: "40px" }}>
        <OrganizerSection />
      </div>

    </div>
  );
}

export default App;