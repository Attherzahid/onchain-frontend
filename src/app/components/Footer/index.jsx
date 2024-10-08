import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-wrapper d-flex justify-content-between gap-2 flex-wrap">
                    <p className=" mb-0 font-gilroy-semibold">Copyright © Onchain Capital - All Right Reserved</p>
                    <ul className="menu d-flex gap-2 gap-1 flex-wrap">
                        <li><Link href={"/privacy-policy"}>Política de Privacidad</Link></li>
                        <li><Link href="/terms-and-conditions">Términos y condiciones</Link></li>
                        <li><Link href="#">Aviso Legal</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer