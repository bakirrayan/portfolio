// web page to send email to rayanbakir257@gmail.com
import React, {useRef} from 'react';
import { Button, FormGroup, Label, Input} from 'reactstrap';
import "../styles/ContactMe.css";
import emailjs from '@emailjs/browser';

function ContactMe() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

    emailjs.sendForm('service_5xtj7fq', 'template_b5higye', form.current, 'Mypk0k0hyGofc0cS2')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
        <div className='form-container'>
            <h1>Contact-me</h1>
            <p>
                If you would like to contact me please fill out the form below. I will get back to you as soon as possible.
            </p>
            <form ref={form} onSubmit={sendEmail}>
                <FormGroup>
                <Label for="name">Name</Label>
                <Input type="text" name="user_name" id="name" placeholder="Name" />
                </FormGroup>
                <FormGroup>
                <Label for="email">Email</Label>
                <Input type="email" name="user_email" id="email" placeholder="Email" />
                </FormGroup>
                <FormGroup>
                <Label for="message">Message</Label>
                <Input type="textarea" name="message" id="message" placeholder="Message" />
                </FormGroup>
                <Button>Submit</Button>
            </form>
        </div>
    );

}
export default ContactMe;