import React from "react"
import ReactDOM from "react-dom/client"
const para = React.createElement("h1",{id:"parent"},"Hello Javascript");
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(para);
console.log(para)
