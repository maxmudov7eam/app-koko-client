import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Aos from 'aos';

const Services = () => {
    // const [offsetY, setOffsetY] = useState(0);

    // const handScroll = () => setOffsetY(window.pageYOffset)

    useEffect(() => {
        Aos.init({
            once: true,
            duration: 1700,
        })
        
        // window.addEventListener('scroll', handScroll);

        // return () => window.removeEventListener('scroll', handScroll)
    }, [])
    return (
        <>
            <div className="services">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h4 data-aos='fade-right'>Our Services</h4>
                        </div>
                    </div>
                    <div className="d-flex align-items-center">
                        <div className="card">
                            <Link to='/web-development'>
                                <div className="card-body position-relative">
                                    <i> <img src="/assets/image/card2.png" alt="" className="w-100" /></i>
                                    <h5>Веб услуги</h5>
                                    <p>Разработка сайтов, ботов, интернет-магазинов</p>
                                </div>
                            </Link>
                        </div>

                        <div className="card">
                            <Link to='/motion'>
                                <div className="card-body position-relative">
                                    <i> <img src="/assets/image/card3.png" alt="" className="w-100" /></i>
                                    <h5>Моушн</h5>
                                    <p>Создание моушн видео, создание анимационных видео роликов</p>
                                </div>
                            </Link>
                        </div>

                        <div className="card">
                            <Link to='/internet-marketing'>
                                <div className="card-body position-relative">
                                    <i> <img src="/assets/image/card1.png" alt="" className="w-100" /></i>
                                    <h5>Интернет маркетинг</h5>
                                    <p>SMM, SEO, Контекстная реклама</p>
                                </div>
                            </Link>
                        </div>

                        <div className="card">
                            <Link to='/design'>
                                <div className="card-body position-relative">
                                    <i> <img src="/assets/image/card4.png" alt="" className="w-100" /></i>
                                    <h5>Дизайн</h5>
                                    <p>Разработка брендбуков, Веб-дизайн, СММ-дизайн</p>
                                </div>
                            </Link>
                        </div>
                    
                    </div>
                </div>
            </div>

        </>
    )
}

export default Services
