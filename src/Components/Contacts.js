import React, {useState} from 'react'
import emailjs from "emailjs-com"
import {useForm} from "react-hook-form" 
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"


export const Contacts = () => {

    const [succesMessage, setSuccessMessage] = useState("");
    const {register, handleSubmit, formState:{errors}} = useForm();

    const onSubmit = (data,r) => {
        sendEmail(
            serviceID,
            templateID,
            {
                name: data.name,
                phone: data.phone,
                email: data.email,
                subject: data.subject,
                description: data.description
            },
            userID
        )
        r.target.reset();
    }

    const sendEmail = (serviceID,templateID,variables,userID) => {
        emailjs.send(serviceID,templateID,variables,userID)
        .then(() => {
           setSuccessMessage("Email berhasil dikirim! tunggu balasan secepatnya.");
        }).catch(err => console.error(`terjadi kesalahan!!! ${err}`));
    }

    const serviceID = "gedekresna";
    const templateID = "template_9hhyh6o";
    const userID = "user_WHQCXjOfTsxh4uck1bveF";


    return (
        <div className="contact">
            <div className="text-center">
            <h1>contact me</h1>
           
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
         <span className="success-message">{succesMessage}</span>
         </div>
            <div className="container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row"> 
                    <div className="col-md-6 col-xs-12">

                        {/* NAME INPUT */}
                        <div className="text-center">                      
                        <input
                        //id="desscription"
                        type="text"
                        className="form-control" 
                        placeholder="Name"
                        name="name"
                        aria-invalid={errors.name ? "true" : "false"}
                        {...
                            register("name",{
                                required: "harap masukkan nama anda",
                                maxLength: {
                                    value: 50,
                                    message: "Masukkan nama kurang dari 50 karakter",
                                },
                            })
                        }
                        />
                        
                        <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.name && errors.name.message}
                        </span>

                        {/* PHONE INPUT */}
                        <div className="text-center">
                        <input
                        //id="description"
                        type="text"
                        className="form-control"
                        placeholder="Phone Number"
                        name="phone"
                        aria-invalid={errors.phone ? "true" : "false"}
                        {...
                            register("phone",{
                                required: "harap masukkan nomor telfon anda",
                            })
                        }
                        />
                        <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.phone && errors.phone.message}
                        </span>

                        {/* EMAIL INPUT */}
                        <div className="text-center">
                        <input
                        //id="description"
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        name="email"
                        aria-invalid={errors.email ? "true" : "false"}
                        {...
                            register("email",{
                                required: "harap masukkan email anda",
                               pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "email tidak valid",
                                },
                            })
                        }
                        />
                        <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.email && errors.email.message}
                        </span>

                        {/* SUBJECT INPUT */}
                        <div className="text-center">
                        <input
                        //id="subject"
                        type="text"
                        className="form-control"
                        placeholder="Subject"
                        name="subject"
                        aria-invalid={errors.subject ? "true" : "false"}
                        {...
                            register("subject",{
                                required: "harap masukkan subject",
                            })
                        }
                        />
                        <div className="line"></div>
                        </div>
                        <span className="error-message">
                        {errors.subject && errors.subject.message}
                    </span>
                    </div>     
                    <div className="col-md-6 col-xs-12">
                    

                        {/* DESCRIPTION */}  
                        <div className="text-center">       
                        <textarea
                        //id="description"
                        type="text"
                        className="form-control"
                        placeholder="Description"
                        name="description"
                        aria-invalid={errors.description ? "true" : "false"}
                        {...
                            register("description",{
                                required: "harap masukkan deskripsi yang singkat dan jelas",
                            })
                        }
                        />
                        <div className="line"></div>
                        </div>
                        <span className="error-message">
                        {errors.description && errors.description.message}
                         </span>
                        <button className="btn-main-offer contact-btn" type="submit">contact me</button>
                    </div>      
                </div>
                </form>
            </div>
        </div>
    )
}
