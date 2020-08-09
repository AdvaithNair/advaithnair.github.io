import React from "react";
import Welcome from '../images/Welcome.png';
import welcome from '../content/welcome.json';
import { openLink } from "../types";

const Home: React.FC = () => {
  return (
    <div>
      <div className="name-intro">
        <h1 className="text-center">
          ADVAITH
          <br />
          NAIR
        </h1>
      </div>
      <h1 className="text-center">WELCOME</h1>
      <div className="flex-container">
        <div className="welcome-box">
            <img src={Welcome} alt="Advaith On A Tree" className='welcome-image'/>
        </div>
        <div className="welcome-box">
            <h2 className="text-center" style={{ margin: '10px 0px' }}>{welcome.title}</h2>
            <p>{welcome.bio}</p>
            {welcome.list.map((element: string, index: number) => (
              <li key={index}>{element}</li>
            ))}
            <p>{welcome.message}</p>
            <div className='button' onClick={() => openLink("https://advaithnair.com")}>Main Website</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
