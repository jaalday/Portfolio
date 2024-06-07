import Home2CSS from "./Home2.module.css";
import { Link } from "react-router-dom";






const PetMD = () => {
  return (
    <>
    <div className={Home2CSS.background}>
        <div className={Home2CSS.backgroundimg}></div>
   
      <h1 className="title-petmd">PetMD</h1>

   <Link to="/"><img className="logo" src="https://static.vecteezy.com/system/resources/previews/021/948/181/non_2x/3d-home-icon-free-png.png"/></Link>

      <div className="pet-container">
        
        
        <div className="card-1-pet">
            <img className="img" src="https://i.postimg.cc/QdrLcFWK/Screen-Shot-2024-06-05-at-1-46-01-PM.png"/>

        </div>
        <div className="card-2-pet">
            <h2 className="title">What is this?</h2>
            <p className="text">Pet MD is a comprehensive website designed specifically for pet owners, allowing them to easily fill out forms and access crucial medical information with just a few taps.

As a Veterinary Technician, I've often encountered pet owners who are unsure about the medications their pets are taking. This app provides a convenient solution, ensuring that vital information is always readily available. </p>
           <Link to="https://github.com/jaalday/Pet--health/tree/master"><button className="button1">View Github</button></Link> 
        </div>
        <div className="card-3-pet">
            <img className="img" src="https://i.postimg.cc/0yRTLMQ8/Screen-Shot-2024-06-05-at-2-20-32-PM.png"/>
        </div>
        <div className="card-4-pet">
            <img className="img3" src="https://i.postimg.cc/Gm4WfWv1/Screen-Shot-2024-06-05-at-2-22-32-PM.png"/>
            
        </div>
        <div className="card-5-pet">
            <p className="text">Owners can add as many pets as they want to their profile. Each pet has a separate card with their information on it, and an associated history card. <br/> Made with React, Supabase, FastAPI, and Python. </p>
        </div>
        <div className="card-6-pet"><img className="img" src="https://i.postimg.cc/nrxNnQxt/Screen-Shot-2024-06-05-at-2-19-58-PM.png"/></div>
        <div className="card-7-pet"><img className="img3" src="https://i.postimg.cc/T201DV4F/Screen-Shot-2024-06-05-at-2-16-46-PM.png"/></div>
        
        </div>

    </div>

   
    </>
  );
}


export default PetMD;