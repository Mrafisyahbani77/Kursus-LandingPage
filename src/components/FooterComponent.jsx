import { FaInstagram, FaYoutube } from 'react-icons/fa'; // Impor ikon font-awesome


const FooterComponent = () => {
  return (
    <div>
      <section></section>
      <footer><div className="social-icons">
      <a href="https://www.instagram.com/your_instagram" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
      <a href="https://www.youtube.com/channel/UCRaiF6bEwBbK8GVlMAe5I-Q" target="_blank" rel="noopener noreferrer">
        <FaYoutube />
      </a>
    </div></footer>
      </div>
  
  )
}

export default FooterComponent