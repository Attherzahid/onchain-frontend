'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Header = () => {
    const [isToggle, setIsToggle] = useState(false);
    
    return (
        <header className={`header ${isToggle == true && 'active'}`}>
            <div className="container">
                <nav className="navbar">
                    <Link href={"/"} className="navbar-brand"><Image src="img/logo.svg" alt='logo' width={48} height={53} /></Link>
                    <button className='menu-toggler' type='button' onClick={()=>setIsToggle(!isToggle)}>
                        <Image src={`img/icons/${!isToggle ? 'menu-toggler.svg': 'close-icon.svg'}`} alt='logo' width={isToggle ? 23 : 30} height={isToggle ? 23 : 20} />
                    </button>
                    <ul className={`menu ${isToggle == true && 'active'}`}>
                        <li><Link href={"/"}>ONCHAIN mastery</Link></li>
                        <li><Link href={"/"} className='d-flex align-items-center gap-1'>Follow Us On<Image src={'/img/icons/twitter-icon.svg'} width={18} height={17} alt='twitter-icon' /></Link></li>
                        <li><Link href={"/"}>Contact us</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header