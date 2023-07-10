import React from 'react'
import '../../styles/pricing.css'
import {RiCheckboxBlankCircleFill} from 'react-icons/ri'
const Pricing = () => {
  return (
   <section id='services'>
    <div className="container">
        <div className="pricing__top">
            <h2 className="section__title">
                Our Financial <span className="highlights">Services</span>Plan
            </h2>
            <p>Explore our range of financial services designed to meet your needs</p>
        </div>
        {/*  Pricing Wrapper */}

     <div className="pricing__wrapper">
        <div className="pricing__item">
            <div className="pricing__card-top">
                <h2 className="section__title">
                    Individual Money Transfers
                </h2>
                {/* <h2 className='pricing section__title'>$50 <span>/month</span></h2> */}
            </div>

            <div className="services">
            <p>Effortlessly send and receive money across borders, ensuring secure and fast transactions.</p>
            </div>
        </div>

        <div className="pricing__item pricing__item-02">
            <div className="pricing__card-top">
                <h2 className="section__title">
                Business Payments
                </h2>
                {/* <h2 className='pricing section__title'>$50 <span>/month</span></h2> */}
            </div>

            <div className="services">
            <p>Streamline your international business payments, facilitating seamless transactions for your organization.</p>
            </div>
        </div>
        <div className="pricing__item pricing__item-03">
            <div className="pricing__card-top">
                <h2 className="section__title">
                Real-Time Payment Tracking
                </h2>
                {/* <h2 className='pricing section__title'>$50 <span>/month</span></h2> */}
            </div>

            <div className="services">
            <p>Track your payments in real-time, ensuring transparency and visibility throughout the entire transaction process.</p>
            </div>
        </div>
     </div>

    </div>
   </section>
  )
}

export default Pricing