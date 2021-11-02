import React from 'react'
import {
  LinkedinIcon,
  InstapaperIcon,
  LineShareButton,
  TwitterShareButton,
  FacebookIcon,
  FacebookShareButton, 
  InstapaperShareButton,
  LinkedinShareButton,
  WhatsappIcon,
  WeiboShareButton,
  WhatsappShareButton
} from 'react-share'

export const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>Surabaya, Jawa Timur</p>
                        </div>
                        <div className="d-flex">
                           <a href="tel:082132389713">+62 82132389713</a>
                        </div>
                        <div className="d-flex">
                            <p>gedekresnap@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <a className="footer-nav">Home</a><br/>
                                <a className="footer-nav">About</a><br/>
                                <a className="footer-nav">Services</a><br/>
                            </div>
                            <div className="col">
                                <a className="footer-nav">Experiences</a><br/>
                                <a className="footer-nav">Portofolio</a><br/>
                                <a className="footer-nav">Contact</a><br/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center">
                            <FacebookShareButton url={"https://www.facebook.com/gede.kresna.5"}>
                                <FacebookIcon className="mx-3" size={36}/>
                            </FacebookShareButton>
                            <LinkedinShareButton url={"www.linkedin.com/in/gede-kresna"}>
                                <LinkedinIcon className="mx-3" size={36}/>
                            </LinkedinShareButton>
                            <WhatsappShareButton url={"https://wa.wizard.id/fd91b4"}>
                                <WhatsappIcon className="mx-3" size={36}/>
                            </WhatsappShareButton>
                        </div>
                        <p className="pt-3 text-center">
                            Copyright&copy;
                            {new Date().getFullYear()}&nbsp;IT Slution | All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
