import Home2CSS from "./Home2.module.css";


const Movie = () => {
  return (
    <div className={Home2CSS.background}>

        <div className="movie-container"> 
            <div className="movie-box1"><img className="img2" src="https://i.postimg.cc/FsF4pdR9/Screen-Shot-2024-07-16-at-6-39-19-PM.png"/></div>
            <div className="movie-box2"><h2 className="title2">What is this?</h2>
            <p className="text2">Movie Look up is a site that uses the OMDB API to look up any movie. Just type in any movie title, hit search and the poster shows up.<br/><br/> </p>
            <a href = "https://github.com/jaalday/Movie-look-up" target = "_blank" rel = "noopener noreferrer"><button className="button3"> View GitHub</button></a>

            <a href = "https://movie-lookup-jac.netlify.app/" target = "_blank" rel = "noopener noreferrer"><button className="button3"> View Site</button></a>
            </div>
            <div className="movie-box3"><img src="https://i.postimg.cc/4ysK46gK/Screen-Shot-2024-07-16-at-6-39-50-PM.png"/></div>

        </div>
      
     </div>
      
    );
}

    export default Movie;
   