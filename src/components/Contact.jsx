import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import "../Styles/Contact.css";


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mrbnfyl",
        "template_c7llqwa",
        form.current,
        "-mA_9dBfnp7pjv0PD"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section className="Card_Styles">
      <form ref={form} className="form-Conrtol" onSubmit={sendEmail}>
      <Card  className="Card">
<CardContent>
<Typography  variant="h5" component="div">
  Contact Us
  </Typography><br/>
  <Typography variant="h5" component="div">
  <TextField id="outlined-basic" label="Full Name" variant="outlined" name="user_name" />
  </Typography>
  <Typography variant="h5" component="div"><br/>
  <TextField id="outlined-basic" label="Email" variant="outlined" name="user_email" />
  </Typography>
  <Typography variant="h5" component="div"><br/>
  <TextField id="outlined-basic" label="Subject" variant="outlined" name="subject" />
  </Typography><br />
  <textarea className="textarea" name="message" cols="30" rows="10"></textarea>
</CardContent>
<Button className="send_Massage" size="large" type="submit">Send Massage</Button>
  
</Card>
</form>
    </section>
  );
};

export default Contact;


