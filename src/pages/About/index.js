import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../../assets/logoTop.svg'
import euLeft from '../../assets/eu.svg'
import euRight from '../../assets/eu2.svg'

import './stylesAbout.css'

export default function About() {

    return (
        <div className="aboutContainer">
            <header>
                <Link to='/'>
                    <img src={Logo} className="" alt="Logomarca" />
                </Link>
                <nav>
                    <li>
                        <Link className='a' to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className='a' to="/socialmedias">
                            Social Medias
                        </Link>
                    </li>
                    <li>
                        <Link className='a' to="/contact">
                            Contact
                        </Link>
                    </li>
                </nav>
            </header>



            <div className="left">
                <img src={euLeft} alt="Foto do Henrique" />

                <div className="textLeft">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque nulla consequuntur qui excepturi, minus enim nobis ullam alias, sequi odio error laudantium veritatis dolorum corrupti culpa blanditiis provident, dicta optio.</p>
                </div>
            </div>

            <div className="right">
                <img src={euRight} alt="Foto do Henrique" />

                <div className="textRight">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita vero sed unde numquam recusandae rem praesentium corporis laborum accusamus aliquam beatae fugiat commodi amet esse quia, alias iusto? Vero, maxime.</p>
                </div>
            </div>
        </div>

    )
}