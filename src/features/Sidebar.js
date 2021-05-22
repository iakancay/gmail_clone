import { Button, IconButton } from "@material-ui/core";
import { AccessTime, Add,ExpandMore,Inbox,LabelImportant,Note,Send,Star,Person,Duo,Phone } from "@material-ui/icons";
import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";

function Sidebar() {
    const sidebarRoute=[
        {
            title:"Inbox",
            Icon:Inbox,
            number:20,
            path:"/inbox",
            selected:true
        },
        {
            title:"Starred",
            Icon:Star,
            number:30,
            path:"/starred"
        },
        {
            title:"Snoozed",
            Icon:AccessTime,
            number:50,
            path:"/snoozed"
        },
        {
            title:"Important",
            Icon:LabelImportant,
            number:30,
            path:"/important"
        },
        {
            title:"Sent",
            Icon:Send,
            number:25,
            path:"/sent"
        },
        {
            title:"Drafts",
            Icon:Note,
            number:10,
            path:"/drafts"
        },
        {
            title:"More",
            Icon:ExpandMore,
            number:null,
            path:"/expandMore"
        }
    ]
  return (
    <div className="sidebar">
      <Button startIcon={<Add fontSize="large" />} className="sidebar__compose">
        Compose
      </Button>
      {sidebarRoute.map(item=> (
        <SidebarOption key={item.title} Icon={item.Icon} title={item.title} number={item.number} selected={item.selected}/>
      ))}
      <div className="sidebar__footer">
          <div className="sidebar__footerIcons">   
          <IconButton><Person/></IconButton>
          <IconButton><Duo/></IconButton>
          <IconButton><Phone/></IconButton>
           </div>
      </div>
    </div>
  );
}

export default Sidebar;
