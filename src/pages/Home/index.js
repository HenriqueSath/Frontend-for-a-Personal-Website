import React from 'react'
import { Link } from 'react-router-dom'
import Helmet from 'react-helmet'

import Rosto from '../../assets/rostoHome.jpg'
import LogoTop from '../../assets/logoTop.svg'

import './stylesHome.css'

export default function Home() {
    let show = true

    function handleClickToggle() {
        document.querySelector('div.menuSection').classList.toggle('on', show)
        document.querySelector('body').classList.toggle('on')
        show = !show
    }

    function changePage() {
        document.querySelector('body').classList.toggle('on')
    }

    return (
        <div className="homeContainer">
            <Helmet>
                <title>Home</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Helmet>

            <header>
                <img src={LogoTop} className="" alt="Logomarca" />
                <div className="menuSection" >
                    <div className="menuToggle" onClick={handleClickToggle}>
                        <div className="one"></div>
                        <div className="two"></div>
                        <div className="three"></div>
                    </div>
                    <nav>
                        <li>
                            <Link className='a' to="/socialmedias" onClick={changePage}>
                                Social Medias
                        </Link>
                        </li>
                        <li>
                            <Link className='a' to="/about" onClick={changePage}>
                                About
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
        </div>
    )
}