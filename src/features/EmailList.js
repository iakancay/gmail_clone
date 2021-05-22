import { Checkbox, IconButton } from '@material-ui/core';
import { ArrowDropDown,Redo,MoreVert, ChevronLeft, ChevronRight, KeyboardHide, Settings, Inbox, People, LocalOffer } from '@material-ui/icons';
import React from 'react';
import './EmailList.css';
import EmailRow from './EmailRow';
import Section from './Section';


function EmailList() {
    return (
        <div className='emailList'>
         <div className="emailList__settings">
             <div className="emailList__settingsLeft">
                 <Checkbox/>
                 <IconButton><ArrowDropDown/></IconButton>
                 <IconButton><Redo/></IconButton>
                 <IconButton><MoreVert/></IconButton>
                 
             </div>
             <div className="emailList__settingsRight">
             <IconButton><ChevronLeft/></IconButton>
                 <IconButton><ChevronRight/></IconButton>
                 <IconButton><KeyboardHide/></IconButton> 
                 <IconButton><Settings/></IconButton> 
             </div>
             </div>  
             <div className="emailList__sections">
                 <Section Icon={Inbox} title='Primary' color='red' selected/>
                 <Section Icon={People} title='Social' color='#1a73e8' />
                 <Section Icon={LocalOffer} title='Promotions' color='green'/>
             </div>
             <div className="emailList__list">
                 <EmailRow
                 title="Twitch"
                 subject="Hey why are you looking at?"
                 description="This is a test"
                 time="10pm"
                 />
             </div>
        </div>
    )
}

export default EmailList
