import React from "react";
import { AppendData } from "../../../types";
import Image from "../../../images/Headshot.jpg";
import "../../../css/Append.css";
import { Divider } from "@material-ui/core";

interface Props {
  data: AppendData;
  index: number;
}
const Card: React.FC<Props> = ({ data, index }) => {
  return (
    <div className="card-outline" style={{ borderColor: data.color }}>
      <div className="card-main">
        <div className="card-top">
          <img
            alt={data.title}
            src={require(`../../../images/Append/${index}.png`)}
            className="card-top-img"
          />
          <div className="card-top-text">
            <h1 className="card-top-title">{data.title}</h1>
            <p className="card-top-bio">
              <i>{data.bio}</i>
            </p>
          </div>
        </div>
        <div>
          <Divider />
          <h2 className="card-body-bio-title">bio</h2>
          <p className="card-body-main">
            {data.bio === "Tech Stack" ? (
              <div>
                <p style={{ textAlign: "left" }}>General</p>
                {data.general!.map((element: string, index: number) => (
                  <li key={index} className="bullet-points-general">
                    {element}
                  </li>
                ))}
                <p style={{ textAlign: "left" }}>Frontend</p>
                {data.frontend!.map((element: string, index: number) => (
                  <li key={index} className="bullet-points-general">
                    {element}
                  </li>
                ))}
                <p style={{ textAlign: "left" }}>Backend</p>
                {data.backend!.map((element: string, index: number) => (
                  <li key={index} className="bullet-points-general">
                    {element}
                  </li>
                ))}
              </div>
            ) : (
              data.body
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
