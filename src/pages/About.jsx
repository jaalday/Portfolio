import { Link} from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="contact-container-main">
        <img
          className="contact-container-main"
          src="https://www.maypro.com/cdn/shop/files/Florabella_Banner_2048x.jpg?v=1614782945"
        />
        <div className="about-box">
          <h1>About</h1>
          <p className="about-text">
           A newly certified full stack
            developer from Carolina Code School. I am a determined individual transitioning from the vet
            world into the dynamic world of tech. 
            Animals and art have always been at the
            forefront of my life, and I look forward to utilizing my past
            experience in my new career path. Scroll down to view some of my projects!<br />
          </p>
        </div>
      </div>
      <h2 className="info-title">Projects</h2>


      <div className="info-box-about">
        
        <div className="card-1"><Link to="https://pet-md.netlify.app/">
            <img className="card-1-img"src="https://www.catster.com/wp-content/uploads/2023/12/male-veterinarian-doctor-with-stethoscope-holding-cute-fluffy-cat_Yana-Vasileva_Shutterstock.jpg"/>
        
        Pet MD</Link>
       
     <p>A Place to store your pets medical information. Pet MD allows you to create profiles for your pets and edit their medical info.</p>
     
     </div>

        

        <div className="card-2">dlfjhaj</div>
        <div className="card-3">;sdlkfj;lkj</div>
        <div className="card-4">;iwurpowi</div>
      </div>
    </>
  );
};

export default About;
