const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;

  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>We're currently open</p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <p>
          Sorry, we're closed. Try again from {openHour}:00 to {closeHour}:00
        </p>
      )}
    </footer>
  );
};

export default Footer;
