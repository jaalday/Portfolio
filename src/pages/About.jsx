import { Link} from "react-router-dom";
import Home2CSS from  "./Home2.module.css";

const About = () => {
  return (
    <div className={Home2CSS.background}>
      <h1 className="title2"> About Me!</h1>
      <div className="about-container">
        <div className="about-box1">
          <h4 className="about-text2">
          Hello! My name is Jaclyn. I am a full stack developer with a passion for creating. If my projects haven't given it away, I absolutely love cats and enjoy sneaking them into my code. I have three cats of my own, and when i'm not coding, you can usually find me relaxing with them or painting. <br/><br/> I thoroughly enjoy comradery and making people laugh. life is too short to be serious all the time! I also love being outdoors, especially camping and hiking in the mountains.<br/><br/> I'm passionate about learning and always look for ways to improve my skills, as well as helping others with theirs. <br/><br/> </h4>

        </div>
        <div className="about-box2"><img src="https://i.postimg.cc/kGgKRYfr/Screenshot-20240716-140716-Gallery-1.jpg"/> <img src="https://i.postimg.cc/k47Zp8nJ/Screenshot-20240716-135512-Gallery.jpg"/> </div>


        <div className="about-box3">
        <img src="https://i.postimg.cc/Hn8vRt7y/Screenshot-20240716-135237-Gallery-1.jpg"/>
      </div>

      </div>
      



    </div>
     
      
  );
};

export default About;
