import React from 'react'
import { Link } from 'react-router-dom'
import Helmet from 'react-helmet'

import Logo from '../../assets/logoTop.svg'
import euRight from '../../assets/eu.svg'
import euLeft from '../../assets/eu2.svg'

import './stylesAbout.css'

export default function About() {
    let show = true

    function handleClickToggle() {
        document.querySelector('div.menuSection').classList.toggle('on', show)
        document.querySelector('body').classList.toggle('on', show)
        show = !show
    }

    function changePage() {
        document.querySelector('body').classList.toggle('on')
    }

    return (
        <div className="aboutContainer">
            <Helmet>
                <title>About</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Helmet>

            <header>
                <img src={Logo} className="" alt="Logomarca" />
                <div className="menuSection">
                    <div className="menuToggle" onClick={handleClickToggle}>
                        <div className="one"></div>
                        <div className="two"></div>
                        <div className="three"></div>
                    </div>
                    <nav>
                        <li>
                            <Link className='a' to="/" onClick={changePage}>
                                Home
                        </Link>
                        </li>
                        <li>
                            <Link className='a' to="/socialmedias" onClick={changePage}>
                                Social Medias
                        </Link>
                        </li>
                        <li>
                            <Link className='a' to="/contact" onClick={changePage}>
                                Contact
                        </Link>
                        </li>
                    </nav>
                </div>
            </header>


            <div className="main">
                <div className="left">
                    <img src={euLeft} alt="Foto do Henrique" />

                    <div className="textLeft">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque nulla consequuntur qui excepturi, minus enim nobis ullam alias, sequi odio error laudantium veritatis dolorum corrupti culpa blanditiis provident, dicta optio.</p>
                    </div>
                </div>

                <div className="right">
                    <img src={euRight} alt="Foto do Henrique" />

                    <div className="textRight">
                        <p>Lorem ipsum atque sit amet consectetur, adipisicing elit. Expedita vero sed unde numquam recusandae rem praesentium corporis laborum accusamus aliquam beatae fugiat commodi amet esse quia, alias iusto? Vero, maxime.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}