import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import EditIcon from "@material-ui/icons/Edit";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { AgletData } from "../../../types";
import "../../../css/Aglet.css";

interface Props {
  data: AgletData;
  index: number;
}

const Listing: React.FC<Props> = ({ data, index }) => {
  return (
    <div className="item">
      <div className="content">
        <div className="primary-info">
          <div className="item-rank">
            <h1>{index}</h1>
          </div>
          <div className="item-info">
            <h1 className="item-name">{data.title}</h1>
            <h1 className="item-price">{data.price}</h1>
            <div className="clear"></div>
          </div>
          <div className="clear-primary"></div>
        </div>
        <div className="secondary-info">
          <div className="secondary-table">
            {data.title === "Stack?" ? (
              <div>
                <p>General</p>
                {data.general!.map((element: string, index: number) => (
                  <li key={index} className="bullet-points-general">
                    {element}
                  </li>
                ))}
                <p>Frontend</p>
                {data.frontend!.map((element: string, index: number) => (
                  <li key={index} className="bullet-points-general">
                    {element}
                  </li>
                ))}
                <p>Backend</p>
                {data.backend!.map((element: string, index: number) => (
                  <li key={index} className="bullet-points-general">
                    {element}
                  </li>
                ))}
              </div>
            ) : (
              data.body
            )}
          </div>
          <table className="button-array">
            <tbody>
              <tr>
                <td>
                  <div className="list-button">
                    <ExpandLessIcon
                      style={{ marginTop: 8, marginLeft: 8 }}
                      className="in-button"
                    />
                  </div>
                </td>
                <td>
                  <div id="edit" className="list-button">
                    <EditIcon
                      style={{ marginTop: 8, marginLeft: 8 }}
                      className="in-button"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="list-button">
                    <ExpandMoreIcon
                      style={{ marginTop: 8, marginLeft: 8 }}
                      className="in-button"
                    />
                  </div>
                </td>
                <td>
                  <div className="list-button">
                    <CloseIcon
                      style={{ marginTop: 8, marginLeft: 8 }}
                      className="in-button"
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="clear"></div>
        </div>
      </div>
    </div>
  );
};

export default Listing;
