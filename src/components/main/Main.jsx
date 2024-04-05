import PromoHeader from "./PromoHeader";
import Brands from "./Brands";
import Collection from "./Collection";
import PromoMain from "./PromoMain";
import PromoFooter from "./PromoFooter";
import Community from "./Community";
import card_01Img from "../../graphics/collection/card_01.jpg";
import card_02Img from "../../graphics/collection/card_02.jpg";
import card_03Img from "../../graphics/collection/card_03.jpg";
import card_04Img from "../../graphics/collection/card_04.jpg";
import card_05Img from "../../graphics/collection/card_05.jpg";

import styles from "./Main.module.css";

const Main = () => {
  return (
    <main>
      <PromoHeader />
      <Brands />
      <Collection
        title="NEW ARRIVALS"
        cards={[
          {
            image: card_01Img,
            text: "Hoodies & Sweetshirt",
            slogan: "Explore Now!",
          },
          {
            image: card_02Img,
            text: "Coats & Parkas",
            slogan: "Explore Now!",
          },
          {
            image: card_03Img,
            text: "Tees & T-Shirt",
            slogan: "Explore Now!",
          },
        ]}
      />
      <PromoMain />
      <Collection
        title="Young’s Favourite"
        cards={[
          {
            image: card_04Img,
            text: "Trending on instagram",
            slogan: "Explore Now!",
          },
          {
            image: card_05Img,
            text: "All Under $40",
            slogan: "Explore Now!",
          },
        ]}
      />
      <PromoFooter />
      <Community />
    </main>
  );
};

export default Main;
