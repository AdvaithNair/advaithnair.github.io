import React from "react";
import Socials from "./code/Socials";

const Footer: React.FC = () => {
  const email: string = "advaithnair2@gmail.com";
  const now: Date = new Date();
  return (
    <div>
      <div style={{width: '75%', margin: '0 auto'}}>
      <Socials />
      </div>
      <div className="footer">
        <p className="text-center">
          By Advaith Nair using ReactJS |{" "}
          <a style={{ color: "#7FDBFF" }} href={`mailto:${email}`}>
            {email}
          </a>{" "}
          | ©{now.getFullYear()} by Advaith Nair
        </p>
      </div>
    </div>
  );
};

export default Footer;
