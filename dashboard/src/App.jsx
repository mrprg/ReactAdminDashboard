import "./App.css";

import React, { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
const activeMenu = true;
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div
            className="fixed right-4 bottom-4"
            style={{ zIndex: "1000" }}>
            <TooltipComponent
              content="Settings"
              position="Top">
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                style={{
                  background: "blue",
                  borderRadius: "50%",
                }}>
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              this is a side bar!
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              sidebar w-0
            </div>
          )}
          <div
            className={`dark:bg-main-bg w-full bg-main-bg min-h-screen ${
              activeMenu ? "md:ml-72" : "flex-2"
            }`}>
              <div className="fixed md:static w-full navbar dark:bg-main-dark-bg bg-main-bg">
                  navbar
              </div>
            </div>
            <div>
              <Routes >
                {/* Dashboard */}
                <Routes path="/" element="ECommerce" />
                <Routes path="/ecommerce" element="ECommerce" />
                {/* Pages */}
                <Route path="/orders" element="Orders" />
                <Route path="/employees" element="Employees" />
                <Route path="/customers" element="Customers" />
                {/* Apps */}
                <Route path="/kanban" element="Kanban" />
                <Route path="/editor" element="Editor" />
                <Route path="calender" element="Calender" />
                <Route path="/color-picker" element="ColorPicker" />
                {/* Charts */}
                <Route path="/line" element="Line" />
                <Route path="/area" element="Area" />
                <Route path="/bar" element="Bar" />
                <Route path="/pie" element="Pie" />
                <Route path="/financial" element="Financial" />
                <Route path="/color-mapping" element="ColorMapping" />
                <Route path="/pyramid" element="Pyramid" />
                <Route path="/stacked" element="Stacked" />
              </Routes>
            </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
