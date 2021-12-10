import React from "react";
import "./MapsAndInfo.css";

export default function MapsAndInfo() {

  return (
    <div id="maps-and-info">
      <form className="info-container">
        <input type="text" placeholder="Enter name"  />
        <input type="email" placeholder="Enter Email ID" />
        <input type="number" placeholder="Enter Phone Number" />
        <select defaultValue="select service type">
          <option disabled selected hidden value="servive type">
            Service Type
          </option>
          <option value="mobile repair">Mobile Repair</option>
          <option value="laptop repair">Laptop Repair</option>
          <option value="macbook repairs">Macbook Repair</option>

        </select>

        <button>Submit</button>
      </form>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d972.2478841449858!2d77.56170782913256!3d12.908265306645072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6b49f595cf6b53ef!2zMTLCsDU0JzI5LjgiTiA3N8KwMzMnNDQuMSJF!5e0!3m2!1sen!2sin!4v1638877555781!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
