import React from "react";
import * as Styles from "./styles"

const cards = [
  {
    img: "zika.png",
    url: "/zika",
    title: "Zika"
  },
  {
    img: "ebola.png",
    url: "/ebola",
    title: "Ebola"
  },
  {
    img: "lassa.png",
    url: "/lassa",
    title: "Lassa"
  },
  {
    img: "dengue.png",
    url: "/dengue",
    title: "Dengue"
  },
  {
    img: "seasonalinfluenza.png",
    url: "/flu/h3n2/ha/3y",
    title: "Seasonal Influenza"
  },
  {
    img: "avianinfluenza.png",
    url: "/avian/h7n9",
    title: "Avian Influenza"
  },
  {
    img: "mumps.jpg",
    url: "/mumps",
    title: "Mumps"
  },
  {
    img: "measles.png",
    url: "/measles",
    title: "Measles"
  }
];

export const generateTiles = () => (
  <div className="row">
    {cards.map((d) => (
      <div key={d.title}>
        <div className="col-sm-4">
          <Styles.CardOuter>
            <Styles.CardInner>
              <a href={`https://app.nextstrain.org${d.url}`}>
                <Styles.CardTitle>
                  {d.title}
                </Styles.CardTitle>
                <Styles.CardImg src={require(`../../../static/splash_images/${d.img}`)} alt={""} />
              </a>
            </Styles.CardInner>
          </Styles.CardOuter>
        </div>
      </div>
    ))}
  </div>
)