import React from "react";
import "../styles/alternative.css";
import Nav from "../Components/Nav";
import Footer from "./subpages/Footer";
import SubHeaders from "./subpages/SubHeaders";
import Carousel from "./subpages/Carousel";

function Alternatives() {
  return (
    <>
      <Nav />
      <SubHeaders
        header={"Alternative Investments"}
        description={
          "Dive into financial possibilities with our investment options – explore alternatives that redefine your wealth journey!"
        }
      />
      <div className="alt-wrapper">
        <div className="alt-header-p">
          <p>
            As trailblazers in alternative investment, Tradewave boasts a rich
            history of adeptly navigating the intricacies of such strategies.
            Employing long and short positions while carefully managing exposure
            to factors and asset classes, our alternative strategies are crafted
            to pursue returns in diverse market conditions.
            <br />
            <br />
            Choose from our absolute return strategies, designed for zero
            exposure to traditional markets either consistently or on average,
            or explore our total return strategies, maintaining some exposure to
            traditional markets.
          </p>
        </div>

        <div className="alt-infrastructural">
          <h2>Infrastructure</h2>
          <div className="alt-inf-writeup-wrapper">
            <div className="ins-header-img-wrapper">
              <img src="" alt="" />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              reiciendis inventore porro, fugiat doloribus accusantium, dolor
              eaque non nostrum voluptatum quis omnis eligendi facilis totam
              velit placeat officia alias tempora, voluptate voluptatibus esse
              repudiandae quia blanditiis! Vero nam facere, laborum aperiam
              provident perferendis, cum similique dignissimos, id quaerat
              maxime vitae!
            </p>
          </div>
        </div>

        <div className="alt-real-assets-wrapper">
          <h2>Lorem ipsum dolor sit amet.</h2>
          <h5>Lorem, ipsum.</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            consequatur dolor atque doloribus! Laborum dolorum adipisci
            blanditiis sit, quae fugit nostrum totam atque ad magni quia,
            deleniti in beatae eligendi optio nemo maiores, commodi error
            consectetur reiciendis ratione tempora iste? Asperiores alias
            delectus est consequatur corporis fugiat nam fuga dolorem?
          </p>
        </div>
        <Carousel />
      </div>
      <Footer />
    </>
  );
}

export default Alternatives;
