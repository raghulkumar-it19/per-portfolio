import {IconButton} from "@material-ui/core";
import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import React from "react";
import { Element } from "react-scroll";
import "./Contact.css"

const Contact = () => {
  return (
    <Element className="contact" id="contact">
      <h1>Contact</h1>
      <div className="contact__container">
        <p>
          Email : <span>ravichitra262001@gmail.com</span>
        </p>
        <p>
          Github Username : <span>@raghulkumar-it19</span>
        </p>
        <div className="contact__icons">
          <a
            href="https://www.linkedin.com/in/raghulkumar45"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton>
              <LinkedIn />
            </IconButton>
          </a>
          <a
            href="https://www.facebook.com/RaghulRo45?mibextid=rS40aB7S9Ucbxw6v"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton>
              <Facebook />
            </IconButton>
          </a>
          <a
            href="https://www.instagram.com/raghul__45?igsh=MWx3Ym83amx5ZmF0Zw=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton>
              <Instagram />
            </IconButton>
          </a>
        </div>
      </div>
    </Element>
  );
};

export default Contact;
