import React from "react";
import ReactDOMClient from "react-dom/client";
import { Section } from "./screens/Section/Section";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Section />);