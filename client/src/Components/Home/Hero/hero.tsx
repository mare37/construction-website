import styles from "./hero_css";
import "./hero.css";

function Hero() {
  const classes = styles();
  return (
    <div className={classes.hero}>
      <div className="hero-container">
        <div className={classes.textContainer}>
          <p>Better, Bigger,Faster And Stronger Projects</p>

          <h1>Leading The Way In Building And Construction In Kenya</h1>
          <button>Our Services</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
