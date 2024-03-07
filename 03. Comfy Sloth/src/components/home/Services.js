import { services } from "../../helpers/services";

const Services = () => {
  return (
    <section className="section service-section">
      <header className="service-header">
        <h3>
          custom furniture <br />
          built only for you
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum
          debitis consectetur reprehenderit non aliquam voluptates dolore aut
          vero consequuntur.
        </p>
      </header>
      <div className="section-center service-center">
        {services.map((service, index) => {
          const { icon, title, text } = service;
          return (
            <article className="service" key={index}>
              <span className="icon">{icon}</span>
              <h4>{title}</h4>
              <p>{text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
