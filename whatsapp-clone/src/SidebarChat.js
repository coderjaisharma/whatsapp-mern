import { Avatar } from '@material-ui/core'
import React from 'react'

import './SidebarChat.css'

const SidebarChat = () => {
    return (
        <div className="sidebarchat">
            <Avatar/>
            <div className="sidebarChat__info">
                <h2>Room Name</h2>
                <p>this iis the last message</p>
            </div>
        </div>
    )
}

export default SidebarChat 
