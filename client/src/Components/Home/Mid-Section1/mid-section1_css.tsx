import { createUseStyles } from "react-jss";

const orange = "#f9b904";
const blue = "#202068";

const styles = createUseStyles({
  midSection1: {
    display: "flex",
    flexDirection: "column",

    marginTop: "30px",
  },
  section1: {
    padding: "20px",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },
  textContainer: {},
  firstHeading: {
    color: "#f9b904",
    fontWeight: "900",
    marginBottom: "30px",
    fontSize: "30px",

    textAlign: "center",
  },
  secondHeading: {
    color: blue,
    fontWeight: "500",
    marginBottom: "30px",
    fontSize: "35px",

    textAlign: "center",
  },
  mainParagraph: {
    color: "#50506c",
    lineHeight: "30px",
    marginTop: "20px",
    textAlign: "center",
  },
  bulletingPoints: {
    marginTop: "30px",
    paddingLeft: "20px",

    "& img": {
      height: "15px",
      filter: "invert(100%)",
    },

    "& span": {
      backgroundColor: "#f9b904",
      borderRadius: "50%",
      marginRight: "10px",
      padding: "2px",
    },

    "& p": {
      marginBottom: "15px",
      fontWeight: "700",
      color: "#202068",
    },
  },

  moreAboutUsButton: {
    marginTop: "20px",
    width: "130px",
    height: "50px",
    borderRadius: "5px",
    color: "white",
    fontWeight: "700",
    border: "none",
    backgroundColor: "#202068",
    marginLeft: "20px",
  },

  stats: {
    display: "flex",
    flexDirection: "row",
    padding: "20px",
    marginBottom: "20px",

    "& h1": {
      color: orange,
      fontSize: "45px",
      marginBottom: "10px",
    },

    "& p": {
      color: blue,
      width: "150px",
    },

    "& div": {
      marginBottom: "15px",
      marginRight: "10px",
    },
  },

  image: {
    backgroundImage: "url(/images/construction1.jpg)",
    backgroundSize: "cover",
    objectFit: "none",
    objectPosition: "100px 30px",
    height: "250px",
  },

  wrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: "50px",
  },

  joinUs: {
    marginTop: "30px",
    width: "70%",
    height: "200px",
    backgroundColor: orange,
    padding: "20px",

    "& span": {},

    "& h2": {
      color: "white",
      marginBottom: "20px",
    },

    "& img": {},
  },
  arrow: {
    height: "20px",
    color: orange,
    filter: "invert(100%)",
  },
  helmet: {
    height: "50px",
    marginBottom: "10px",
    filter: "invert(100%)",
  },
});

export default styles;
