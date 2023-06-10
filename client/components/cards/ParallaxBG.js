const ParallaxBG = ({ url, children = "" }) => {
  return (
    <div
      className="container-fluid"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(" + url + ")",
        backgroundAttachment: "fixed",
        padding: "100px 0px 75px 0px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        display: "block",
      }}
    >
      {/* <h1 className="display-1 font-weight-bold text-center">{children}</h1> */}
     
      <div className="d-flex justify-content-center align-items-center" style={{ position: 'relative' }}>
  <img
    src="https://res.cloudinary.com/dgsgi8g9f/image/upload/v1686428427/GETlinkup1-removebg_aog8nc.png"
    style={{ height: '250px' }}
    alt="background"
    className="img-fluid"
  />

</div>
  
    </div>
  );
};

export default ParallaxBG;
