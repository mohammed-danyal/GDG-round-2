function AnswerCard({ paper, onSave }) {

  if (!paper) {
    return (
      <div style={styles.card}>
        <h2>Answer Card</h2>
        <p>No paper selected yet.</p>
      </div>
    );
  }

  return (
    <div style={styles.card}>
      <h2>Answer Card</h2>

      <p><strong>Title:</strong> {paper.title}</p>
      <p><strong>Authors:</strong> {paper.authors}</p>
      <p><strong>Year:</strong> {paper.year}</p>
      <p><strong>Citations:</strong> {paper.citations}</p>
      <p><strong>Summary:</strong> {paper.summary}</p>

      <button
        style={styles.button}
        onClick={() => onSave(paper)}
      >
        Save to Organizer
      </button>
    </div>
  );
}

const styles = {
  card: {
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
  },
  button: {
    marginTop: "10px",
    padding: "8px 16px",
  }
};

export default AnswerCard;