import React from "react";
import { landingPageText, icons } from "../../assets/text";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from "./Card";

import { AmplifyAuthenticator } from "@aws-amplify/ui-react";


const LandingPage = () => {
    return (
        <div className="landing-page">
            <div className="hero">
                <div className="flex flex-col items-center text-white">
                    <div className="flex flex-col mt-20 mb-24">
                        <h2 className="text-5xl mb-4">Get the most out of your land</h2>
                        <p className="text-xl">Get insight and analytics all across your field when you need it</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <div className="flex flex-col w-1/2 mt-16">
                    <h2 className="text-7xl text-awGreen text-center mb-9">How it works</h2>
                    <div className="landing-page__highlights">

                        {landingPageText.map((card, i) => {
                            return (<Card card={card} key={i}>
                                <div className={`mb-8 text-5xl text-${icons[i].color}`}><FontAwesomeIcon icon={icons[i].icon}/></div>
                            </Card>)
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;