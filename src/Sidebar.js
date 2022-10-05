import FlagRounded from '@mui/icons-material/FlagRounded'
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import SmartDisplayRoundedIcon from '@mui/icons-material/SmartDisplayRounded';
import LocalPharmacyRoundedIcon from '@mui/icons-material/LocalPharmacyRounded';
import React from 'react'
import "./Sidebar.css"
import SidebarRow from './SidebarRow'
import PersonalBanner from './PersonalBanner';
import { Avatar } from '@mui/material';
import { useStateValue } from "./StateProvider";

function Sidebar() {
  const [{user}, dispatch] = useStateValue();
  return (
    <div className='sidebar'>
      <div className='sidebar__user__field'>
        <Avatar src={user.photoURL}/>
          <h4>{user.displayName}</h4>
          </div>
        <SidebarRow Icon={LocalPharmacyRoundedIcon} title="COVID-19 Information"/>
        <SidebarRow Icon={FlagRounded} title="Pages"/>
        <SidebarRow Icon={PeopleRoundedIcon} title="Friends"/>
        <SidebarRow Icon={MessageRoundedIcon} title="Massenger"/>
        <SidebarRow Icon={AddShoppingCartRoundedIcon} title="Marketplace"/>
        <SidebarRow Icon={SmartDisplayRoundedIcon} title="Videos"/>
        <PersonalBanner/>
    </div>
  )
}

export default Sidebar