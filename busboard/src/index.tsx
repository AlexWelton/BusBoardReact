import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BusInfo from "./pages/BusInfo";
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
export default function Home() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<App/>}/>
                    <Route path="bus" element={<BusInfo/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
