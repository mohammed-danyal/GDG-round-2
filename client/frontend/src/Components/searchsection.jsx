function SearchSection() {
  return (
    <div style={styles.box}>
      <h2>Search Research Paper</h2>
      <input type="text" placeholder="Enter paper name..." style={styles.input} />
      <button style={styles.button}>Search</button>
    </div>
  );
}

const styles = {
  box: {
    width: "45%",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
  },
  input: {
    width: "100%",
    padding: "8px",
  },
  button: {
    marginTop: "10px",
    padding: "8px 16px",
  }
};

export default SearchSection;