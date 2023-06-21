import * as ReactDOMClient from 'react-dom/client';
import "./index.css";
import App from "./App";

import { StrictMode } from 'react';

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);

root.render(<StrictMode><App /></StrictMode>);