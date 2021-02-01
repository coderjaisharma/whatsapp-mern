import React from 'react'
import './Sidebar.css'
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import {Avatar,IconButton} from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import SidebarChat from './SidebarChat';
const Sidebar = () => {
    return (
        <div className="Sidebar_app">
        
        <div className="sidebar__header">
        <Avatar/>
            <div className="sidebar__headerRight">
               
                   <IconButton>
                   <DonutLargeIcon/>
                   </IconButton>
                   <IconButton>
                   <ChatIcon/>
                   </IconButton>
                   <IconButton>
                   <MoreVertIcon/>
                   </IconButton>

                
            </div>
        </div>
        <div className="sidebar__search">
        <div className="sidebar__searchContainer">
            <SearchOutlinedIcon/>
            <input placeholder="search or start new chat" type="text"/>
        </div>
        </div>
        <div className="sidebar__chats">
            <SidebarChat/>
            <SidebarChat/>
            <SidebarChat/>

        </div>
        </div>
    )
}

export default Sidebar