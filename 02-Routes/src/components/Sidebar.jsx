import React from "react";
import { FaChartBar, FaTh, FaRegEdit, FaTable, FaPlus, FaCommentDots, FaBell, FaPowerOff } from "react-icons/fa";
import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">Simple Admin</div>
      <nav className="sidebar-nav">
        <ul>
          <li className="active">
            <FaTh className="sidebar-icon" />
            Dashboard
          </li>
          <li>
            <FaChartBar className="sidebar-icon" />
            UI Components <span className="new-badge">New</span>
            <ul className="submenu">
              <li>Buttons</li>
              <li>Chart</li>
              <li>Input</li>
              <li>Modal</li>
              <li>Widget</li>
            </ul>
          </li>
          <li>
            <FaRegEdit className="sidebar-icon" />
            Form
          </li>
          <li>
            <FaTable className="sidebar-icon" />
            Data Table
            <span className="plus-btn"><FaPlus /></span>
          </li>
        </ul>
      </nav>
      <div className="sidebar-footer">
        <FaCommentDots />
        <FaBell />
        <FaPowerOff />
      </div>
    </aside>
  );
}

export default Sidebar; 