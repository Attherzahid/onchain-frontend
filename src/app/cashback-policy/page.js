import React from 'react'
import { Footer, Header } from '../components'
import DefalutSec from '../sections/DefaultSec'

const PrivacyPolicy = () => {
    return (
        <>
            <Header />
            <main>
                <DefalutSec>
                    <h1 className='h2 gradient-text'>cashback Policy</h1>
                    <p>The CCPA regulates privacy policy requirements for businesses targeting users in California, regardless of the company’s physical location.
                    Your business falls under the CCPA if it meets one of the following thresholds:</p>
                    <ul className="list-style-disc text-gray-light">
                        <li>It generates over $25 million in annual gross revenue</li>
                        <li>It annually buys, receives, sells, or shares the personal information of 50,000 or more consumers (changing to 100,000 under the CPRA)</li>
                        <li>It derives 50% or more of its annual revenue from the sale of personal consumer data</li>
                    </ul>
                    <h3 className="h3">The General Data Privacy Regulation (GDPR)</h3>
                    <p>The GDPR regulates privacy policy requirements for entities targeting users in the European Union (EU) and the European Economic Area (EEA), regardless of the company’s physical location.</p>
                    <p>Your business must comply with the GDPR if it targets EU consumers and meets one of the following thresholds:</p>
                    <ul className="list-style-disc text-gray-light">
                        <li>It offers goods or services</li>
                        <li>It monitors online behavior</li>
                    </ul>
                    <p>Chapter 3, Articles 13 and 14 of the law clarify that users have the right to be fully informed about the collection and use of their personal data.</p>
                    <p>Linking to a generic privacy policy is not enough under the GDPR; you also need freely given consent from users before collecting their personal information. Under the law, personal data refers to any information relating to an identifiable person, either directly or indirectly.</p>

                </DefalutSec>
            </main>

            <Footer />
        </>
    )
}

export default PrivacyPolicy