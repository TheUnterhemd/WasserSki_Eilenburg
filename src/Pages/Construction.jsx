import React from 'react'

const Construction = () => {

const picSize={
  height: "94.9vh",
}
const headline={
  "font-size": "5rem",
}

  return (
    <div>
  <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://www.warehouse-one.de/blog/wp-content/uploads/2017/05/15625201_223442954772221_8069898392727191552_n_002.jpg" className="d-block w-100" alt="..." style={picSize}/>
      <div className="carousel-caption d-none d-md-block">
        <p style={headline}>First slide label</p>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://www.unit-parktech.com/wp-content/uploads/2022/01/unit-parktech-08.jpg" className="d-block w-100" alt="..." style={picSize}/>
      <div className="carousel-caption d-none d-md-block">
        <p style={headline}>Second slide label</p>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://static.wixstatic.com/media/624bd4_1dc19f188913415ea7e5981285915c6c~mv2.jpg/v1/fill/w_560,h_366,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/sSBjuX8Sl20.jpg" className="d-block w-100" alt="..." style={picSize}/>
      <div className="carousel-caption d-none d-md-block">
        <p style={headline}>Third slide label</p>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Construction;