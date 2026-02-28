function SearchSection({ setCurrentPaper }) {

  const handleSearch = () => {
    // Fake data for now
    const fakePaper = {
      title: "Machine Learning Advances",
      authors: "Andrew Ng, Yann LeCun",
      year: 2023,
      citations: 540,
      summary: "This paper explores modern deep learning techniques."
    };

    setCurrentPaper(fakePaper);
  };

  return (
    <div style={styles.box}>
      <h2>Search Research Paper</h2>

      <input
        type="text"
        placeholder="Enter paper name..."
        style={styles.input}
      />

      <button style={styles.button} onClick={handleSearch}>
        Search
      </button>
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