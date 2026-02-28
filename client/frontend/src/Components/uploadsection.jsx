function UploadSection() {
  return (
    <div style={styles.box}>
      <h2>Upload Research PDF</h2>
      <input type="file" />
      <button style={styles.button}>Upload</button>
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
  button: {
    marginTop: "10px",
    padding: "8px 16px",
  }
};

export default UploadSection;