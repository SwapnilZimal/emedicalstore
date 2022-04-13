import React, { useState } from 'react';
import FAQHeader from './FAQHeader';
import Navigation from "../../components/Navigation";
import FAQ from './FAQ';
import './FAQindex.css';

function FAQs () {
  const [faqs, setfaqs] = useState([

    {
      question: 'Are medications available at FindMeds.com safe?',
      answer: ' Yes. The medications that you purchase at our pharmacy are of the highest quality. The prescription medications we provide are procured from world-class and well-recognised pharmaceutical companies such as GlaxoSmithKline, Pfizer, Wyeth, Merck, Ranbaxy, Dr. Reddy’s, Nicholas Piramal, Sun Pharmacy and other global industry giants. They are manufactured under government supervision, prepackaged in factory-sealed blister packs and untouched by human hands.',
      open: false
    },
    {
      question: ' What information do you need from me to process my order as fast as possible?',
      answer: 'In order to process your order quickly, we need Your billing/shipping information, your prescription(required for the order of Prescription medicines), your payment details.',
      open: false
    },
    {
      question: 'How do I register?',
      answer: 'You can register by clicking on the “Sign Up” link at the top right corner of the homepage. Please provide the information in the form that appears. You can review the terms and conditions, provide your payment mode details and submit the registration information.',
      open: false
    },

    {
      question: 'Are there any other hidden charges?',
      answer: 'No. There are no hidden charges in any of our products',
      open: false
    },

    {
      question: 'Are all your product prices quoted in Indian Rupees?',
      answer: 'Yes, all product prices quoted in our website are in Indian Rupees.',
      open: false
    },

    {
      question: 'Does Findmeds.com deliver products to any location in India?',
      answer: 'Yes, we do deliver our products to any address in India.',
      open: false
    },

    {
      question: 'How do I reach Customer Service?',
      answer: 'Customer service is available by phone, at 9876543210, by email to dac.iacsdakurdi@gmail.com, by opening the Contact Us form on the web site. If you choose to call by phone, our intelligent Interactive Voice Response will be able to answer many of your questions without waiting for a live agent. Likewise, a chat session may be handled by Neddy, our smart bot, which can also answer most of your order related questions. Email will be replied to within 12 hours.',
      open: false
    }

  ]);

  const toggleFAQ = index => {
    setfaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open
      } else {
        faq.open = false;
      }

      return faq;
    }))
  }


  return (
    <div className="App">
      <Navigation/>
      <div className="faqs">
      <FAQHeader/>
      <br/>
        {faqs.map((faq, i) => (
          <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
}

export default FAQs;