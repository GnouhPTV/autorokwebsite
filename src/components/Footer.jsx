import React from 'react';
import { MDBFooter, MDBContainer, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
import { SiZalo } from "react-icons/si";

function Footer() {
  return (
    <footer className="footer">
      <MDBFooter className="bg-dark text-center text-white">
        <MDBContainer className="p-4 pb-0">
          <section>
            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="https://www.facebook.com/icebearbot2023"
              role="button"
              target="_blank"
            >
              <MDBIcon fab icon="facebook-f" />
            </MDBBtn>
            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="https://discord.gg/Mbf2Qj5KsP"
              role="button"
              target="_blank"
            >
              <MDBIcon fab icon="discord" />
            </MDBBtn>
            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="https://zalo.me/g/dsahny833"
              role="button"
              target="_blank"
            >
              <SiZalo />
            </MDBBtn>
            
          </section>
        </MDBContainer>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2023 Copyright:
          <a className="text-white" href="https://mdbootstrap.com/">
            icebearbot2024
          </a>
        </div>
      </MDBFooter>
    </footer>
  );
}

export default Footer;
