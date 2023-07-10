import React from 'react'
import {BsPlayFill} from 'react-icons/bs'
import heroImg from '../../assets/img/finedge.jpeg'
import {RiHeartPulseFill} from 'react-icons/ri'
import {FiMapPin} from 'react-icons/fi'
// import dumbleIcon from '../../assets/img/dumble.png'
import '../../styles/hero.css'
const Hero = () => {
  return <section id='home'>
    <div className="container">
        <div className="hero__wrapper">
            {/* hero__content */}
            <div className="hero__content">
                <h2 data-aos='fade-up'>Empower your financial future with our cutting-edge<br /> <span className="highlights">FinEdge </span>Solutions</h2>
                <p>Experience seamless transactions and financial management like never before.<br />
                Discover innovative tools and personalized services to revolutionize your financial journey.
                </p>
            </div>
            {/* hero img */}
            <div className="hero__img">
                <div className="hero__img-wrapper">
                    <div className="box-01">
                        <div className="box-02">
                            <div className="box-03">
                                <div className="box__img">
                                    <img src={heroImg} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="gym__location">
                        <span><FiMapPin/></span>
                        <h5>Find a financial<br /> Solutions</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>
}

export default Hero