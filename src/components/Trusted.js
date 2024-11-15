import './trusted.css';
const Trusted = ({...props}) => {
    const images = [
        '/images/google.png',
        '/images/mbc.png',
        '/images/microsoft-logo-v1.png',
        '/images/new-balance.png',
        '/images/nvidia-logo.png',
        '/images/pentagram.png',
        '/images/publicis-logo.png',
        '/images/r-ga.png',
      ];
  return (
    <section id='trusted' className={props.className}>
      <div className='flex flex-col justify-center items-center pb-10'>
      <div className={props.text_classes}>{props.text}</div>
        <div className="marquee-container md:w-[70%] w-90% pt-5">
      <div className="marquee">
        {images.map((src, index) => (
          <img key={index} src={process.env.PUBLIC_URL + src} alt={`group${index + 1}`} className="marquee-item" />
        ))}
        {images.map((src, index) => (
          <img key={index + images.length} src={process.env.PUBLIC_URL + src} alt={`group${index + 1}`} className="marquee-item" />
        ))}
      </div>
    </div>
      </div>
    </section>
  );
};
export default Trusted;
