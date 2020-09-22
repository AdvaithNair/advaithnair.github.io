import React, { useEffect } from 'react';
import Dashboard from '../components/projects/Forrest/Dashboard';
import ResourcesBox from '../components/projects/Forrest/Resources';
import ForrestLogo from '../images/Forrest/Forrest.png';
import ForrestApp from '../images/Forrest/Forrest-app.png';

const Forrest: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.background = '#202020';
    if (document.getElementById('socials')) {
      document.getElementById('socials')!.style.color = 'white';
    }
    return () => {
      document.body.style.background = 'white';
      if (document.getElementById('socials')) {
        document.getElementById('socials')!.style.color = 'black';
      }
    };
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <img
        src={ForrestLogo}
        alt={'Forrest Logo'}
        className='project-landing'
      ></img>
      <Dashboard />
      <ResourcesBox />
      <img
        src={ForrestApp}
        alt={'Forrest App'}
        className={'project-landing'}
        style={{
          border: '3px solid',
          marginBottom: 10,
          marginTop: 40,
          width: '90%'
        }}
      ></img>
      <p className='text-center' style={{ color: 'white' }}>
        <i>Forrest Application Screenshot</i>
      </p>
    </div>
  );
};

export default Forrest;
