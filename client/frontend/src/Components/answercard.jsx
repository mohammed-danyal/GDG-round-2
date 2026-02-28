function AnswerCard() {
  return (
    <div style={styles.card}>
      <h2>Answer Card</h2>
      <p><strong>Title:</strong> Sample Research Title</p>
      <p><strong>Authors:</strong> John Doe, Jane Smith</p>
      <p><strong>Year:</strong> 2023</p>
      <p><strong>Citations:</strong> 120</p>
      <p><strong>Summary:</strong> This is a sample summary of the research paper.</p>
      <button style={styles.button}>Save to Organizer</button>
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