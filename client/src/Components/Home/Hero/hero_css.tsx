import { createUseStyles } from "react-jss";

const styles = createUseStyles({
  hero: {
    flexDirection: "column",
    alignItems: "center",
  },
  container: {
    minHeight: "100vh",

    backgroundImage: " url(./images/construction1.jpg)",
    backgroundSize: "cover",
    backgroundColor: "black",

    zIndex: "-7",
  },

  containerAfter: {
    backgroundSize: "cover",
    backgroundImage: " url(./images/construction1.jpg)",
    content: "",
    position: "absolute",
    left: "0",
    top: "0",
    height: "100%",
    width: "100%",
    backgroundColor: "black",
    opacity: "0.7",
    zIndex: "-9",
  },

  textContainer: {
    height: "100%",
    width: "70%",
    display: "flex",
    flexDirection: "column",
    top: "30%",
    left: "10%",
    color: "white",

    position: "absolute",
    zIndex: "5",

    "& button": {
      width: "130px",
      height: "50px",
      borderRadius: "5px",
      color: "#202068",
      fontWeight: "700",
      border: "none",
    },

    "& h1": {
      marginBottom: "35px",
    },

    "& p": {
      marginBottom: "15px",
    },
  },

  "@media (min-width: 768px)": {
    textContainer: {
      "& h1": {
        fontSize: "48px",
      },

      "& p": {
        fontSize: "28px",
      },

      "& button": {
        width: "160px",
        height: "80px",
        fontSize: "18px",
      },
    },
  },
});

export default styles;
