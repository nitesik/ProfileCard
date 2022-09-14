import "./styles.css"
import image from "./images/image-victor.jpg";

function Home() {

  return (
    <div className="container">
        <div className="background"></div>
        <div className="text">
          <div className="name"><span className="bold">Victor Crest</span> 26</div>
          <div>London</div>
        </div>
        <div>
        <div className="stats">
            <div>
              <div className="bold">80K</div>
              <div>Followers</div>
            </div>
            <div>
              <div className="bold">803K</div>
              <div>Likes</div>
            </div>
            <div>
              <div className="bold">1.4K</div>
              <div>Photos</div>
            </div>
          </div>
        </div>
        <div className="image">
          <div className="inner">
            <img src={image} alt="Profile Picture"/>
          </div>
        </div>
    </div>
  )
}

export default Home;