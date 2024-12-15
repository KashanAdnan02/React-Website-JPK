import React from "react";
import reactDOM from "react-dom/client"

const rootDiv = document.getElementById("root")

reactDOM.createRoot(rootDiv).render(<>
  <div style={{ display: "flex", alignItems: 'center', justifyContent: "space-between", padding: "0 40px" }}>
    <div style={{ width: "400px" }}>
      <h1>Kashan Adnan</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis libero temporibus quam aliquid, similique voluptatum quo dicta, ullam obcaecati sit vel corrupti quas consequatur. Aut ipsum soluta eius. Vitae, earum.</p>
    </div>
    <img src="https://media2.dev.to/dynamic/image/width=1080,height=1080,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F096baapsqqt9fks0us99.png" alt="" width={200} />
  </div>
</>)