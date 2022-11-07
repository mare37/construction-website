import { useState, useEffect } from "react";

import styles from "./navbar_css";

function Navbar() {
  const [menuActive, setMenu] = useState(true);
  const [onScroll, setOnScroll] = useState(true);

  /* const global = createUseStyles({
    "@global": {
      body: {
        backgroundColor: "rgb(0,0,0,0.3)",
        zIndex: "5",
      },
    },
  });
  global();*/
  console.log("Page rendered");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setOnScroll(false);
      } else {
        setOnScroll(true);
      }
    });
  }, []);

  const classes = styles();

  const handleClick = () => {
    setMenu((value) => {
      return !value;
    });
  };

  return (
    <div>
      <div
        className={onScroll ? classes.headerWrapper : classes.headerWrapper2}
      >
        <div className={classes.header}>
          <nav className={classes.nav}>
            <div className={classes.logoName}>
              <img className={classes.logo} src="" alt="image" />
              <div className={classes.logo_text}>
                <h3>Waweru</h3>
                <p>Constructions</p>
              </div>
            </div>

            <ul
              className={
                !menuActive
                  ? classes.listContainer
                  : classes.listContainerActive
              }
            >
              <li>Home</li>
              <li>Company</li>
              <li> Services</li>
              <li>Projects</li>
              <li className={classes.contactButton}>Contact Us</li>
            </ul>
            {menuActive ? (
              <img
                onClick={handleClick}
                className={classes.menu}
                src="./images/menu.png"
                alt="images"
              />
            ) : (
              <img
                onClick={handleClick}
                className={classes.menu}
                src="./images/close.png"
                alt="images"
              />
            )}
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
