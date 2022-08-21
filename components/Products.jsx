import React from 'react'
import { urlFor } from '../lib/client'
import css from '../styles/Products.module.css'
import Image from 'next/image';
import Link from 'next/Link'
import Carousel from 'react-elastic-carousel';

function Products({ watches }) {
    return (
        <div class={css.container}>
            <div class={css.name}>
                <h3 id="products">Products</h3>
            </div>

            <Carousel itemsToShow={3}>
                {watches.map((watch, id) => {
 

                    const src = urlFor(watch.image).url() 
                    return (
                        <div class={css.card}>
                            <div class={css.cover}> 
                            <img src={src} alt="" />
                            </div>

                                <div class={css.details}>
                                    <h3>{watch.name}</h3>
                                    <h2 class={css.price}>${watch.price}. <small>99</small></h2>

                                    <a href="#" class={css.buy}>View Details</a>

                                </div>
                            </div>

                    )

                }

                )}
</Carousel>
        </div> 
    )
}



export default Products