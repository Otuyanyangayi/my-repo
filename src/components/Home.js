import React, { useState } from "react"
import { useEffect } from "react"
import { Link } from "react-router-dom";

function Home() {
let images=[
    {id:1,url:"/images/inventory.jpeg",description:"We got you best inventory management for your stocks"},
    {id:2,url:"/images/inventory2.jpeg",description:"Give your views"},
    {id:3,url:"/images/inventory3.webp",description:"All stock in one store"},
    {id:2,url:"/images/inventory4.jpeg",description:"Stock with us"},
]
const [index,setIndex]=useState(0)
const [does,setDoes]=useState(0)
const autorun=()=>{
    if(index===images.length-1){
        setIndex(0)
    }
    else{
        setIndex(index + 1)
    }
}
const wordautorun=()=>{
    if(does===images.length-1){
        setDoes(0)
    }
    else{
        setDoes(does +1)
    }
}
useEffect(()=>{
    const handleutorun=setTimeout(autorun,3000)
    return()=>{
        clearTimeout(handleutorun)
    }
},[index])

useEffect(()=>{
    const handlewordutorun=setTimeout(wordautorun,3000)
    return()=>{
        clearTimeout(handlewordutorun)
    }
},[does])

    return (

        <div className="banner-container">
            <div className="banner">
                <img src={images[index].url} alt=""/>
                <div className="banner-cover">
                <div className="banner-words">
                    <p className="words">{images[does].description}</p>
                    <button className="show-btn"><Link to="/login" >login</Link></button>
                </div>
                <div className="circ-container">
                    {images.map((image,i)=>{
                        return(
                            <div className={`circ ${i===index? "circ-active":""}`}></div>
                        )
                    })}
                </div>
            </div>
          </div>
        </div>

    )
}

export default Home

