import banner from '../assets/banner.svg'
function Banner() {
   return (
    <div className="banner">
      <div className="banner-sec-one">

      <img
          srcSet={`${banner} 1x, ${banner} 2x`}
          src={banner}
          alt="banner-img"
          className="banner-img"
        />
     
      </div>
      <div className="banner-sec-two">
      <p className="banner-slogan">
          We give your regular shopping a healthy spin.
        </p>
      </div>
    </div>
  );
}

export default Banner;
