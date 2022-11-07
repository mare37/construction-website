import styles from "./mid-section2_css";

function Midsection2() {
  const classes = styles();
  return (
    <div className={classes.midSection2}>
      <div className={classes.headingContainer}>
        <p>How We Work</p>
        <h3>Pushing The Boundaries Of What's Possible</h3>
      </div>

      <div className={classes.steps}>
        <p>Evaluation And Signing Of Contract</p>
        <div>
          <span>1</span>Step 1
        </div>
      </div>

      <div className={classes.steps}>
        <p>Preparation Of The Work Plan</p>
        <div>
          <span>1</span>Step 2
        </div>
      </div>

      <div className={classes.steps}>
        <p>Implementation Of Quality Works</p>
        <div>
          <span>1</span>Step 3
        </div>
      </div>
    </div>
  );
}

export default Midsection2;
