
import './About.css'; // Import CSS file
import images from '../src/Image/im.webp';
import Navbar from './Navbar';

const About = () => {
  return (
    <>
    <Navbar></Navbar>

    <div className="about-section">
      <div className="about-heading">About Us</div>
      <div className="about-content">
        <img src={images} alt="About Us" className="image" />
        <div className="about-text">
          <div className="container">
            <h2 className="section-title">Who We Are</h2>
            <p className="paragraph">
              Gro is guided by four principles: customer obsession rather than competitor focus, passion for invention, commitment to operational excellence, and long-term thinking. Amazon strives to be Earth’s most customer-centric company, Earth’s best employer, and Earth’s safest place to work. Customer reviews, 1-Click shopping, personalized recommendations, Prime, Fulfillment by Amazon, AWS, Kindle Direct Publishing, Kindle, Career Choice, Fire tablets, Fire TV, Amazon Echo, Alexa, Just Walk Out technology, Amazon Studios, and The Climate Pledge are some of the things pioneered by Amazon.
            </p>
            <h3 className="section-subtitle">Leadership Principles</h3>
            <p className="paragraph">
              Our Leadership Principles are more than inspirational wall hangings. The 16 principles guide our discussions and decisions every day.
            </p>
            <p className="paragraph">
              {/* <a href="#" className="link">Learn more</a> */}
            </p>
            <h3 className="section-subtitle">Awards and Recognition</h3>
            <p className="paragraph">
              We are honoured to be recognised for the work we do on behalf of our customers, employees, and communities every day.
            </p>
            <p className="paragraph">
              {/* <a href="#" className="link">Learn more</a> */}
            </p>
            <h3 className="section-subtitle">Facts About Gro</h3>
            <p className="paragraph">
              Facts about Gro, its employees, communities, and customers.
            </p>
            <p className="paragraph">
              {/* <a href="#" className="link">Learn more</a> */}
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default About;
