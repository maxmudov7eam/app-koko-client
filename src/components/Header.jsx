import React, { useEffect, useState } from 'react';
const Header = () => {
    const [offsetY, setOffsetY] = useState(0);

    const handScroll = () => setOffsetY(window.pageYOffset)

    useEffect(() => {
        
        window.addEventListener('scroll', handScroll);

        return () => window.removeEventListener('scroll', handScroll)
    })
    return (
        <div className='header'>
            <div className="video">
                <video style={{ transform: `translateY(${offsetY * 0.6}px)`, opacity: '0.5' }} className='w-100' autoPlay loop muted src="/assets/image/bg3.mp4" type="video/mp4"></video>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-9 mx-auto text-center">
                        <h1 style={{ transform: `translateY(${offsetY * -0.6}px)` }} >Discover, collect, and sell NFTs</h1>
                        <p style={{ transform: `translateY(${offsetY * -0.4}px)` }} className="secondary">Explore the upcoming NFT projects, get all the info you need project for you. Don’t forget to check the addition.</p>
                        <button style={{ transform: `translateY(${offsetY * -0.2}px)` }}  className="btn myBtn">Get started</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header
