import React from "react";
import MessageListItem from "../MessageListItem/MessageListItem";
import "./MessageList.css"

const MessageList = (props) => {
    

    return(
        <ul className="list" style={{}}>
            {props.messages.map((message,i)=>{
                return(
                    <li key={i}>
                        <MessageListItem 
                        date={message.date}
                        name={message.name}
                        email={message.email}
                        message={message.message}
                        preview={message.preview}
                        
                        />
                    </li>
                );
            })}
        </ul>
    );
};

export default MessageList;