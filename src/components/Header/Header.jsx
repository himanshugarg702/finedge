import React, {useEffect, useRef} from 'react'
import '../../styles/header.css'
import {AiOutlineMenu} from 'react-icons/ai'

// import Menu from 'remixicon-react'

const nav__links=[
    {
        path:'#home',
        display:'Home'
    },
    {
        path:'#about',
        display:'About'
    },
    {
        path:'#services',
        display:'Services'
    }
]

const Header = () => {

    const headerRef=useRef(null)
    const headerFunc=()=>{
        if(document.body.scrollTop>80||document.documentElement.scrollTop>80){
            headerRef.current.classList.add('sticky__header')
        }
        else{
            headerRef.current.classList.remove('sticky__header')
        }
    }
useEffect(()=>{
    window.addEventListener('scroll',headerFunc);
    return ()=> window.removeEventListener('scroll',headerFunc)
},[])
   
    const handleClick=e=>{
        e.preventDefault();
        const targetAttr=e.target.getAttribute('href');
        const location=document.querySelector(targetAttr).offsetTop;
        window.scrollTo({
            left:0,
            top:location-80,
        });
    }

  return <header className='header' ref={headerRef}>
   <div className='container'>
  <div className='nav__wrapper'>
    {/* Logo */}
 <div className="logo">
    <div className="logo__img"></div>
    <h2>FinEdge</h2>
 </div>
 {/* Navigateion menu  */}
 <div className="navigation">
    <ul className="menu">
        {
            nav__links.map(item=>(
                <li className="nav__item"><a onClick={handleClick} href={item.path}>
                    {item.display}</a></li>
            ))
        }
    </ul>
 </div>
 {/* nav right */}
 <div className="nav__right">
    <button className="register__btn">Contact</button>
    <span className="mobile__menu">
    <AiOutlineMenu/>
    </span>
 </div>
  </div>
   </div>
  </header>
}

export default Header