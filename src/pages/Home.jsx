import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="container1">
        <div className="img-box">
          <img
            className="home-img"
            src="https://r2.erweima.ai/stablediffusion/c52659567de94a42aaf394fe86fe275a_ComfyUI_67253_.png"
            alt="Picture of portrait Jaclyn Alday"
          />
        </div>
        <div className="home-text">
          <h1>Jaclyn Alday</h1>

          <div className="paragraph">
            <h3>Software Engineer</h3>

            <p>
              {" "}
              Hello! I'm Jaclyn!, a fresh-faced software developer with a
              colorful past. Before diving into the world of coding, I spent
              years as a dedicated vet tech, nurturing both animals and my
              problem-solving skills. In my downtime, I indulge my creative side
              as an artist, finding joy in bringing imagination to life through
              various mediums.
              <br />
              <br />
              Now, armed with a newfound passion for programming, I'm excited to
              merge my love for problem-solving and creativity in the tech
              world. With a background in caring for others and a knack for
              visual expression, I'm eager to bring a fresh perspective to
              software development. Let's create something amazing together!{" "}
            </p>
            <div className="contact-button">
              <Link to="/contact">
                <h3>Contact Me!</h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
