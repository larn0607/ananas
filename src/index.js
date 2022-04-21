// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/pagination";
import "swiper/css/thumbs";
import { store } from './redux/store'
import { Provider } from 'react-redux'

import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  // <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  // </StrictMode>
);