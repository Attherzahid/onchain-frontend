import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <nav className="navbar">
                    <Link href={"/"} className="navbar-brand"><Image src="img/logo.svg" alt='logo' width={48} height={53}/></Link>
                    <ul className="menu">
                        <li><Link href={"/"}>ONCHAIN mastery</Link></li>
                        <li><Link href={"/"}>contact us</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header