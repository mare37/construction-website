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
    fontWeight: "1000",
    marginBottom: "30px",
    fontSize: "32px",

    textAlign: "left",
  },
  secondHeading: {
    color: blue,
    fontWeight: "1000",
    marginBottom: "30px",
    fontSize: "38px",

    textAlign: "left",
  },
  mainParagraph: {
    color: "gray",
    lineHeight: "30px",
    marginTop: "20px",
    textAlign: "left",
    fontSize: "23px",
  },
  bulletingPoints: {
    marginTop: "30px",
    marginLeft: "-80px",

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
      color: "gray",
    },
  },

  buttonContainer: {},

  moreAboutUsButton: {
    marginTop: "20px",
    width: "130px",
    height: "50px",
    borderRadius: "5px",
    color: "white",
    fontWeight: "700",
    border: "none",
    backgroundColor: "#202068",
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
      textAlign: "left",
    },

    "& div": {
      marginBottom: "15px",
      marginRight: "10px",
      display: "flex",
      flexDirection: "column",
    },
  },

  image: {
    backgroundImage: "url(/images/construction1.jpg)",
    backgroundSize: "cover",
    objectFit: "none",
    objectPosition: "100px 30px",
    height: "250px",
    width: "100%",
  },

  wrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: "50px",
  },

  joinUs: {
    marginTop: "30px",
    width: "200px",
    borderRadius: "6px",

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

  section2: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },

  "@media (min-width: 768px)": {
    bulletingPoints: {
      width: "80%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    image: {
      height: "500px",
    },
  },

  "@media (min-width: 1200px)": {
    midSection1: {
      flexDirection: "row",
      marginTop: "100px",
      paddingLeft: "100px",
      paddingRight: "100px",
    },
    section1: {
      width: "50%",
    },
    section2: {
      width: "50%",
    },

    firstHeading: {
      textAlign: "left",
      fontSize: "25px",
      width: "100%",
      fontWeight: "500",
      marginBottom: "15px",
    },
    secondHeading: {
      textAlign: "left",
      fontSize: "30px",
    },
    mainParagraph: {
      textAlign: "left",
    },
    bulletingPoints: {
      width: "100%",
      paddingLeft: "0",
      marginLeft: "0px",
      justifyContent: "flex-start",
      "& img": {},

      "& span": {},

      "& p": {
        fontWeight: "500",
      },
      "& div": {
        marginRight: "20px",
      },
    },

    image: {
      width: "80%",
      height: "270px",
    },
    buttonContainer: {
      width: "100%",
    },
    stats: {
      width: "100%",
      justifyContent: "flex-end",
      marginRight: "70px",
      "& p": {
        textAlign: "left",
      },
      "& div": {
        alignItems: "flex-start",
      },
    },
    joinUs: {
      width: "20%",
      marginTop: "-90px",
      marginRight: "250px",

      "& h2": {
        fontSize: "14px",
      },
    },
    helmet: {
      height: "30px",
    },
    arrow: {
      height: "10px",
    },
  },
});

export default styles;
