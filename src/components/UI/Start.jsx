import React from 'react'
import '../../styles/start.css'
// import trainerImg from '../../assets/img/trainer.png'
const Start = () => {
  return <section id='classes'>
    <div className="container">
        <div className="start__wrapper">
            <div className="start__img">
                {/* <img src={trainerImg} alt="" /> */}
            </div>
            <div className="start__content">
                <h2 className="section__title">
                    Ready to make a  <span className="highlights">change?</span> </h2>
                    <p>
                    Just search for an icon on remixicon.com and look for its name.
The name translates to PascalCase followed by the suffix Icon in remixicon-react.
                    </p>
                    <button className="register__btn">
                        Get Started
                    </button>
            </div>
        </div>
    </div>
  </section>
}

export default Start