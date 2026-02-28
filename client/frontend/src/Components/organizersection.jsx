import PaperCard from "./PaperCard";

function OrganizerSection() {

  const papers = [
    { title: "AI Research Paper", year: 2022 },
    { title: "Machine Learning Study", year: 2021 }
  ];

  return (
    <div>
      <h2>Research Organizer</h2>
      <div style={styles.grid}>
        {papers.map((paper, index) => (
          <PaperCard key={index} title={paper.title} year={paper.year} />
        ))}
      </div>
    </div>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  }
};

export default OrganizerSection;