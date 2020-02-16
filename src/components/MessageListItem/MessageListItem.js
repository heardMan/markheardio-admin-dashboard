import React, { useState, useEffect } from "react";
import "./MessageListItem.css";

const MessageListItem = (props) => {

    const [date, setDate] = useState(new Date(props.date));
    const [name, setName] = useState(props.name);
    const [email, setEmail] = useState(props.email);
    const [preview, setPreview] = useState(props.message.slice(0, 40) + "...");
    const [displayMsg, setDisplayMsg] = useState(false);

    useEffect(()=>{
        if(displayMsg===true){
            document.body.style.overflow = 'hidden';
          } else {
            document.body.style.overflow = '';
          }
    })
      

    const toggleDisplayMsg = () => {
        if (displayMsg === true) {
            setDisplayMsg(false)
        } else {
            setDisplayMsg(true)
        }
    }

    const formattedDate = (date) => {

        const _month_ = date.getMonth();
        const day = date.getDate();

        let month;

        if (_month_ === 0) {
            month = 'January'
        } else if (_month_ === 1) {
            month = 'February'
        } else if (_month_ === 2) {
            month = 'March'
        } else if (_month_ === 3) {
            month = 'April'
        } else if (_month_ === 4) {
            month = 'May'
        } else if (_month_ === 5) {
            month = 'June'
        } else if (_month_ === 6) {
            month = 'July'
        } else if (_month_ === 7) {
            month = 'August'
        } else if (_month_ === 8) {
            month = 'September'
        } else if (_month_ === 9) {
            month = 'October'
        } else if (_month_ === 10) {
            month = 'November'
        } else if (_month_ === 11) {
            month = 'December'
        }

        return `${month}-${day}`;
    }

    const msg = <div className="msg">
        <div className="msg-bg"></div>
        <div className="msg-dialogue">
            <div className="msg-header">
                <div className="msg-title">{"Message from " + name}</div>
                <button onClick={toggleDisplayMsg} id="msg-close">Close</button>
            </div>
            <div className="modal-content">{props.message}</div>
            <div className="msg-action"></div>
        </div>
    </div>

    const msgListItem = <div className="msg-list-item" onClick={toggleDisplayMsg}>
        <span className="msg-date">{formattedDate(date)}</span>
        <span className="msg-name">{name}</span>
        <span className="msg-email">{email}</span>
    </div>

    return (displayMsg === true ? msg : msgListItem);

};

export default MessageListItem;