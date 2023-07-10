import React from 'react'
import '../../styles/exercise.css'
// import lunges from '../../assets/img/lunges.png'
// import extended from '../../assets/img/extended.png'
// import yoga from '../../assets/img/yoga-pose.png'
const Exercise = ()=>{
  return (
    <section id='about'>
        <div className="container exercise__container">
            <div className="exercise__top">
                <h2 className="section__titlle">
                    Why <span className="highlights">Finedge</span>
                </h2>
                <p>
                At FinEdge, we believe in breaking down the barriers <br/>of traditional financial systems, allowing for seamless and efficient cross-border transactions. Our advanced technology and robust infrastructure empower individuals and businesses to transcend geographical boundaries, enabling them to effortlessly send and receive payments globally.
                </p>
            </div>
            {/* exercise list */}
            <div className="exercise__wrapper">
                <div className="exercise__item">
                    <div className="exercise__content">
                        <h4>Healthy Payments</h4>
                        <p>
                        By leveraging cutting-edge financial technologies, <br/>we provide our customers with a secure, transparent
                </p>
                    </div>
                </div>
                <div className="exercise__item">
                    <div className="exercise__content">
                        <h4>Increase Flexibility</h4>
                        <p>
                        Whether you are a small business seeking to expand <br/> globally or an individual looking for hassle-free international money transfers
                </p>
                    </div>
                </div>
                <div className="exercise__item">
                    <div className="exercise__content">
                        <h4>Seamless Cross-Border Payments</h4>
                        <p>
                        At FinEdge, we revolutionize cross-border payments by providing a seamless experience for individuals and businesses. <br />
            Our advanced fintech solutions ensure hassle-free international transactions, transcending geographical boundaries.
                </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Exercise