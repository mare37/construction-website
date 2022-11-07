import styles from "./hero_css";
import "./hero.css";

function Hero() {
  const classes = styles();
  return (
    <div className={classes.hero}>
      <div className="hero-container">
        <div className={classes.textContainer}>
          <p>SAMUEL MARTIN + PARTNERS</p>

          <h1>Quality, Excellence, Dependability</h1>
          <button>Our Services</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
