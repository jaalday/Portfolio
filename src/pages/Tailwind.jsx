import Home2CSS from "./Home2.module.css";
import { Link } from "react-router-dom";

const Home2 = () => {
  return (
    <>
      <div className={Home2CSS.background}>
        <img
          className={Home2CSS.backgroundimg}
          src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjcyMi1hdW0tMzFiXzFfMS5qcGc.jpg"
        />
        <div className={Home2CSS.container}>
          <div className={Home2CSS.text1}>
            {" "}
            <h1>Hi, I'm Jaclyn</h1>
            <br />{" "}
            <h3 className={Home2CSS.text}>
              A fresh-faced software developer with a
              colorful past. Before diving into the world of coding, I spent
              years as a dedicated vet tech, nurturing both animals and my
              problem-solving skills. I enjoy the creative freedom coding brings
              and look forward to continue to learn and create.
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
              <img className={Home2CSS.fastapi}src="https://cdn.worldvectorlogo.com/logos/fastapi.svg" />
            </h3>
          </div>
          <img
            className={Home2CSS.profilepic}
            src="https://i.postimg.cc/qqTKP7Cx/jaclyn-pic.png"
            alt="picture of Jaclyn Alday"
          />
        </div>
        <br />
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

        
        </div>
      </div>
    </>
  );
};

export default Home2;
