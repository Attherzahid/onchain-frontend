import React from 'react'
import { Footer, Header } from '../components'
import DefalutSec from '../sections/DefaultSec'

const PrivacyPolicy = () => {
    return (
        <>
            <Header />
            <main>
                <DefalutSec>
                    <h1 className='h2 gradient-text'>Privacy Policy</h1>
                    <p>A website’s privacy policy outlines if and how you collect, use, share, or sell your visitors’ personal information and is required under laws like the General Data Privacy Regulation (GDPR) and the California Consumer Privacy Act (CCPA). Keep reading to learn more about privacy policies, why you need one for your website, see some examples, and download our free privacy policy template.</p>
                    <h2 className="h3">What Is a Privacy Policy?</h2>
                    <p>A privacy policy on your website is a legal document informing users about how you collect and handle their personal data, who you share it with, if you sell it, and any other relevant details.</p>
                    <p>You might also call a privacy policy a:</p>
                    <ul className="list-style-disc text-gray-light">
                        <li>Privacy Agreement</li>
                        <li>Privacy Clause</li>
                        <li>Privacy Notice</li>
                        <li>Privacy Page</li>
                        <li>Privacy Policy Statement</li>
                    </ul>
                    <h3 className="h3">Privacy Policies are Required by Law</h3>
                    <p>Privacy laws vary around the globe, and your website or app must abide by the regulations based on the location of your business, your targeted audience, and where you conduct business.</p>
                    <p>As data collection and processing becomes more ubiquitous across the internet, data privacy laws in the US and around the world set strict requirements for privacy policies.</p>

                </DefalutSec>
            </main>

            <Footer />
        </>
    )
}

export default PrivacyPolicy