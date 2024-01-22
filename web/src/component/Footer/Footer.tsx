import "./FooterStyles.css";

export const Footer = () => {
  return (
    <div className="footer">

      <div className="bottom">
        <div>
          <h4>Project</h4>
          <a href="/">Status</a>
          <a href="/">License</a>
        </div>
        <div>
          <h4>Community</h4>
          <a href="/">Projects</a>
          <a href="/">Twitter</a>
        </div>
        <div>
          <h4>Help</h4>
          <a href="/">Support</a>
          <a href="/">Contact Us</a>
        </div>
        <div>
          <h4>Others</h4>
          <a href="/">Terms of Service</a>
          <a href="/">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;