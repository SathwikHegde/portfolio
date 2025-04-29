import './About.scss';

const About = () => {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <p className="about-text">
        I am an experienced Data Engineer with a proven track record of designing and implementing 
        scalable data pipelines that process terabytes of data daily. Throughout my career, 
        I have specialized in building robust ETL frameworks, optimizing database performance, 
        and enabling predictive analytics for smarter business decisions.
      </p>

      <p className="about-text">
        My expertise lies in cloud platforms like GCP and AWS, as well as data technologies including
        Apache Spark, Hadoop, SQL, NoSQL, and Python. I am deeply passionate about translating 
        complex data into actionable insights that drive innovation and operational excellence.
      </p>

      <p className="about-text">
        I believe that data engineering is not just about moving data — it's about building the 
        foundation for transformative business intelligence and machine learning. I strive to stay ahead 
        by continuously learning emerging technologies and architecting modern data platforms.
      </p>

      <p className="quote">
        "Believe you can, and you're halfway there." – Theodore Roosevelt
      </p>
    </div>
  );
};

export default About;
