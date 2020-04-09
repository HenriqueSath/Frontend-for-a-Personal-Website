import React from 'react'
import { Link } from 'react-router-dom'
import Helmet from 'react-helmet'

import { FiInstagram } from 'react-icons/fi'
import { FaGithub, FaFacebook, FaTwitter } from 'react-icons/fa'

import LogoTop from '../../assets/logoTop.svg'
import image from '../../assets/socialmediasimage.svg'

import './stylesSM.css'

export default function SocialMedias() {

    return (
        <div className="smContainer">
            <Helmet>
                <title>Social Medias</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Helmet>

            <header>
                <img src={LogoTop} className="" alt="Logomarca" />
                <nav>
                    <li>
                        <Link className='a' to="/">
                            Home
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

            <div className="img">
                <img src={image} alt="Imagem do Henrique" />
            </div>

            <div id="socialMedias">


                <a target="_blank" rel="noopener noreferrer" href="https://github.com/HenriqueSath">
                    <div className="iconGit">
                        <FaGithub
                            size={45}
                        />
                    </div>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/sathlerhenrique/">
                    <div className="iconIns">
                        <FiInstagram
                            size={45}
                        />
                    </div>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/henricksathler">
                    <div className="iconTt">
                        <FaTwitter
                            size={45}
                        />
                    </div>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/HenriqueSathlerFS">
                    <div className="iconFb">
                        <FaFacebook
                            size={45}
                        />
                    </div>
                </a>
            </div>
        </div>

    )
}