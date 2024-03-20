import React, { useState } from 'react'

export default function About(props) {

  let myStyle = {
    color: props.mode ==='dark'?'white':'black',
    backgroundColor: props.mode ==='dark'?'rgb(15 60 110)':'white'
  }
//   const [myStyle, setMyStyle] = useState({
//     color: 'black',
//     backgroundColor: 'white'
//   })

  return (
    <>
    <div className="container my-2" style={{color: props.mode ==='dark'?'white':'black'}}>
        <h1>About Us</h1>
    </div>
    <div className="container my-2" style={myStyle}>
        <div id="carouselExampleRide" className="carousel slide carousel-fade" data-bs-ride="true">
        <div className="carousel-inner">
            <div className="container carousel-item active">
                <div className="container float-start w-50">
                    <img src="1.jpg" className="container" alt="Glacier"/>
                </div>
                <div className="container float-end w-50">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis harum itaque delectus animi quia. A fugiat vero cupiditate in laborum at, illum, exercitationem, impedit quod eveniet quo nemo commodi necessitatibus.
                </div>
            </div>
            <div className="container carousel-item">
                <div className="container float-end w-50">
                    <img src="2.jpg" className="container" alt="Sunrise"/>
                </div>
                <div className="container float-start w-50">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis optio placeat ratione earum ipsa alias odit, voluptatum molestiae, ducimus impedit quia ea provident rerum, quaerat eaque? Labore error soluta praesentium?
                </div>
            </div>
            <div className="container carousel-item">
                <div className="container float-start w-50">
                    <img src="3.jpg" className="container" alt="Beach"/>
                </div>
                <div className="container float-end w-50">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis harum itaque delectus animi quia. A fugiat vero cupiditate in laborum at, illum, exercitationem, impedit quod eveniet quo nemo commodi necessitatibus.
                </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>
        {/* <div className="container my-3">
            <button onClick={toggleStyle} type="button" className="btn btn-primary">{btnText}</button>
        </div> */}
    </div>
    </>
  )
}
