import React from "react";
import "../Policy/PolicyC.css"
import { Container } from "react-bootstrap";

const Policy = () => {
 return (
   <div id="Policy">
     <Container>
       <div
         style={{
           display: "flex",
           flexDirection: "column",
           alignItems: "center",
           justifyContent: "center",
         }}
       >
         <h2>Chính sách!</h2>
       </div>
     </Container>
     <div id="table-Policy">
       <div>
         <h4>thông tin</h4>
       </div>
     </div>
   </div>
 );
};

export default Policy;
