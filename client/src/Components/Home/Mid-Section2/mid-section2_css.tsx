import { createUseStyles } from "react-jss";

const orange = "#f9b904";
const blue = "#202068";

const styles = createUseStyles({
  midSection2: {
    display: "flex",
    flexDirection: "column",
    alignItems: "centre",
    borderRadius: "8px",

    marginTop: "30px",
    backgroundColor: blue,
    height: "700px",
    padding: "20px",
    margin: "20px",
  },
  image: {
    backgroundImage: "url(/images/crane.jpg)",
    backgroundSize: "cover",
    height: "300px",
  },
  container: {
    backgroundColor: orange,
    height: "200px",
    marginTop: "-59px",
  },
  headingContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "100px",

    "& p": {
      color: orange,
      marginBottom: "30px",
      fontWeight: "700",
    },

    "& h3": {
      textAlign: "center",
      color: "white",
    },
  },
  steps: {
    height: "200px",
    position: "relative",
    borderLeft: "solid",
    borderLeftColor: "white",
    borderLeftWidth: "1px",

    "& p": {
      marginTop: "60px",
      color: "white",
      padding: " 0 30px",
      fontSize: "19px",
    },
    "& div": {
      position: "absolute",
      top: "0",
      left: "0",
      color: orange,
      marginLeft: "-5px",
    },
    "& span": {
      backgroundColor: orange,
      borderRadius: "50%",
      height: "17px",
      width: "17px",
      marginRight: "9px",
    },
  },
});

export default styles;
