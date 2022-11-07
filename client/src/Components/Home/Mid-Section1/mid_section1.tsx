import styles from "./mid-section1_css";

function MidSection1() {
  const classes = styles();
  return (
    <div className={classes.midSection1}>
      <section className={classes.section1}>
        <p className={classes.firstHeading}>
          {`Leading the way in building 
          and civil construction`}
        </p>
        <p className={classes.secondHeading}>
          Committed To Delivering High Quality Construction Projects And
          Innovative Design
        </p>
        <p className={classes.mainParagraph}>
          The soil survey and mapping for Ewaso Ngiro irrigation sub-project,
          covering about 10,000 ha, was carried out at site evaluation level,
          which was appropriate for the preliminary design of irrigation layout
          and initial soil suitability assessment.
        </p>
        <div className={classes.bulletingPoints}>
          <div>
            <p>
              <span>
                <img src="./images/check-mark.png" alt="icon" />
              </span>
              Quality Control System
            </p>
            <p>
              <span>
                <img src="./images/check-mark.png" alt="icon" />
              </span>{" "}
              100% Satisfaction Guarantee
            </p>
            <p>
              <span>
                <img src="./images/check-mark.png" alt="icon" />
              </span>{" "}
              Highly Professional Staff
            </p>
          </div>

          <div>
            <p>
              <span>
                <img src="./images/check-mark.png" alt="icon" />
              </span>{" "}
              Unrivaled workmanship
            </p>
            <p>
              <span>
                <img src="./images/check-mark.png" alt="icon" />
              </span>{" "}
              Accurate Testing Process
            </p>
            <p>
              <span>
                <img src="./images/check-mark.png" alt="icon" />
              </span>{" "}
              Professional and Qualified
            </p>
          </div>
        </div>
        <div className={classes.buttonContainer}>
          <button className={classes.moreAboutUsButton}>More About Us</button>
        </div>
      </section>
      <section className={classes.section2}>
        <div className={classes.stats}>
          <div>
            <h1>18</h1>
            <p>Projects Completed</p>
          </div>
          <div>
            <h1>100</h1>
            <p>Qualified Staff</p>
          </div>
        </div>

        <div className={classes.image}></div>
        <div className={classes.wrapper}>
          <div className={classes.joinUs}>
            <img
              className={classes.helmet}
              src="/images/helmet.png"
              alt="helmet"
            />
            <h2>Our Team</h2>

            <span>
              <img
                className={classes.arrow}
                src="/images/right-arrow.png"
                alt="arrow"
              />
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MidSection1;
