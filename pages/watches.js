import { client } from "../lib/client";
import css from '../styles/items.module.css'
import { urlFor } from '../lib/client'
import { useState,useEffect } from "react";
import Layout from "../components/Layout";
import logo from '../assets/kisspng-armani-watch.png'
import Header from "../components/Header";
import Footer from "../components/Footer";
import { TiChevronLeft,TiChevronRight } from "react-icons/ti";


export default function Watches({watches}) {
console.log({watches});

    const [mappedWatches, setMappedWatches] = useState([]);
    const [count, setCount] = useState(0);
    const [ic, setI] = useState(0);

    useEffect(() => {
        if (watches.length) {
          setMappedWatches(
            watches.map((watch) => {
              return {
                ...watch,
                image: urlFor(watch.image).url(),
              };
            })
          );
        } else { 
          setMappedWatches([]);
        }
      }, [watches]);

    const progressBar = () => {
        const progText = document.querySelector('.'+css.progText);
        const progress = document.querySelector('.'+css.progress);
        progText.innerText = 0; 

        progress.style.transition = 50 * mappedWatches[ic].percentage + "ms";
        progress.style.bottom = mappedWatches[ic].percentage - 110 + "%";

        updateCount();
    };
    const updateCount = () => {
        const target = mappedWatches[ic].percentage;
        if (count < target) {
            setCount(count++);
            progText.innerText = count + "%"; 
            setTimeout(updateCount, 30);
        }
        else {
            progText.innerText = target + "%";
        }
    };
    const slider = () => {
        const img = document.querySelector('.'+css.image+' img');
        const name = document.querySelector(`.${css.name}`);
        const price = document.querySelector(`.${css.price}`);
        const title = document.querySelector(`.${css.title}`);
        const optionsList = document.querySelector('.'+css.list);
        const option = document.querySelector('.'+css.list+' li');
        const bg = document.querySelector('.'+css.panel1);
        const src = mappedWatches[ic].image;

        img.src = src;
        img.classList.add(css.fadein);
        setTimeout(() => {
            img.classList.remove(css.fadein);
        }, 850);

        name.innerHTML = mappedWatches[ic].name;
        price.innerHTML = mappedWatches[ic].price;


        for (let i = 0; i < mappedWatches[ic].options.length; i++) {
          let li = document.createElement('li');
            li.innerHTML = mappedWatches[ic].options[i];
            li.classList.add(css.option);
            if (i === 0) {
                optionsList.innerHTML = '';
                li.classList.add(css.activeoption);
            }
            optionsList.appendChild(li);
        }
        progressBar();
    };
    const left = () => {
        let prev = mappedWatches.length - 1;
        setI(ic--);
        if (ic < 0) {
            setI(prev);
      }
        slider();
    };
    const right = () => {

        let suiv = 0;
        setI(ic++);
        if (ic > mappedWatches.length - 1) {
            setI(suiv);
        }
        slider();
  
    };
 

    return (
         <>
        <Header home={false} about={false} offers={false} products={true} />
                    <section className={css.section}>
                    
                        <div className={css.card}>
                            <div className={css.panel1}></div>
                            <div className={css.panel2}></div>
                            <div className={css.product}>
                                <div className={css.image}>
                                    <img src={logo} alt='product' />
                                </div>
                                <div className={css.details}>
                                    <div>
                                    <h1 className={css.name}></h1>
                                    <h1 >$<span className={css.price}></span>,<sup>99</sup></h1>
                                    <div className={css.detail}>
                                        <div className={css.options}>
                                           <b className={css.title}>SIZE</b>
                                            <ul className={css.list}>
                                                <li className={css.activeoption}>44</li>
                                                <li className={css.option}>46</li>
                                                <li className={css.option}>48</li>
                                                <li className={css.option}>50</li>
                                            </ul>
                                        </div>
                                        <div className={css.specs}>
                                            <div className={css.progressbar}>
                                                <div className={css.progresscircle}>
                                                    <div className={css.progresscontent}>
                                                        <h2 className={css.progText}>80%</h2>
                                                    </div>
                                                    <div className={css.progress}></div>
                                                </div>
                                            </div>
                                            <small><b>Durability</b></small>
                                        </div>
                                    </div>
                                    <div className={css.buttons}>
                                        <button type="button" className={css.primary}><b>Add To Cart </b></button>
                                        <button type="button" className={css.secondary}>Add To Wishlist </button>
                                    </div>
                                </div>
                             </div>
                            </div>

                            <div className={css.arrowleft}  onClick={left}><TiChevronLeft size={30}/></div>
                            <div className={css.arrowright} onClick={right}><TiChevronRight size={30}/></div>
                        </div>
                    </section>
        <Footer/>
        </>
    );
}

export const getServerSideProps = async()=>{
    const query='*[_type=="watch"]';
    const watches = await client.fetch(query); 
    return{
        props:{
            watches 
        }
    }
};

