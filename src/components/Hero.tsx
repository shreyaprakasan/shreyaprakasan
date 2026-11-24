import "./Hero.css";

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>
          Hi! I'm Shreya,
          <br />
          and I'm a full-stack developer.
        </h1>
      </div>

      <div className="avatar-placeholder">
        <img
          src={`${import.meta.env.BASE_URL}avatar.png`}
          alt="Shreya's cartoon avatar with a laptop"
          className="hero-avatar"
        />
      </div>
    </section>
  );
}

export default Hero;
