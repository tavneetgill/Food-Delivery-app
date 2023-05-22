import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap
} from './SidebarElements';



const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to='/Accounts'>Login/Signup</SidebarLink>
        <SidebarLink to='/Admin'>Admin</SidebarLink>
        <SidebarLink to='/Contact'>Contact</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to='/orderOnline'>Order Now</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
