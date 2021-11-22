import React, { useState, createContext } from "react";
// initializes an instance of createContext API
export const Context = createContext();
// a component that can store other components to allow access to one another
export const ContextProvider = (props) => {
    const [username, setUsername] = useState("");
    const [secret, setSecret] = useState("");
    // useState data stored as value const to pass user info to prop
    const value = {
        username,
        setUsername,
        secret,
        setSecret
    };

    return <Context.Provider value={value}>{props.children}</Context.Provider>
}