import * as React from 'react';
import { Dropdown } from '@mui/base/Dropdown';
import { Menu } from '@mui/base/Menu';
import { MenuButton } from '@mui/base/MenuButton';
import { MenuItem, menuItemClasses } from '@mui/base/MenuItem';
import { styled } from '@mui/system';

import AccountBoxIcon from '@mui/icons-material/AccountBox';

import {AuthContext} from "../../context/authContext"
import { useContext } from "react"

import { Link } from 'react-router-dom';

export default function MenuSimple() {
  const createHandleMenuClick = (menuItem) => {
    return () => {
      console.log(`Clicked on ${menuItem}`);
    };
  };

  const {session , handleLogout}=useContext(AuthContext)


  return (
    <Dropdown>

      <TriggerButton>

        <div><AccountBoxIcon/>
            </div>

      </TriggerButton>

      <Menu slots={{ listbox: StyledListbox }}>

        <StyledMenuItem onClick={createHandleMenuClick('Profile')}>
          <Link to="/Profile">
          Profile
          </Link>
        </StyledMenuItem>

        {/* <StyledMenuItem onClick={createHandleMenuClick('Reading Challenge')}>
          Reading Challenge
        </StyledMenuItem>

        <StyledMenuItem onClick={createHandleMenuClick('BookBuddy')}>
          BookBuddy
        </StyledMenuItem> */}

        <StyledMenuItem onClick={createHandleMenuClick('Settings')}>
          Settings
        </StyledMenuItem>

        <StyledMenuItem onClick={createHandleMenuClick('Help')}>
          Help
        </StyledMenuItem>
        
        <StyledMenuItem onClick={handleLogout}>
          LogOut
        </StyledMenuItem>

      </Menu>
    </Dropdown>
  );
}

const blue = {
  50: '#F0F7FF',
  100: '#DAECFF',
  200: '#99CCF3',
  300: '#66B2FF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  900: '#003A75',
};

const grey = {
  50: '#f6f8fa',
  100: '#eaeef2',
  200: '#d0d7de',
  300: '#afb8c1',
  400: '#8c959f',
  500: '#6e7781',
  600: '#57606a',
  700: '#424a53',
  800: '#32383f',
  900: '#24292f',
};

const StyledListbox = styled('ul')(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 6px;
  margin: 12px 0;
  min-width: 200px;
  border-radius: 12px;
  overflow: auto;
  outline: 0px;
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  box-shadow: 0px 2px 16px ${theme.palette.mode === 'dark' ? grey[900] : grey[200]};
  z-index: 1;
  `,
);

const StyledMenuItem = styled(MenuItem)(
  ({ theme }) => `
  list-style: none;
  padding: 8px;
  border-radius: 8px;
  cursor: default;
  user-select: none;

  &:last-of-type {
    border-bottom: none;
  }

  &.${menuItemClasses.focusVisible} {
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  }

  &.${menuItemClasses.disabled} {
    color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
  }

  &:hover:not(.${menuItemClasses.disabled}) {
    background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  }
  `,
);

const TriggerButton = styled(MenuButton)(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 8px 16px;
  line-height: 1.5;
  background: transparent;
  border: none;
  cursor: pointer;

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;

  
  &:focus-visible {
    border-color: ${blue[400]};
    outline: 3px solid ${theme.palette.mode === 'dark' ? blue[500] : blue[200]};
  }
  `,
);