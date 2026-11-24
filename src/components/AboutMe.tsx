import "./AboutMe.css";

function AboutMe() {
  return (
    <section className="about-section" aria-label="About me">
      <div className="about-illustration">
        <img
          src={`${import.meta.env.BASE_URL}about-me-avatar.png`}
          alt="Cartoon avatar of Shreya smiling with her hands under her chin"
        />
      </div>

      <div className="about-note">
        <div className="about-note-content">
          <p>
            I'm Shreya, a Senior Software Engineer based in Pune with a B.Tech
            in Computer Science Engineering and two years of experience building
            full-stack applications and data pipelines. I'm curious by nature
            and enjoy picking up new technologies - I'm currently exploring
            Java, Spring Boot and Kafka.
          </p>

          <p>
            I do my best work in teams, and I love meeting new people and
            hearing their perspectives. Outside of work, I'm usually planning my
            next trip or I'm out dancing to my Bollywood favs.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
