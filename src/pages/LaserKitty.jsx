import Home2CSS from  "./Home2.module.css";



const LaserKitty = () => {

    return (
        <div className={Home2CSS.background}>
            <div className="movie-container"> 
                <div className="movie-box1"><img className="img3" src="https://i.postimg.cc/c4z7szrP/Screen-Shot-2024-07-16-at-7-30-52-PM.png"/></div>
                <div className="movie-box2"><h2 className="title2">What is this?</h2><p className="text2">Laser Kitty is a shooter game I made using the Pygame extension of python. To play you just need to use the arrows to go back and forth, and the space-bar to shoot lasers at the hearts. </p><p className="text2">Python was the first programming language I learned and I just fell in love with how diverse the language can be. </p>
                <a href = "https://github.com/jaalday/python-games/blob/main/test_newgame.py" target = "_blank" rel = "noopener noreferrer"><button className="button"> View GitHub</button></a>

<a href = "https://itch.io/embed-upload/10107833?color=333333" target = "_blank" rel = "noopener noreferrer"><button className="button"> Play Game</button></a>
                
                </div>
                <div className="movie-box3"><img className="img3" src="https://i.postimg.cc/15WS4GQk/Screen-Shot-2024-07-16-at-7-32-05-PM.png"/></div>
               </div>
        </div>
    )
}
export default LaserKitty