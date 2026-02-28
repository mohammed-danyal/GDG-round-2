function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>ResearchVault</div>
      <div style={styles.links}>
        <a href="#home" style={styles.link}>Home</a>
        <a href="#answer" style={styles.link}>Answer Card</a>
        <a href="#organizer" style={styles.link}>Organizer</a>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 40px",
    backgroundColor: "#0f172a",
    color: "white",
    position: "sticky",
    top: 0,
  },
  logo: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  links: {
    display: "flex",
    gap: "20px",
  },
  link: {
    color: "white",
    textDecoration: "none",
  }
};

export default Navbar;