import React, { useState } from 'react';
import NavbarHeading from './NavbarHeading';
import cardImg1 from "../asserts/Image/card_1.jpg";
import cardImg2 from "../asserts/Image/card_2.jpg";
import cardImg3 from "../asserts/Image/card_3.jpg";
import cardImg4 from "../asserts/Image/card_4.jpg";
import cardImg5 from "../asserts/Image/card_5.jpg";
import cardImg6 from "../asserts/Image/card_6.jpg";
import TourCard from './TourCard';

interface ITour{
    sno:string;
    imageUrl:string;
    heading:string;
}

export const TourCardsPropsandState:React.FC = () => {
    let [navbarName,setNavbarName]=useState<string>("React 'Props'&'State' concept  with  TourCards Example")
    let [cards,setCards]=useState<ITour[]>([
        {
            sno : "AA001",
            imageUrl : cardImg1,
            heading : "Paris"
        },
        {
            sno : "AA002",
            imageUrl : cardImg2,
            heading : "Bangkok"
        },
        {
            sno : "AA003",
            imageUrl : cardImg3,
            heading : "Indonesia"
        },
        {
            sno : "AA004",
            imageUrl : cardImg4,
            heading : "Malaysia"
        }
    ])
  return (
    <>
    <div className="" style={{margin:0}}>
    <NavbarHeading  navbarName={navbarName}/>
    </div>
    <div className="container mt-3">
        <div className="row">
            {
                cards.map((card)=>{
return(
    <TourCard key={card.sno} imageUrl={card.imageUrl} heading={card.heading} />
)
                })
            }
        </div>
    </div>
    </>
  )
}
