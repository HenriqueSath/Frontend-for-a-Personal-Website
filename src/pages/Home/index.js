import React from 'react'
import { Link } from 'react-router-dom'
import Helmet from 'react-helmet'

import Rosto from '../../assets/rostoHome.jpg'
import LogoTop from '../../assets/logoTop.svg'

import './stylesHome.css'

export default function Home() {

    return (
        <div className="homeContainer">
            <Helmet>
                <title>Home</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Helmet>

            <header>
                <img src={LogoTop} className="" alt="Logomarca" />
                <nav>
                    <li>
                        <Link className='a' to="/socialmedias">
                            Social Medias
                        </Link>
                    </li>
                    <li>
                        <Link className='a' to="/about">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link className='a' to="/contact">
                            Contact
                        </Link>
                    </li>
                </nav>
            </header>

            <div className="content">
                <div className="img">
                    <img src={Rosto} alt="imagem de Henrique" />
                </div>

                <div id="text">
                    <div className="h">
                        <h3>So, I'm</h3>
                        <h1>Henrique Sathler</h1>
                        <h2>Uau</h2>
                    </div>

                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente doloribus, rerum dicta, perferendis error praesentium natus sequi illum explicabo id veniam ad molestiae nam mollitia corrupti est dolores, quisquam saepe!
                    </p>
                </div>
            </div>
        </div>
    )
}