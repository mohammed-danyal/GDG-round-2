import Navbar from "./components/navbar";
import UploadSection from "./components/uploadsection";
import SearchSection from "./components/searchsection";
import AnswerCard from "./components/answercard";
import OrganizerSection from "./components/organizersection";

function App() {
  return (
    <div>

      {/* Navbar */}
      <Navbar />

      {/* Main Input Section */}
      <div style={{ display: "flex", justifyContent: "space-around", padding: "40px" }}>
        <UploadSection />
        <SearchSection />
      </div>

      {/* Answer Card Section */}
      <div style={{ padding: "40px" }}>
        <AnswerCard />
      </div>

      {/* Organizer Section */}
      <div style={{ padding: "40px" }}>
        <OrganizerSection />
      </div>

    </div>
  );
}

export default App;