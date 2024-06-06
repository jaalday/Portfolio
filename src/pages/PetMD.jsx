import Home2CSS from "./Home2.module.css";
import { Link } from "react-router-dom";






const PetMD = () => {
  return (
    <>
    <div className={Home2CSS.background}>
        <div className={Home2CSS.backgroundimg}></div>
   
      <h1 className="title-petmd">PetMD</h1>

      <div className="pet-container">
        
        
        <div className="card-1-pet">
            <img className="img" src="https://i.postimg.cc/QdrLcFWK/Screen-Shot-2024-06-05-at-1-46-01-PM.png"/>

        </div>
        <div className="card-2-pet">
            <h2 className="title">What is this for?</h2>
            <p className="text">Pet MD is a website for pet owners, where they can fill out forms and have certain medical information at the touch of a finger. <br/><br/>In my experience as a Veterinary Technician many people would not know certain medications their animals were on. This App makes it easy to keep vital information close at hand. </p>
           <Link to="https://github.com/jaalday/Pet--health/tree/master"><button className="button">Github</button></Link> 
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