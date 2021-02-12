import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
          alt="banner"
        />
        <div className="home__row">
          <Product
            id="4987635"
            title="The lean startup"
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
            price={29.99}
            rating={5}
          />
          <Product
            id="1726367"
            title="Computer tv screen with mouse"
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg"
            price={39.7}
            rating={2}
          />
        </div>
        <div className="home__row">
          <Product
            id="3728732"
            title="Teddy bear headset and music combo"
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_Dash_PD_Nonprime__1x._SY304_CB403084762_.jpg"
            price={12.32}
            rating={3}
          />
          <Product
            id="873789"
            title="Boring and plain vanilla tv and tv stand"
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY304_CB432517900_.jpg"
            price={200}
            rating={5}
          />
          <Product
            id="1736783"
            title="Yoga mat and gym equiptment"
            image="https://images-na.ssl-images-amazon.com/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_1x._SY304_CB434924743_.jpg"
            price={12}
            rating={2}
          />
        </div>
        <div className="home__row">
          <Product
            id="8367921"
            title="Lamp and laptop combo"
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Laptops_379x304_1X_en_US._SY304_CB418608471_.jpg"
            price={12}
            rating={1}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
