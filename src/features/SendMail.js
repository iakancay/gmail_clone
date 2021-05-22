import { Button, IconButton } from '@material-ui/core';
import { AttachFile, Close, Create, Image, InsertEmoticon, Link, TextFormat } from '@material-ui/icons';
import React from 'react';
import './SendMail.css';

function SendMail() {
    return (
        <div className="sendMail">
            <div className="sendMail__header">
                <h3>New message</h3>
                <Close className="sendMail__close"/>
            </div>
            <form >

                <input placeholder="To" type="text" />
                <input placeholder="Subject" type="text" />
                <input 
                placeholder="Message..."
                type="text" 
                className="sendMail__message"
                />
                <div className="sendMail__options">
                    <Button 
                    className="sendMail__send"
                    variant="contained"
                    color="primary"
                    type="submit"
                    >Send</Button>
                    {/* <IconButton><TextFormat/></IconButton>
                 <IconButton><AttachFile/></IconButton>
                 <IconButton><Link/></IconButton>
                 <IconButton><InsertEmoticon/></IconButton>
                 
                 <IconButton><Image/></IconButton>
                 <IconButton><Create/></IconButton> */}
                 
                 
                </div>
            </form>
            
        </div>
    )
}

export default SendMail
