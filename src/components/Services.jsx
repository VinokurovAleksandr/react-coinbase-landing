import React from 'react';
import styled from "styled-components";

import service1 from "../media/service1.png";
import service2 from "../media/service2.png";
import service3 from "../media/service3.png";


export default function Services() {
    const servicesData = [
        {
          image: service1,
          title: "Manage your portfolio",
          descrption:
            "Coinbase supports a variety of the most popular digital currencies.",
        },
        {
          image: service2,
          title: "Recurring buys",
          descrption:
            "Coinbase supports a variety of the most popular digital currencies.",
        },
        {
          image: service3,
          title: "Mobile apps",
          descrption:
            "Coinbase supports a variety of the most popular digital currencies.",
        },
      ];

      return (
        <Section className='flex column gap j-center a-center'>
            <div className="title-container flex column gap-1">
                <div className="title text-center">
                    <h2>Start your trading with us</h2>
                </div>
                <div className="subtitle text-center subdue">
                    <h3>
                    Market Watchmen has a variety of features that make it the best
                    place to start trading
                    </h3>
                </div>
            </div>
            <div className="services flex j-center a-center gap">
                {servicesData.map(({image,title,descrption})=> {
                    return (
                        <div className="service text-center flex column gap-1" key={title}>
                            <div className="image">
                                <img src={image} alt="service" />
                            </div>
                            <div className="title">{title}</div>
                            <div className="descrption subdue">{descrption}</div>
                        </div>
                    )

                })}
            </div>
        </Section>
      )
};

const Section = styled.section`
    .services {
        padding: 0 5rem;
        gap: 10rem;
        .service {
            .title {
                font-size: 1.5rem;
            }
            .descrption {
                font-size: 1rem;
                line-height: 1.2rem;
            }
        }
    }

    @media screen and (min-width: 280px) and (max-width: 1080px) {
    .services {
      padding: 2rem;
      gap: 3rem;
    }
  }
`;