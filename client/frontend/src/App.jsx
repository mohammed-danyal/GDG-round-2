// import { useState } from "react";
// import Navbar from "./components/Navbar";
// import UploadSection from "./components/UploadSection";
// import SearchSection from "./components/SearchSection";
// import AnswerCard from "./components/AnswerCard";
// import OrganizerSection from "./components/OrganizerSection";

// function App() {
  
//   <AnswerCard 
//   paper={currentPaper}
//   onSave={(paper) => setSavedPapers([...savedPapers, paper])}
// />

//   <OrganizerSection papers={savedPapers} />
//   const [currentPaper, setCurrentPaper] = useState(null);
//   const [savedPapers, setSavedPapers] = useState([]);
//   return (
//     <div>

//       <Navbar />

//       <div id="home" style={{ display: "flex", justifyContent: "space-around", padding: "40px" }}>
//         <UploadSection />
//         <SearchSection />
//       </div>

//       <div id="answer" style={{ padding: "40px" }}>
//         <AnswerCard />
//       </div>

//       <div id="organizer" style={{ padding: "40px" }}>
//         <OrganizerSection />
//       </div>

//     </div>
//   );
// }

// export default App;


import { useState } from "react";
import Navbar from "./components/Navbar";
import UploadSection from "./components/UploadSection";
import SearchSection from "./components/SearchSection";
import AnswerCard from "./components/AnswerCard";
import OrganizerSection from "./components/OrganizerSection";

function App() {

  const [currentPaper, setCurrentPaper] = useState(null);
  const [savedPapers, setSavedPapers] = useState([]);

  return (
    <div>

      <Navbar />

      <div id="home" style={{ display: "flex", justifyContent: "space-around", padding: "40px" }}>
        <UploadSection />
        <SearchSection setCurrentPaper={setCurrentPaper} />
      </div>

      <div id="answer" style={{ padding: "40px" }}>
        <AnswerCard 
          paper={currentPaper}
          onSave={(paper) => setSavedPapers([...savedPapers, paper])}
        />
      </div>

      <div id="organizer" style={{ padding: "40px" }}>
        <OrganizerSection papers={savedPapers} />
      </div>

    </div>
  );
}

export default App;