import React from 'react'
import css from '../styles/Features.module.css'
import { HiUserCircle } from "react-icons/hi"

function Features() {
  return (
    <div className={css.features}>
    <div className={css.headphone}>
       <div className={css.total}><i class='fa fa-headphones' ></i><span>900+</span></div> 
        <span>total headphone products we produce o a year </span>
    </div>
    <div className={css.customer}>
        <div className={css.total}><HiUserCircle size={50} color='white'/><span>1200+</span></div>
        <span>our loyal customers and become VIPs and philanthropists</span>
    </div>
    <div className={css.store}>
        <div className={css.total}><i class='fa fa-shopping-bag' ></i><span>170+</span></div>
        <span>we have a number of store branches in each area </span>
    </div>
</div>

  )
}

export default Features