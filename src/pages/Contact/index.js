import React from 'react'
import { Link } from 'react-router-dom'
import Helmet from 'react-helmet'

import { FiSend } from 'react-icons/fi'

import LogoTop from '../../assets/logoTop.svg'
import image from '../../assets/contactimage.svg'

import './stylesContact.css'

export default function Contact() {
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
        <div className="contactContainer">
            <Helmet>
                <title>Contact</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Helmet>

            <header>
                <img src={LogoTop} className="" alt="Logomarca" />
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
                            <Link className='a' to="/about" onClick={changePage}>
                                About
                        </Link>
                        </li>
                    </nav>
                </div>
            </header>

            <div className="main">
                <div className="img">
                    <img src={image} alt="imagem do Henrique" />
                </div>

                <form>
                    <div className="inputWrapper">
                        <div className="label">
                            <label htmlFor="name">First Name*</label>
                        </div>

                        <input
                            type="text"
                            name="name"
                            required={true}
                            className="firstName"
                            placeholder="First name"
                        />
                    </div>

                    <div className="inputWrapper">
                        <div className="label">
                            <label htmlFor="lastName">Last Name*</label>
                        </div>

                        <input
                            name="lastName"
                            className="lastName"
                            placeholder="Last name"
                            required={true}
                            type="text"
                        />
                    </div>

                    <div className="inputWrapper">
                        <div className="label">
                            <label htmlFor="email">Email*</label>
                        </div>

                        <input
                            name="email"
                            className="email"
                            placeholder="your@email.com"
                            required={true}
                            type="email"
                        />
                    </div>

                    <div className="inputWrapper">
                        <div className="label">
                            <label htmlFor="subject">Subject*</label>
                        </div>

                        <input
                            name="subject"
                            className="subject"
                            placeholder="Be objective"
                            required={true}
                            type="text"
                        />
                    </div>

                    <div className="inputWrapper">
                        <div className="label">
                            <label htmlFor="content">Content*</label>
                        </div>

                        <textarea
                            name="content"
                            className="content"
                            placeholder="What you want to say"
                            cols={30}
                            rows={5}
                            required={true}
                        />
                    </div>


                    <button type="submit">
                        <div className="send">
                            Send
                        <FiSend
                                size={13}
                            />
                        </div>
                    </button>

                </form>
            </div>

        </div>
    )
}