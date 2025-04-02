import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav>
        <div className="logo">Logo</div>
        <div className="context">
          <img src="menu.png" alt="Menu Icon" height="25px" width="25px" style={{ marginTop: '10px' }} />
        </div>
      </nav>

      <header>
        <div className="head">
          <div className="write">
            <h1 className="maintitle">New Cocktail</h1>
            <h3 className="subhead">Hoodies</h3>
            <p className="par">
              A hoodie is a type of sweatshirt with a hood that, when worn up, covers most of the head and neck, and
              sometimes the face. One of the best things about hoodies is that they are perfect for layering!
            </p>
          </div>
          <div className="img">
            <img
              src="oswaldo-ibanez-1NPUmTaiMeg-unsplash.jpg"
              alt="Hoodie Display"
              width="386"
              height="406"
            />
          </div>
        </div>
        <div className="butt">
          <button className="shopnow">Shop Now</button>
          <button className="off">50% OFF</button>
        </div>
      </header>

      <section className="container">
        <img
          className="sec"
          src="gesphotoss-1i9K55ni5Dk-unsplash.jpg"
          alt="Summer Sale"
          width="386"
          height="406"
        />
        <h1>Summer Sell</h1>
        <h3>Offer</h3>
        <p>
          A hoodie is a type of sweatshirt with a hood that, when worn up, covers most of the head and neck, and
          sometimes the face.
        </p>
        <br />
        <button className="butto">Learn more</button>
      </section>

      <section className="section2">
        <h1 className="mml">OUR PRODUCTS</h1>
        <div className="A1">
          <button className="newarraivals">NEW ARRIVALS</button>
          <button className="toprating">TOP RATINGS</button>
          <button className="bestseller">BEST SELLER</button>
        </div>

        <div className="a2">
          <div className="im1">
            <img src="1.png" className="se2im1" alt="Red Hoodie" />
            <h5>
              Red Hoodie
              <br />
              $52.00
            </h5>
            <a href="#">View products</a>
          </div>

          <div className="im2">
            <img src="2.png" className="se2im2" alt="Black Hoodie" />
            <h5>
              Black Hoodie
              <br />
              $52.00
            </h5>
            <a href="#">View products</a>
          </div>

          <div className="im3">
            <img src="3.png" className="se2im3" alt="Green Hoodie" />
            <h5>
              Green Hoodie
              <br />
              $52.00
            </h5>
            <a href="#">View products</a>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
