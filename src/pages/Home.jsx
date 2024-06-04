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
    title: "React",
    location: "Pet MD",
    description:
      "React for the frontend design and core functionality, delivering within a tight two-week deadline from conceptualization to deployment. Implementing React Router for seamless page navigation and Supabase for user data management and authentication."
    
  },
  {
    id: 2,
    title: "APIs",
    location: "Carolina Code School",
    description:
      "I integrated APIs into several of my projects, enhancing their functionality and connectivity. This involved leveraging various APIs to streamline data exchange, automate processes, and expand the capabilities of my applications. Through these integrations, I gained valuable experience in working with different API protocols, handling data formats, and troubleshooting integration issues to ensure seamless operation and optimal performance."
    
  },
  {
    id: 3,
    title: "Databases",
    location: "Carolina Code School",
    description:
      "Created own local servers and databases using Postgresql. Became familiar with SQL and how to use it to store and retrieve information. Gained experience with creating tables, inserting data, and querying data.",
    
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
            As a newly graduated software developer, I bring a unique perspective from my diverse background. Previously, I spent several years as a veterinary technician, nurturing my love for animals and science. Coding has become a new way for me to express my creativity and problem-solving skills. I am excited to bring my unique perspective to your team. 
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
        <h2 className={Home2CSS.title}>Experience</h2>
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
        <h1 className={Home2CSS.title2}>Projects</h1>

        <div className="projects">
         

          <Link to="https://pet-md.netlify.app/">
            <div className="card-1">
              <img
                className="image-card-1"
                src="https://i.postimg.cc/fyJ35Rbp/petMd.png"
              />
             
           
            </div>
          </Link>

          <div className="card-2">
            <h3>Pet MD</h3>
          <p>
            A place to store your pets medical records and information, to help ease vet visits. Built with React and supabase for user authentication and data storage. Users can set up profiles for each of their pets with their unique medical information and history.
          </p>
          <Link to="https://github.com/jaalday/Pet--health/tree/master">
          <button className="button"> github</button></Link>
          <Link to="https://pet-md.netlify.app/">
          <button className="button"> Site</button></Link>
          </div>
    
          <div>
            <div className="card-3">
              <h3>Shooter Kitty</h3>
              <p>
                A simple game created with Pygame. The player controls the kitty with the arrows and shoots at hearts using the spacebar.
              </p>
              
              <Link to="https://github.com/jaalday/pygame_catgame/blob/main/cat_pygame/test_newgame.py"><button className="button"> Github</button></Link>
              <Link to="https://itch.io/embed-upload/10107833?color=333333"><button className="button"> Site</button></Link>
          
            </div>
          
          </div>
          <div className="card-4">
           
            <Link to="https://movie-lookup-jac.netlify.app/">
            
            <img
              className="image-card-1"
              src="https://i.postimg.cc/HnccTxQm/movie-lookup.png"
            />
      
        
        </Link>
          </div>
         
          <Link to="https://itch.io/embed-upload/10107833?color=333333">
            <div className="card-5">

             
              <img
                className="image-card-1"
                src="https://i.postimg.cc/d3rJ01jc/shooter-Kitty.png"
              />

            </div>

          </Link>
          <div className="card-6">
            <h3>Movie Lookup</h3>
            <p>
              A site to search for movies using the OMDB API. Users can search for movies by title and see the results displayed.
            </p>
           <Link to="https://github.com/jaalday/Movie-look-up"> <button className="button">Github</button></Link>
            <Link to="https://movie-lookup-jac.netlify.app/"><button className="button">Site</button></Link>
          </div>
          <Link to="https://jaclyn-cat-cafe.netlify.app/"><div className="card-7"><img className="image-card-1" src="https://i.postimg.cc/BQvSw4nq/Screen-Shot-2024-06-02-at-2-29-35-PM.png"/></div></Link>
          <div className="card-8">
            <h3>Cat Cafe</h3>
            <p>Mock cat cafe website with an e-commerce store attached. Using react and Shop context.</p>
            <Link to="https://github.com/jaalday/catCafe"><button className="button">Github</button></Link>
            <Link to="https://jaclyn-cat-cafe.netlify.app/"><button className="button">Site</button></Link>
          
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
