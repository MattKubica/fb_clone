import React from "react";
import "./Header.css"
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import FlagRoundedIcon from '@mui/icons-material/FlagRounded';
import SubscriptionsRoundedIcon from '@mui/icons-material/SubscriptionsRounded';
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import PublicRoundedIcon from '@mui/icons-material/PublicRounded';
import { IconButton } from "@mui/material"
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import NotificationImportantRoundedIcon from '@mui/icons-material/NotificationImportantRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import SidebarRow from "./SidebarRow";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import Profile from "./Profile";


function Header(){
    return<div className="header">
    <div className="header__left">
        <div className="header__logo">
        <SidebarRow Icon={FacebookRoundedIcon}/>
        </div>
        <div className="header__input">
            <SearchRoundedIcon />
            <input className="header__search" placeholder="Search Facebook" type="text"/>
        </div>
    </div>
    <div className="header__middle">
        <div className="header__option
        header__option--active">
         <HomeRoundedIcon/>
        </div>
        <div className="header__option">
         <FlagRoundedIcon/>
        </div>
        <div className="header__option">
         <SubscriptionsRoundedIcon/>
        </div>
        <div className="header__option">
         <AddShoppingCartRoundedIcon/>
        </div>
        <div className="header__option">
         <PublicRoundedIcon/>
        </div>
    </div>
    <div className="header__right">
        <div className="header__info">
        <Profile/>
        </div>

        <IconButton>
            <AddRoundedIcon/>
        </IconButton>
        <IconButton>
            <ForumRoundedIcon/>
        </IconButton>
        <IconButton>
            <NotificationImportantRoundedIcon/>
        </IconButton>
        <IconButton>
            <ExpandMoreRoundedIcon/>
        </IconButton>
    </div>
    </div>
}
export default Header;