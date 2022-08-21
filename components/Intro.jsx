import React from 'react'
import Image from 'next/image';
import css from '../styles/Intro.module.css'
import Watch from '../assets/kisspng-armani-watch.png' 

function Intro() {
  return (
<div className={css.intro}>
    <div className={css.left}>
        <div class={css.title}>
            <span>Super Watches </span>
            <span>Special For You</span>
            <span>We provide various types of brand of watches and smart watches for those of you who like
                simple but luxurious style
            </span>
        </div>
        <div class={css.btns}>
            <button className={`btn ${css.button}`}>Buy Now</button>
            <button className={`btn ${css.button}`}>Learn More</button>
        </div>
    </div>
    <div className={css.right}>
        <Image src={Watch} alt=""/>
    </div>
</div>
  )
}

export default Intro