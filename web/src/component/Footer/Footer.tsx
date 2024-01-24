import "./FooterStyles.css";

export const Footer = () => {
  return (
    <div className="footer">

      <div className="bottom">
        <div>
          <h4>Wykonanie</h4>
          <a href="/">Status</a>
          <a href="/">Licencja</a>
        </div>
        <div>
          <h4>Społeczność</h4>
          <a href="/">Facebook</a>
          <a href="/">Instagram</a>
        </div>
        <div>
          <h4>Pomoc</h4>
          <a href="/">Support</a>
          <a href="/">Kontakt</a>
        </div>
        <div>
          <h4>Inne</h4>
          <a href="/">Warunki użytkowania</a>
          <a href="/">Warunki prywatności</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;