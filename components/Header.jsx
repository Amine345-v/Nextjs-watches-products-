import React from 'react'
import css from '../styles/Header.module.css'
import { useState, useEffect } from "react";
import Image from 'next/image';
import Logo1 from '../assets/montre-bracelet-de-croquis-de-vecteur-rétro-77743708 (1).png'
import Logo2 from '../assets/montre-bracelet-de-croquis-de-vecteur-rétro-77743708 (2).png'
import { FaSearch } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";
import Link from 'next/link';

function Header ( props ){
    const [productModal, setProductModal] = useState(props.products);
    const [homeModal, setHomeModal] = useState(props.home);
    const [aboutModal, setAboutModal] = useState(props.about);
    const [offersModal, setOffersModal] = useState(props.offers);

    const handleModals = (e) => {
        if (e.target.id === "product") {
          setProductModal(true);
          setHomeModal(false);
          setAboutModal(false);
          setOffersModal(false);
        } else if (e.target.id === "home") {
          setProductModal(false);
          setHomeModal(true);
          setAboutModal(false);
          setOffersModal(false);
        }
      };
  
  //  useEffect(() => {
  //    const onScroll = () => {
  //      if (window.scrollY > 50) {
  //        setScrolled(true);
  //      } else {
  //  setScrolled(false);
  //}
   //   }
  //
  //    window.addEventListener("scroll", onScroll);
  //
  //    return () => window.removeEventListener("scroll", onScroll);
  //  }, [])
  //
    return (
        <div className={css.nav}>
            <div className={css.logo}>
            <a href=""><Image src={Logo1} alt="" /></a>  
            <a href=""><Image  src={Logo2} alt=""/></a>
            </div>

            <div className={css.right}>
                <div className={css.links}>
                    <ul>
                        <li ><Link href='/'><a className={homeModal ?  css.activelink : css.link} onClick={handleModals} id="home" href="">Home</a></Link></li>
                        <li ><a className={aboutModal ? css.activelink : css.link} onClick={handleModals} id="about" href="">about</a></li>
                        <li ><Link href='./watches'><a className= {productModal ? css.activelink :css.link} onClick={handleModals} id="product">products</a></Link></li>
                        <li><a className={offersModal ? css.activelink : css.link} onClick={handleModals} href="">Offers</a></li>
                        <li><a className={css.link} onClick={handleModals} href="">Contact</a></li>
                    </ul>
                </div>
                <div className={css.searchbar}><div className={css.search}><FaSearch size={24}/> <input type="text" name="searc" placeholder="Search...." /></div></div>
                <div className={css.shop}><a href=""><HiShoppingCart size={25}/> <div className={css.badge}></div>
                </a></div>
            </div> 
            </div>

    )
} 

export default Header