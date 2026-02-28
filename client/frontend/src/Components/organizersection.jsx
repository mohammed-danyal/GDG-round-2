import PaperCard from "./PaperCard";

function OrganizerSection({ papers }) {

  return (
    <div>
      <h2>Research Organizer</h2>

      {papers.length === 0 ? (
        <p>No papers saved yet.</p>
      ) : (
        <div style={styles.grid}>
          {papers.map((paper, index) => (
            <PaperCard
              key={index}
              title={paper.title}
              year={paper.year}
            />
          ))}
        </div>
      )}

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