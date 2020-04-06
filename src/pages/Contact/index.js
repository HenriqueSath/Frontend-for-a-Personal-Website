import React from 'react'
import { Link } from 'react-router-dom'
import { FiSend } from 'react-icons/fi'

import LogoTop from '../../assets/logoTop.svg'
import image from '../../assets/contactimage.svg'

import './stylesContact.css'

export default function Contact() {

    return (
        <div className="homeContainer">
            <header>
                <Link to='/'>
                    <img src={LogoTop} className="" alt="Logomarca" />
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
                        <Link className='a' to="/about">
                            About
                        </Link>
                    </li>
                </nav>
            </header>

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
    )
}