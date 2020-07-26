import React from "react";

const Footer: React.FC = () => {
  const email: string = "advaithnair2@gmail.com";
  const now: Date = new Date();
  return (
    <div className="footer">
      <p className="text-center">
        By Advaith Nair using ReactJS |{" "}
        <a style={{ color: "#7FDBFF" }} href={`mailto:${email}`}>
          {email}
        </a>{" "}
        | ©{now.getFullYear()} by Advaith Nair
      </p>
    </div>
  );
};

export default Footer;
