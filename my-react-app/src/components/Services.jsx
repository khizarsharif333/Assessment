import React, { useEffect, useState } from "react";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchServices = async () => {
      const API_URL = "https://script.google.com/macros/s/AKfycbyIF7NGefZ5Ljhw2Xv2TPnWBqvA4WRwbRE5laVXUHXzkEooir2bHq7sqU24Lw_oGnTFJQ/exec";

      try {
        const response = await fetch(API_URL, {
          method: "GET"
        });

        const data = await response.json();
        if (data.status === "ok") {
          setServices(data.data);
        } else {
          setError("Failed to load services.");
        }
      } catch (error) {
        console.error("Error fetching Services:", error);
        setError("An error occurred while fetching services.");
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <section id="services" className="section">
      <div className="container">
        <h2>Our Services</h2>
        {loading ? (
          <p>Loading services...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <div className="service-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
