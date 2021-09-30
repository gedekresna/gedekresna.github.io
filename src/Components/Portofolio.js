import React from 'react'
import portofolio from '../portofolio.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons'
import {PopupboxManager, PopupboxContainer} from "react-popupbox"
import "react-popupbox/dist/react-popupbox.css"

export const Portofolio = () => {

    //Portofolio 1 (ToDoList)
    const openpopupboxPorto1 = () => {
        const content = (
        <>
        <img className="portofolio-image-popupbox" src={portofolio} alt="portofolio"/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
         <b>Github: </b>
         <a className="hyper-link" onClick={() => window.open("https://github.com/gedekresna/ToDoList-Flutter-FirestoreCloud-")}
         >https://github.com/gedekresna/ToDoList-Flutter-FirestoreCloud-</a>
        </>
        )
        PopupboxManager.open({content})
    }
    

    const popupboxConfigPorto1 = {
        titleBar: {
            enable: true,
            text: "ToDoList Flutter Apps"
        },
        fadein: true,
        fadeinspeed: 500
    }

     //Portofolio 2 (ToDoList)
     const openpopupboxPorto2 = () => {
        const content = (
        <>
        <img className="portofolio-image-popupbox" src={portofolio} alt="portofolio"/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
         <b>Github: </b>
         <a className="hyper-link" onClick={() => window.open("https://github.com/gedekresna/yii-lukabapak")}
         >https://github.com/gedekresna/yii-lukabapak</a>
        </>
        )
        PopupboxManager.open({content})
        PopupboxManager.update({
            content,
            config: {
              titleBar: {
                text: "Lukabapak Yii Website",
              },
            },
          });
    }
    
    

    const popupboxConfigPorto2 = {
        
        fadein: true,
        fadeinspeed: 500
    }

     //Portofolio 3 (ToDoList)
     const openpopupboxPorto3 = () => {
        const content = (
        <>
        <img className="portofolio-image-popupbox" src={portofolio} alt="portofolio"/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
         <b>Github: </b>
         <a className="hyper-link" onClick={() => window.open("https://github.com/gedekresna/DolanKuy-Desktopp")}
         >https://github.com/gedekresna/DolanKuy-Desktopp</a>
        </>
        )
        PopupboxManager.open({content})
        PopupboxManager.update({
            content,
            config: {
              titleBar: {
                text: "Dolan-Kuy Desktop",
              },
            },
          });
    }
    

    const popupboxConfigPorto3 = {
        fadein: true,
        fadeinspeed: 500
    }

     //Portofolio 4 (ToDoList)
     const openpopupboxPorto4 = () => {
        const content = (
        <>
        <img className="portofolio-image-popupbox" src={portofolio} alt="portofolio"/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
         <b>Github: </b>
         <a className="hyper-link" onClick={() => window.open("https://github.com/gedekresna/DolanKuy-FrontEnd")}
         >https://github.com/gedekresna/DolanKuy-FrontEnd</a>
        </>
        )
        PopupboxManager.open({content})
        PopupboxManager.update({
            content,
            config: {
              titleBar: {
                text: "Dolan-Kuy Frontend",
              },
            },
          });
    }
    

    const popupboxConfigPorto4 = {
        fadein: true,
        fadeinspeed: 500
    }

    return (
        <div className="portofolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">portofolio</h1>
                    <div className="image-box-wrapper row row-cols-auto justify-content-center">
                        
                        <div className="portofolio-image-box" onClick={openpopupboxPorto1}>
                            <img className="portofolio-image" src={portofolio} alt="portofolio"></img>
                            <div className="overflow"></div>
                            <FontAwesomeIcon className="portofolio-icon" icon={faSearchPlus}/>
                        </div>

                        <div className="portofolio-image-box" onClick={openpopupboxPorto2}>
                            <img className="portofolio-image" src={portofolio} alt="portofolio"></img>
                            <div className="overflow"></div>
                            <FontAwesomeIcon className="portofolio-icon" icon={faSearchPlus}/>
                        </div>

                        <div className="portofolio-image-box" onClick={openpopupboxPorto3}>
                            <img className="portofolio-image" src={portofolio} alt="portofolio"></img>
                            <div className="overflow"></div>
                            <FontAwesomeIcon className="portofolio-icon" icon={faSearchPlus}/>
                        </div>

                        <div className="portofolio-image-box" onClick={openpopupboxPorto4}>
                            <img className="portofolio-image" src={portofolio} alt="portofolio"></img>
                            <div className="overflow"></div>
                            <FontAwesomeIcon className="portofolio-icon" icon={faSearchPlus}/>
                        </div>
                    </div>
            </div>
            <PopupboxContainer {...popupboxConfigPorto4}/>
            <PopupboxContainer {...popupboxConfigPorto3}/>
            <PopupboxContainer {...popupboxConfigPorto2}/>
            <PopupboxContainer {...popupboxConfigPorto1}/>
        </div>
    )
}
