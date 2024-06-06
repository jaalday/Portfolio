
import Home2CSS from  "./Home2.module.css";
import { Link } from "react-router-dom";






const CatCafe = () => {
  return (
    <>
    <div className={Home2CSS.background}>
        <div className={Home2CSS.backgroundimg}></div>
      <div className="title-petmd"><h2>Cat Cafe</h2>
      
      </div>

   <Link to="/"><img className="logo" src="https://static.vecteezy.com/system/resources/previews/021/948/181/non_2x/3d-home-icon-free-png.png"/></Link>
      <div className="pet-container2">
        

        <div className="card-1-pet"><img className="img2" src="https://i.postimg.cc/YCnhLy1D/Screen-Shot-2024-05-27-at-3-33-03-PM.png"/></div>
        <div className="card-2-pet"><h2 className="title">What is this?</h2><p className="text">As you can probably tell, I love cats!  It has always been a dream of mine to open a cat cafe, so naturally I built this little passion project. <br/><br/>It has a store attached where you can add items to your cart for purchase. Idealy this business would partner with local rescues and fosters to help get cats exposure and possible homes.</p>
        <div>
      <Link to="https://github.com/jaalday/catCafe"><button type="button" className="button">Github</button></Link>
      <Link to="https://jaclyn-cat-cafe.netlify.app/">  <button type="button" className="button">Site</button></Link>
        </div>

        </div>
        <div className="card-3-pet"><img className="img2" src="https://i.postimg.cc/02yBcCWm/Screen-Shot-2024-06-05-at-4-33-19-PM.png"/></div>
        <div className="card-4-cat"><img className="img2" src="https://i.postimg.cc/rmYVn9Xp/Screen-Shot-2024-06-05-at-4-31-00-PM.png"/></div>
        <div className="card-5-cat"><img className="img2"src="https://i.postimg.cc/Pxbb1NBK/Screen-Shot-2024-05-09-at-12-59-35-PM.png"/></div>
        
      </div>
    </div>
    </>
  );
}


export default CatCafe;