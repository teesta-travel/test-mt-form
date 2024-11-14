import { FC } from "react";

const Navbar: FC = () => {
  return (
    <nav style={styles.navbar as React.CSSProperties}>
      <div style={styles.logoContainer}>
        <img src="/logo.png" alt="logo" width={50} height={50} />
        <p style={styles.logoText}>Teesta</p>
      </div>

      <div className="flex items-center">
        <p className="font-[600] m-0 text-[1.1rem]">📞 +919986012795</p>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    zIndex: 1,
    backgroundColor: "white",
    padding: "1.1rem",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    position: "fixed",
    top: 0,
    width: "100%",
    color: "#619eff",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    item: "center",
  },
  logoText: {
    fontSize: "1.5rem",
    margin: 0,
    marginLeft: "0.7rem",
    fontWeight: "bold",
  },
  navList: {
    display: "flex",
    listStyleType: "none",
    margin: 0,
    padding: 0,
    alignItems: "center",
  },
  navItem: {
    marginRight: "2rem",
  },
  navLink: {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "semibold",
  },
};

export default Navbar;
