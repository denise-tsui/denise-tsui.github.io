// import React from 'react'
import "./home.css";
import Icon from "../../../assets/img/pfp.png";
import HomeSocials from "./HomeSocials";

export function Home() {
  return (
    <>
     <section className="home container" id="home">
      <div className="intro">
        <div className="round_border1" />
        <div className="round_border2" />
        <p className="diamond1"> + </p>
        <p className="diamond2"> + </p>
        <p className="diamond3"> + </p>
        <img src={Icon} alt="profile-img" className="home__img" />
        <h1 className="home__name"> 
          about me! 
        </h1>
        <span className="home__details"> 
          a new grad with an interest in product. <br /><br />
          BASc in Mechatronics Engineering with Computing Option
        </span> 
      
        <HomeSocials />
      </div>

     </section>
    

    </>
  )
}

// export default Home;