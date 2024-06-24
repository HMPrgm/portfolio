"use client"
import { useState } from "react"

export default function Contact() {

    const [formData, setFormData] = useState<{
        name: string;
        email: string;
        message: string
    }>({ name: "", email: "", message: "" });

    return (
        <div className="bg-Cwhite py-10 text-Cblack">
            <div className="container mx-auto items-center text-center ">
                <div className="container items-center mx-auto max-w-96 [&>*]:py-4">
                    <h2 className="font-playfairDisplay text-5xl  text-Cblack">Let's Talk!</h2>
                    <p className="text-xl">Have a question or just want to talk? Feel free to shoot me a message!</p>
                </div>
                <div className="my-10 max-w-[60em] container items-center mx-auto">
                    <form action="/email" method="POST"className="grid grid-cols-2 gap-4 [&>*]:flex [&>*]:flex-col text-left text-xl">
                            <div className="">
                                <label htmlFor="name" className="">Name</label>
                                <input type="name" name="name" id="name" className="focus:outline-none bg-Cwhite border-b-Cblack border-b-2 py-1" placeholder="Enter your name"></input>
                            </div>
                            <div>
                                <label htmlFor="email" >Email</label>
                                <input type="email" name="email" id="email" placeholder="Enter your email address" className="focus:outline-none bg-Cwhite border-b-Cblack border-b-2 py-1"></input>
                            </div>
                            <div className="col-span-2">
                                <label htmlFor="message" className="">Message</label>
                                <textarea name="message" id="message" className="focus:outline-none h-18 overflow-auto resize-none bg-Cwhite border-b-Cblack border-b-2 py-1.5" placeholder="Hi Henry, I was just curious about your X project and was wondering if you could tell me more about how you implemented..."></textarea>
                            </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
