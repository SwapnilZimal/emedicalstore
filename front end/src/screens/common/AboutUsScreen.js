import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

const AboutUsScreen = () => {
  return (
    <div>
      <Navigation />
      
      <div className="main1">
        <header>
			<h1>About Us</h1>
		</header>
        <br/>
        <br/>
        <h4>Who we are</h4>
        <p align="justify">
          FindMeds brings to you an online platform, which can be accessed for
          all your health needs. We are trying to make healthcare a hassle-free
          experience for you. Get your allopathic, ayurvedic, homeopathic
          medicines, vitamins & nutrition supplements and other health-related
          products delivered at home. Lab tests? That too in the comfort of your
          home. Doctor consult? Yes, we got that covered too.
        </p>

        <h4>Convinience</h4>
        <p align="justify">
          Heavy traffic, lack of parking, monsoons, shop closed, forgetfulness…
          these are some of the reasons that could lead to skipping of vital
          medications. Since taking medicines regularly is a critical component
          of managing chronic medical conditions, it’s best not to run out of
          essential medicines. Just log on to netmeds.com, place your order
          online and have your medicines delivered to you – without leaving the
          comfort of your home. What’s more, with easy access to reliable drug
          information, you get to know all about your medicine at netmeds.com,
          and once you’re a Netmeds customer, you’ll get regular refill
          reminders, so you’ll never again come up short of medicines.
        </p>

        <h4>One-Stop-Shop</h4>
        <p align="justify">
          We not only provide you with a wide range of medicines
          listed under various categories, we also offer a wide choice of OTC
          products including wellness products, vitamins, diet/fitness
          supplements, herbal products, pain relievers, diabetic care kits,
          baby/mother care products, beauty care products and surgical supplies.
        </p>
      </div>
    </div>
  );
};
export default AboutUsScreen;
