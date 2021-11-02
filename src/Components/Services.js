import React from 'react'
import { faDesktop, faMobile } from '@fortawesome/free-solid-svg-icons'
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { faPhotoVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Services = () => {
    return (
        <div id="service" className="services">
            <h1 className="py-5">My Services</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-6">
                            <div className="box">
                                <div className="circle">
                                <FontAwesomeIcon className="icon" icon={faDesktop} size="2x"/>
                                </div>
                                <h3>Web Development</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6">
                            <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon className="icon" icon={faMobileAlt} size="2x"/>
                                </div>
                                <h3>Mobile Apps</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6">
                            <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon className="icon" icon={faPhotoVideo} size="2x"/>
                                </div>
                                <h3>Photo and Video Editing</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
