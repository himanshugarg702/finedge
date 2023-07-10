import React from 'react'
import '../../styles/footer.css'
const Footer = () => {

    const year=new Date().getFullYear()

  return <footer className="footer">
    <div className="container">
        <div className="footer__wrapper">
            <div className="footer__box">
            <div className="logo">
    {/* <div className="logo__img"><img src={logo} alt="" /></div> */}
    <h2>FinEdge</h2>
 </div>
 <p>Experience seamless transactions and financial management like never before.<br />
                Discover innovative tools and personalized services to revolutionize your financial journey.</p>
            </div>
            <div className="footer__box">
                <h4 className="footer__title">
                    Quick Links
                </h4>
                <ul className="footer__links">
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Contact us</a></li>
                    <li><a href="#">Support</a></li>
                </ul>
            </div>
        </div>
        <p className='copyright'>Copyright-{year} developed by FinEdge</p>
    </div>
  </footer>
}

export default Footer