import { Link } from "react-router-dom";




const Home = () => {
  return (
    <>
      <div className="container1">
        <div className="container-1-img">
          {/* <img src="https://i.pinimg.com/originals/a5/fa/b7/a5fab706a5f27715f1e3ee477412b60b.jpg"/> */}
          <div className="img-box">
            <img
              className="home-img"
              alt="Picture of portrait Jaclyn Alday"
              // src="https://i.postimg.cc/rs3FzSSm/jaclyn-pic.png"
              src="https://i.postimg.cc/L5jcSL6L/20230506-000504.jpg"
            />
          </div>
          <div className="home-text">
            <h1>Jaclyn Alday</h1>
            <h3>Software Developer</h3>
            <br />

            <div className="paragraph">
              <p>
                {" "}
                Hello! I'm Jaclyn! a fresh-faced software developer with a
                colorful past. Before diving into the world of coding, I spent
                years as a dedicated vet tech, nurturing both animals and my
                problem-solving skills. I enjoy the creative freedom coding
                brings and look forward to continue to learn and create.
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

        <br />
        <div className="container-2">
          <h2 className="h2-projects">Projects</h2>
          <Link to="https://pet-md.netlify.app/">
            <div className="card-1">
              <img
                className="image-card-1"
                src="https://i.postimg.cc/fyJ35Rbp/petMd.png"
              />
              <div className="overlay1">
                <div className="text-card-1">
                  Pet MD is a place to store your pets medical information.
                  Users can create profiles for their pets, add and edit their
                  medical information.
                </div>
              </div>
            </div>
          </Link>

          <Link to="https://jaalday.itch.io/shooter-kitty">
            <div className="card-2">
              <img
                className="image-card-2"
                src="https://i.postimg.cc/d3rJ01jc/shooter-Kitty.png"
              />
              <div className="overlay">
                <div className="text-card-2">
                  {" "}
                  Shooter Kitty is an astroids like game created with python and
                  pygame.
                </div>
              </div>
            </div>{" "}
          </Link>

     
          <Link to="https://movie-lookup-jac.netlify.app/">
            <div className="card-3">
              <img
                className="image-card-1"
                src="https://i.postimg.cc/HnccTxQm/movie-lookup.png"
              />
              <div className="overlay3">
                <div className="text-card-1">
               Movie Look-up is a site where you can type any movie into the search bar and it shows you every result under that name. Using the OMDB api. 
                </div>
              </div>
            </div>
          </Link>
  


        </div>
      </div>
    </>
  );
};

export default Home;
