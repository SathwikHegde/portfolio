import './Home.scss'; 

const Home = () => {
  return (
    <div className="home-container">
      <div className="photo-section">
        <img src="/your-photo.jpg" alt="Sathwik Hegde" className="profile-photo" />
        
      </div>
      <div className="text-section">
        <h1>Hi, I'm <span className="highlight">Sathwik Hegde</span></h1>
        <h2>Data Engineer | Big Data Specialist | Cloud Enthusiast</h2>
        <p>
          I design and build scalable, high-performance data pipelines that handle 
          massive volumes of data daily. My work enables smarter business decisions 
          through reliable data engineering practices, cloud technologies, and machine learning systems.
        </p>
        <p>
          Passionate about crafting solutions in the realms of GCP, AWS, Apache Spark, SQL, Python, and more.
          Let's harness data to transform tomorrow!
        </p>
      </div>
    </div>
  );
};

export default Home;
