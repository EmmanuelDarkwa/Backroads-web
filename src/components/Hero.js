import logo from '../images/logo.svg'

const Hero = () =>{
    return(
        <section className="hero" id="home">
        <div className="hero-banner">
          <h1>Backroads App</h1>
          <p>
            A new world away from home....
          </p>
          <a href="#tours" className="btn hero-btn">explore tours</a>
        </div>
      </section>
  
    )
}
export default Hero;