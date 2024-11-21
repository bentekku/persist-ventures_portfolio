const Footer = () => {
  return (
    <footer
      className="text-gray-300 flex flex-col items-center justify-center space-y-3 py-4"
      aria-labelledby="footer-text"
    >
      <p
        id="footer-text"
        className="text-lg font-thin text-white/75"
        aria-label="Closing message"
      >
        Phir milte hai, Namaste{" "}
        <span
          className="text-white/90"
          role="img"
          aria-label="folded hands emoji"
        >
          🙏
        </span>
      </p>
      <p className="text-xs font-light text-gray-400 font-content">
        &copy;2024 All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
