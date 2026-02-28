function PaperCard({ title, year }) {
  return (
    <div style={styles.card}>
      <h3>{title}</h3>
      <p>Year: {year}</p>
    </div>
  );
}

const styles = {
  card: {
    padding: "15px",
    border: "1px solid #ddd",
    borderRadius: "8px",
  }
};

export default PaperCard;