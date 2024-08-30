function Footer() {
  const currentYear = new Date().getFullYear();
  return <p className="footer">livenotices.com &copy; {currentYear}</p>;
}

export default Footer;
