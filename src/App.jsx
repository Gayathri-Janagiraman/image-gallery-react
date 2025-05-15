import img1 from "./assets/images/img1.jpg";
import img2 from "./assets/images/img2.jpg";
import img3 from "./assets/images/img3.jpg";
import img4 from "./assets/images/img4.jpg";
import img5 from "./assets/images/img5.jpg";
import img6 from "./assets/images/img6.jpg";
import img7 from "./assets/images/img7.jpg";
import img8 from "./assets/images/img8.jpg";
import img9 from "./assets/images/img9.jpg";
import img10 from "./assets/images/img10.jpg";
import img11 from "./assets/images/img11.jpg";
import img12 from "./assets/images/img12.jpg";

function Images(props){
  return(
    <div className="img-container">
      <img src={props.img} alt={props.desc} style={{ width: "200px",height:"250px" }}></img>
      <p>{props.desc}</p>
    </div>
  )
}
var gallery=[
  { img: img1, desc: "Builder of dams" },
  { img: img2, desc: "Graceful and alert" },
  { img: img3, desc:  "Quick and curious"},
  { img: img4, desc: "Quiet and elegant" },
  { img: img5, desc: "Tall and gentle"},
  { img: img6, desc:  "Agile and independent" },
  { img: img7, desc: "Faithful friend" },
  { img: img8, desc:  "Loyal and playful"},
  { img: img9, desc: "Striped grazer" },
  { img: img10, desc: "Gentle hopper" },
  { img: img11, desc: "Fierce predator" },
  { img: img12, desc: "Majestic giant" },

];



function App() {
  return (
    <>
    <div className="header">
    <h1 className="title">Image Gallery</h1>
    <hr className="custom-hr"></hr>
    </div>
    <div className="gallery-container">
      {gallery.map((item, index) => (
        <Images key={index} img={item.img} desc={item.desc} />
      ))}
    </div>
    </>
  );
}
export default App


