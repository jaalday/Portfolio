const Contact = () => {

    const access_key =`${import.meta.env.YOUR_ACCESS_KEY}`;


    

    return (
        <>
        <div className="background">
            <br/>
        <div className="contact-container">
            <h1>Contact</h1>
            <form action="https://api.web3forms.com/submit" method="POST">
            {/* const url = `${import.meta.env.VITE_SOURCE_URL}/profile`; */}
      <div>
     
                <input type="hidden" name="access_key" value={access_key}/>

                <input className="input2" type="text" name="name" placeholder="Your Name"/>
                <br/>
                <br/>
                <input className="input2"type="email" placeholder="Your Email"/></div>
                <br/>
                <textarea className="message" name="message" placeholder="Your Message"></textarea>
             
        
<br/>


                <button className="send" type="submit">Send</button>
            </form>
           
          
          
        </div>
        </div>
       
        </>
    )
}

export default Contact