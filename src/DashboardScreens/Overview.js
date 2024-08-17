import React from "react";
import "./styles/overview.css";
import TradeCustomWidget from "./SubComponent/TradeCustomWidget";

function Overview() {
  return (
    <div className="overview-main-container">
      <div className="overview-content-wrapper">
        <div className="overview-widget-wrapper">
          <div className="overview-widget">
            <TradeCustomWidget />
          </div>
        </div>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          culpa similique, ratione expedita provident aut dicta molestias
          debitis fuga praesentium soluta, quam cupiditate quos maxime eligendi
          voluptas sit eum accusamus sapiente tempora error? Fugiat laborum
          numquam molestiae dolorum, debitis, cum odit, suscipit enim qui vero
          reprehenderit porro! Voluptates nesciunt est sit harum! Praesentium ab
          commodi unde aspernatur. Doloribus officia dolore libero numquam,
          repellendus enim impedit officiis necessitatibus ex possimus nobis
          facilis harum, unde deserunt veniam maxime exercitationem rem, ipsam
          in aperiam illo architecto. Veritatis tempore, sunt fuga fugit
          laudantium alias deleniti earum unde sequi ea rem architecto
          asperiores non dolore reprehenderit similique perspiciatis hic. Sequi
          nulla autem qui adipisci voluptas ipsa commodi doloremque
          necessitatibus error soluta sit iste facere corporis eaque consequatur
          ea minima blanditiis ducimus, dolores velit? Mollitia porro eaque,
          maxime omnis corrupti repellendus. Mollitia, facilis eveniet! Natus
          asperiores cumque qui at, ut tempore? Enim culpa optio natus corporis.
        </p>
      </div>
    </div>
  );
}

export default Overview;
