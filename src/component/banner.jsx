import banner from '../assets/banner.svg'
function Banner() {
   return (
    <div className="banner">
      <img
          srcSet={`${banner} 1x, ${banner} 2x`}
          src={banner}
          alt="banner-img"
          className="banner-img"
        />
    </div>
  );
}

export default Banner;
