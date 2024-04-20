import Home2CSS from "./Home2.module.css";
import { Link } from "react-router-dom";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

let timelineElements = [
  {
    id: 1,
    title: "Vet Assistant",
    location: "Greenville Animal Care",
    description:
      "Assisted in over 70 surgeries daily at a high volume spay and neuter clinic. Assisted veterinarians as needed, in surgery or around the clinic. Supervised animals in surgical recovery to ensure they recover correctly and safely.  Sterilized and cleaned surgical equipment.  Filled prescriptions per Vet instructions. Vaccinate and drew blood when necessary for testing. Scanned microscope slides in cytologies and samples to determine types of bacteria or parasites present. ",
    date: "2019 - 2022",
  },
  {
    id: 2,
    title: "Artist Manager",
    location: "Painting with a Twist",
    description:
      "Instruct over 100 customers monthly on how to paint chosen paintings, step by step.  Ensure the customers have an enjoyable experience with planned games and one on one instruction. Maintain a clean work environment and work equipment. Train new employees on how to do day to day tasks. ",
    date: "2018 - 2023",
  },
  {
    id: 3,
    title: "Shipping/ graphic designer",
    location: "Tergeted Enterprises",
    description:
      "Packed over 50 packages daily and designed weekly Mail Chimp ads. Assisted in research and development for new products to add to the store. Designed logos and sticker layouts using Gimp. Designed images to use in advertisements and product design. Managed customer information through the websites database.",
    date: "2015 - 2018",
  },
];

const Home = () => {
  return (
    <>
      <div className={Home2CSS.background}>
        <div className={Home2CSS.backgroundimg}></div>
        {/* <img
          className={Home2CSS.background}
          src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjcyMi1hdW0tMzFiXzFfMS5qcGc.jpg"
        /> */}
        <div className={Home2CSS.container}>
          <div className={Home2CSS.text1}>
            {" "}
            <h1>Hi, I'm Jaclyn</h1>
            <br />{" "}
            <h3 className={Home2CSS.text}>
              A fresh-faced software developer with a diverse background. Before
              diving into the world of coding, I spent years as a dedicated vet
              tech, nurturing both animals and my problem-solving skills. I
              enjoy the creative freedom coding brings and look forward to
              continue to learn and create.
              <br />
              <img
                className={Home2CSS.react}
                src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
                alt="react logo"
              />
              <img
                className={Home2CSS.vite}
                src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg"
                alt="vite logo"
              />
              <img
                className={Home2CSS.js}
                src="https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png"
                alt="javascript logo"
              />
              <img
                className={Home2CSS.python}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png"
              />
              <img
                className={Home2CSS.fastapi}
                src="https://cdn.worldvectorlogo.com/logos/fastapi.svg"
              />
           
              <Link to="/contact" >
                <button className={Home2CSS.contactButton}>Contact Me!</button>
              </Link>
            </h3>
          </div>
          <img
            className={Home2CSS.profilepic}
            src="https://i.postimg.cc/Qtg8DqR9/20230506-000504-1.jpg"
            alt="picture of Jaclyn Alday"
          />
        </div>
        <br />
        <h2 className={Home2CSS.title}>History</h2>
        <VerticalTimeline>
          {timelineElements.map((element) => {
            return (
              <VerticalTimelineElement key={element.key} date={element.date} >
                <h2 className="vertical-timeline-element-title">
                  {element.title}
                </h2>
                <h5 className="vertical-timeline-element-subtitle">
                  {element.location}
                </h5>
                <p id="description" className="p">{element.description}</p>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>

        <div className={Home2CSS.projects}>
          <h1>Projects</h1>

          <Link to="https://pet-md.netlify.app/">
            <div className="card-1">
              <img
                className="image-card-1"
                src="https://i.postimg.cc/fyJ35Rbp/petMd.png"
              />
              <div className="overlay1">
                <div className="text-card-1">
                  <p>
                    Pet MD is a place to store your pets medical information.
                    Users can create profiles for their pets, add and edit their
                    medical information.
                  </p>

                  <Link to="https://github.com/jaalday/Pet--health/tree/master">
                    <p className="button1">view github</p>
                  </Link>
                  <button className="button2">view site</button>
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
                  <p>
                    Shooter Kitty is an astroids like game created with python
                    and pygame.
                  </p>
                  <div>
                    <Link to="https://github.com/jaalday/pygame_catgame/blob/main/cat_pygame/test_newgame.py">
                      <p className="button1">view github</p>
                    </Link>
                    <button className="button2">view site</button>
                  </div>
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
                  <p>
                    Movie Look-up is a site where you can type any movie into
                    the search bar, using the OMDB api.
                  </p>
                  <div>
                    <Link to="https://github.com/jaalday/Movie-look-up">
                      <p className="button1">view github</p>
                    </Link>
                    <button className="button2">view site</button>
                  </div>
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
