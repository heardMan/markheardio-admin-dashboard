import React, { useState, useEffect } from "react";
import MessageList from "../components/MessageList/MessageList";
import ContactAPI from "../services/contactApi";
import { useAuth0 } from "../react-auth0-spa";

const Messages = () => {
    const { getTokenSilently } = useAuth0();
    const [messages, setMessages] = useState([]);

    const getAllMessages = async () => {
        try {
            const token = await getTokenSilently();
            const url = "https://markheardio-dashboard.herokuapp.com/"

            const response = await fetch(url, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            const responseData = await response.json();
            setMessages(responseData.messages);


        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {

        getAllMessages()

    }, []);

    return (
        <div>
            <MessageList messages={messages} />
        </div>
    );
};

export default Messages;