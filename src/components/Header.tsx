import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { useLocation } from 'react-router-dom';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Popover from '@material-ui/core/Popover';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { openLink } from '../types';

interface Props {
  title: string;
  logo: any;
  tabs: Array<string>;
}

const Header: React.FC<Props> = ({ title, logo, tabs }) => {
  const history = useHistory();
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [current, setCurrent] = useState<string>(
    location.pathname.substring(1).split('/')[0]
  );

  useEffect(() => {
    const pathString: string = location.pathname.substring(1).split('/')[0];
    if (pathString)
      document.getElementById(pathString)!.style.color = '#1677CB';
  }, [location.pathname]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleTab = (item: string) => {
    history.push(`/${item}`);
    if (current !== item && current !== '')
      document.getElementById(current)!.style.color = 'black';
    document.getElementById(item)!.style.color = '#1677CB';
    setCurrent(item);
    setAnchorEl(null);
  };

  const handleHome = () => {
    history.push('/');
    if (document.getElementById(current))
      document.getElementById(current)!.style.color = 'black';
  };

  return (
    <div className='art-header' style={{ backgroundColor: 'white' }}>
      <div className='art-header-content'>
        <div onClick={handleHome}>
          <Tooltip title='Home'>
            <img className='art-header-img' src={logo} alt='Advaith Nair' />
          </Tooltip>
        </div>
        <h1
          className='pointer'
          onClick={() => openLink('https://advaithnair.com')}
        >
          {title}
        </h1>
        <div className='art-nav'>
          <div className='art-mobile'>
            <IconButton style={{ color: 'black' }} onClick={handleClick}>
              <MenuIcon style={{ fontSize: 40 }} />
            </IconButton>
          </div>
          <div className='art-nav-items'>
            {tabs.map((item: string, index: number) => (
              <a id={item} key={index} onClick={() => handleTab(item)}>
                {item}
              </a>
            ))}
          </div>
          <Popover
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
          >
            <ClickAwayListener onClickAway={handleClose}>
              <div className='art-mobile-items'>
                {tabs.map((item: string, index: number) => (
                  <a id={item} key={index} onClick={() => handleTab(item)}>
                    {item}
                  </a>
                ))}
              </div>
            </ClickAwayListener>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default Header;
