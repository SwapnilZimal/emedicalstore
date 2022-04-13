import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Container } from "react-bootstrap";

const ContactUsScreen = () => {
  return (
    <div>
      <Navigation />

      <div className="main1">
        <header>
          {" "}
          <h1> Reach Us At </h1>
        </header>

        <br />
        <br />
        <h5 align="justify"> <i class="fa fa-envelope-o" aria-hidden="true"></i> Email : dac.iacsdakurdi@gmail.com</h5>
        <h5 align="justify"> <i class="fa fa-mobile" aria-hidden="true"></i> Contact No : +919876543210</h5>
        <h5 align="justify"> <i class="fa fa-map-marker" aria-hidden="true"></i>
         Our location: Sector No. 29, Behind Akurdi Railway Station,,
         Pradhikaran Nigdi, Akurdi, Pune 411044, Pune, Maharashtra 411044
        </h5>
      </div>
      <b></b>
      
    </div>
  );
};
export default ContactUsScreen;
