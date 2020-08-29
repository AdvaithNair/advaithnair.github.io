import React, { useState, useContext } from "react";
import { RantData } from "../../../types";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ChatIcon from "@material-ui/icons/Chat";
import LockIcon from "@material-ui/icons/Lock";
import ProfilePicture from "../../../images/Headshot.jpg";
import "../../../css/RANT.css";

// Time Formatting
import { formatDate, formatTime, formatRelative } from "../../../utils";

// Props
interface Props {
  data: RantData;
}

export const Post: React.FC<Props> = ({ data }) => {
  const [liked, setLiked] = useState<boolean>(true);

  // Liked Componenets
  const isLiked: JSX.Element = (
    <FavoriteIcon style={{ color: "#F012BE", fontSize: "30" }} />
  );
  const notLiked: JSX.Element = (
    <FavoriteBorderIcon style={{ color: "#F012BE", fontSize: "30" }} />
  );

  // Toggles Like
  const toggleLike = (event: any) => {
    event.stopPropagation();
    setLiked(!liked);
    liked ? data.likeCount-- : data.likeCount++;
  };

  return (
    <div className="rant-body">
      <div style={{ maxWidth: "1200px" }}>
        <div className="rant-title">
          {data.isPrivate && (
            <LockIcon
              style={{
                color: "white",
                fontSize: "40px",
                marginLeft: "10px",
                marginTop: "10px",
                marginRight: "-10px"
              }}
            />
          )}
          <div className="rant-title-text">
            <h1 style={{ marginTop: 20 }}>{data.title}</h1>
          </div>
        </div>
        <div className="rant-content-body">
          <div className="rant-credits">
            <div className="rant-credits-main">
              <div className="rant-credits-img">
                <img alt={"advaithnair"} src={ProfilePicture}></img>
              </div>
              <div className="rant-credits-info">
                <div>
                  <h2 className="rant-user-name">{"Advaith Nair"}</h2>
                  <h3 className="user-handle-hover">@{"advaithnair"}</h3>
                </div>
                <p>
                  <u>{formatRelative(data.createdAt)}</u>
                </p>
              </div>
            </div>
            <div className="rant-credits-date">
              <h3>Created</h3>
              <p>{formatDate(data.createdAt)}</p>
              <p>{formatTime(data.createdAt)}</p>
              <p></p>
            </div>
          </div>
          <div className="rant-content">
            {data.body
              .split("\\\\n")
              .map((item: string, i: any) =>
                item.startsWith("XX") ? (
                  <li key={i} style={{marginLeft: 20}}>{item.substring(2)}</li>
                ) : (
                  <p key={i}>{item}</p>
                )
              )}
            <div className="rant-info">
              <span style={{ marginRight: "0px" }} onClick={toggleLike}>
                {liked ? isLiked : notLiked}
              </span>
              <span>{data.likeCount}</span>
              <ChatIcon style={{ color: "#39CCCC", fontSize: "30" }} />
              <span>{data.commentCount}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
