



// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './Contact.css'; // Import CSS file

const Contact = () => {
  const [formData, setFormData] = useState({
    help: '',
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, you can send the formData to a backend API or perform any necessary actions
    console.log(formData);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <div className="contact-container" style={{ backgroundImage: `url('./image/two.jpeg')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <div className="title-bar">
          <h2>Contact Us</h2>
          <div className="blink-container">
            <div className="blinkit">HyperMarket</div>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="message">Query</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange}></textarea>
          </div>
          <div className="form-group">
            <button type="submit">Submit</button>
          </div>
        </form>
        <div className="not-robot">
          <label htmlFor="robotCheck">I am not a robot</label>
          <input type="checkbox" id="robotCheck" checked={isChecked} onChange={handleCheckboxChange} />
          <div className={`robot-background ${isChecked ? 'checked' : ''}`}></div>
        </div>
      </div>
      <footer>
        <p>#1 instant delivery service in India<br /><br /><br />Shop on the go and get anything delivered in minutes. Buy everything from groceries to fresh fruits & vegetables, cakes and bakery items, to meats & seafood, cosmetics, mobiles & accessories, electronics, baby care products and much more. We get it delivered at your doorstep in the fastest and the safest way possible.<br /><br /><br />Order thousands of products at just a tap - milk, eggs, bread, cooking oil, ghee, atta, rice, fresh fruits & vegetables, spices, chocolates, chips, biscuits, Maggi, cold drinks, shampoos, soaps, body wash, pet food, diapers, electronics, other organic and gourmet products from your neighbourhood stores and a lot more.<br />order online on HyperMarket to enjoy instant delivery magic.<br /></p>
      </footer>
    </>
  );
};

export default Contact;


