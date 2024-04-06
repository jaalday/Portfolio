import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="container1">
        <div className="img-box">
          <img
            className="home-img"
            alt="Picture of portrait Jaclyn Alday"
            src="https://i.postimg.cc/rs3FzSSm/jaclyn-pic.png"
            // src="https://drive.usercontent.google.com/download?id=1-JUNgVOrGTKhc08O4iG9Bn0sjz3S0WG5&export=view&authuser=0"
          />
        </div>
        <div className="home-text">
          <h1>Jaclyn Alday</h1>
          <h3>Software Developer</h3>

          <div className="paragraph">
            <p>
              {" "}
              Hello! I'm Jaclyn! a fresh-faced software developer with a
              colorful past. Before diving into the world of coding, I spent
              years as a dedicated vet tech, nurturing both animals and my
              problem-solving skills. I enjoy the creative freedom coding brings
              and look forward to continue to learn and create.
              <br />
              <br />{" "}
            </p>
            <div>
              <Link to="/contact">
                <h3 className="contact-button">Contact Me!</h3>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container-2">
        <h2 className="h2-projects">Projects</h2>
        <div className="card-1">
          <h2>Pet MD</h2>
        </div>
        <div className="card-2">
          <h2>Shooter Kitty</h2>
        </div>
        <div className="card-3">fljghfd</div>
      </div>
    </>
  );
};

export default Home;
