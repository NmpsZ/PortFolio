import { FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';

function Contact() {
  return (
    <div id="contact" className="flex justify-center space-x-6 mt-4 text-2xl">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
      <a href="https://github.com/NmpsZ" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
    </div>
  );
}

export default Contact;
