import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h2>Powerfull Fitness</h2>
          <p>Train with power, live with passion.</p>
        </div>
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#classes">Classes</a>
          <a href="#contact">Contact</a>
          <a href="#trainers">Trainers</a>
        </div>
        <div className="footer-socials">
          <a href="#"><i className="fab fa-facebook-f" /></a>
          <a href="#"><i className="fab fa-twitter" /></a>
          <a href="#"><i className="fab fa-instagram" /></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Powerfull Fitness. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
