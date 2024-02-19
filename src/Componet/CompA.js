import React, { Component, useEffect } from "react";

const CompA = () => {
    useEffect(
        ()=>{
            document.title = "Component A"
    }, [])
    return(
        <>
        <div className="main">Tnis is some div</div>
        </>
    )
}

export default CompA;