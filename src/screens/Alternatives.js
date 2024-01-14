import React from "react";
import "../styles/alternative.css";
import Nav from "../Components/Nav";
import Footer from "./subpages/Footer";
import SubHeaders from "./subpages/SubHeaders";

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
      </div>
      <Footer />
    </>
  );
}

export default Alternatives;
