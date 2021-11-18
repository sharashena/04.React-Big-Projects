import React, { Component } from "react";
import Title from "./Title";
import { ServicesStyled } from "../styles/Service";
import services from "../tools/services";

export default class Services extends Component {
  render() {
    return (
      <ServicesStyled className="section">
        <div className="section-center">
          <div className="service-header">
            <Title title="custom furniture built only for you" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              dolorum debitis consectetur reprehenderit non aliquam voluptates
              dolore aut vero consequuntur.
            </p>
          </div>
          <div className="service-footer">
            {services.map((item, index) => {
              const { icon, title, text } = item;
              return (
                <article key={index} className="service">
                  <span>{icon}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </ServicesStyled>
    );
  }
}
