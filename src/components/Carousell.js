
let Carousel =()=>{
    return(
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img style={{height:"60vh"}} src="https://img.freepik.com/premium-psd/black-friday-sale-social-media-post-instagram-post-web-banner-facebook-cover-template_220443-1074.jpg" className="d-block w-100" alt="..." width="100%" height="60vh" />
    </div>
    <div className="carousel-item">
      <img style={{height:"60vh"}} src="https://cdn3.vectorstock.com/i/1000x1000/91/77/e-commerce-banner-set-vector-4199177.jpg" className="d-block w-100" alt="..." width="100%" height="60vh" />
    </div>
    <div className="carousel-item">
      <img style={{height:"60vh"}} src="https://img.freepik.com/free-vector/online-shopping-template-banner_23-2148795108.jpg" className="d-block w-100" alt="..." width="100%" height="60vh"    />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  
 )   
  
}
export default Carousel