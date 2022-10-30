import { createUseStyles } from "react-jss";

const styles = createUseStyles({
  headerWrapper: {
    width: "100vw",
    height: "auto",
    position: "fixed",
    top: "0",
    left: "0",
    zIndex: "1",
  },
  header: {
    height: "90px",
    backgroundColor: "transparent",
  },
  nav: {
    backgroundColor: "#202068",
    height: "100%",
    position: "relative",
    zIndex: "4",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  listContainer: {
    width: "100vw",
    height: "500px",
    backgroundColor: "#202068",
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    zIndex: "5",
    justifyContent: "space-around",
    top: "70px",
    right: "0",
    borderTop: "solid",
    borderTopColor: "#f9b904",

    transition: "1000ms ease",

    "& li": {
      color: "white",
      fontWeight: "700",
      fontSize: "16px",
      marginLeft: "30px",
    },
  },

  listContainerActive: {
    position: "absolute",
    right: "100%",
    zIndex: "3",
    paddingRight: "50px",
  },
  menu: {
    height: "30px",
    filter: "invert(100%)",
    marginRight: "20px",
  },
  close: {
    height: "30px",
    filter: "invert(100%)",
    marginRight: "20px",
    zIndex: "10",
  },

  menuAndLogoContainer: {
    display: "flex",
    flexDirection: "row",
    width: "50%",
  },
  logoName: {
    display: "flex",
    flexDirection: "row",
    height: "100%",
    alignItems: "center",
    marginLeft: "20px",

    "$ p": {
      color: "white",
    },
  },

  logo: {
    height: "50px",
    marginRight: "10px",
  },
  logo_text: {
    marginTop: "5px",

    "& h3": {
      color: "white",
      fontWeight: "700",
      fontSize: "19px",
    },
    "& p": {
      color: "white",
      fontSize: "12px",
    },
  },

  contactButton: {
    padding: "10px",
    backgroundColor: "orange",
    width: "130px",
  },

  "@media (min-width: 1200px)": {
    menu: {
      display: "none",
    },

    listContainer: {
      flexDirection: "row",
      justifyContent: "flex-end",
    },
    listContainerActive: {
      right: "0",

      display: "flex",
      flexDirection: "row",

      justifyContent: "flex-end",

      "& li": {
        marginRight: "20px",
        fontSize: "19px",
        color: "white",
        height: "70px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        cursor: "pointer",
        fontWeight: "400",
      },

      "& li:hover": {
        color: "yellow",

        borderBottomWidth: "3px",
        borderBottomColor: "yellow",
      },
    },
    contactButton: {
      padding: "0",
      backgroundColor: "transparent",
      width: "100px",
    },

    logoName: {
      marginLeft: "50px",
    },
  },
});

export default styles;
