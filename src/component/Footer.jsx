import React from "react";
import style from "../style/style";
import FacebookLogo from "../assets/icon/facebook.svg";
import InstagramLogo from "../assets/icon/instagram.svg";
import TwitterLogo from "../assets/icon/twitter.svg";
import GmailLogo from "../assets/icon/gmail.svg";
import PhoneLogo from "../assets/icon/phone.svg";
import { useAlert } from 'react-alert';


const Footer = () => {
    const logoList = [
        {
            id: 'facebook',
            src: FacebookLogo
        },
        {
            id: 'instagram',
            src: InstagramLogo
        },
        {
            id: 'twitter',
            src: TwitterLogo
        },
        {
            id: 'gmail',
            src: GmailLogo
        },
        {
            id: 'phone',
            src: PhoneLogo
        },
    ];

    const alert = useAlert();

    const logoComponent = logoList?.map(function(logo) {
        return (
            <img
                key={logo.id}
                style={style.Footer.footerLogoImg}
                src={logo.src}
            />
        );
    })

    return (
        <div className="footerOutContainer" style={style.Footer.footerOutContainer}>
            <div className="footerContainer" style={style.Footer.footerContainer}>
                <div className="footerDivider" style={style.Footer.footerDivider} />
                    <div className="footerContent" style={style.Footer.footerContentContainer}>
                        <div className="footerLeftContent" style={style.Footer.footerLeftContent}>
                            <p className="footerContentAddress" style={style.Footer.footerContentText}>2 George St, Brisbane City QLD 4000</p>
                            <p className="footerContentPhone" style={style.Footer.footerContentText}>+61 7 3138 2000</p>
                            <div className="footerLogoContainer" style={style.Footer.footerLogoContainer}>
                                {logoComponent}
                            </div>
                            <p className="footerContentCopyRight" style={style.Footer.footerContentText}>© 2023 TINGHSIANGSU</p>
                        </div>
                    <div className="footerRightContent" style={style.Footer.footerRightContent}>
                        <p className="footerContentJoin" style={style.Footer.footerRightContent}>Join our mailing list</p>
                        <div className="footerEmailContainer" style={style.Footer.footerEmailContainer}>
                            <input
                                className="footerEmailInput"
                                style={style.Footer.footerEmailInput}
                                type="email" 
                                placeholder="Enter Your Email"
                            />
                            <input
                                className="footerEmailBtn"
                                style={style.Footer.footerEmailBtn}
                                type="button"
                                value="Subscribe Now"
                                onClick={() => {
                                    alert.show('Thanks for your subscribing. We will send you the latest discount.');
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;