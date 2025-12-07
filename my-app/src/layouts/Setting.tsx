import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Setting = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path || (path === "/setting" && location.pathname === "/setting");
  };

  return (
    <div style={{ maxWidth: 600, margin: "40px auto", background: "#fff", borderRadius: 12, boxShadow: "0 2px 8px rgba(0,0,0,0.05)", padding: 32 }}>
      <h1 style={{ marginBottom: 24 }}>Setting</h1>
      
      {/* Tabs Navigation */}
      <div style={{ display: "flex", gap: 0, marginBottom: 32, borderBottom: "1px solid #eee" }}>
        <Link 
          to="/setting" 
          style={{ 
            border: "none", 
            background: "none", 
            padding: "12px 24px", 
            borderRadius: 0,
            borderBottom: isActive("/setting") ? "3px solid #1a73e8" : "none",
            fontWeight: isActive("/setting") ? 600 : 400,
            color: isActive("/setting") ? "#1a73e8" : "#888",
            cursor: "pointer",
            marginBottom: "-1px",
            textDecoration: "none"
          }}
        >
          Edit Profile
        </Link>
        <Link 
          to="/setting/preferences" 
          style={{ 
            border: "none", 
            background: "none", 
            padding: "12px 24px", 
            borderRadius: 0,
            borderBottom: isActive("/setting/preferences") ? "3px solid #1a73e8" : "none",
            fontWeight: isActive("/setting/preferences") ? 600 : 400,
            color: isActive("/setting/preferences") ? "#1a73e8" : "#888",
            cursor: "pointer",
            marginBottom: "-1px",
            textDecoration: "none"
          }}
        >
          Preferences
        </Link>
        <Link 
          to="/setting/security" 
          style={{ 
            border: "none", 
            background: "none", 
            padding: "12px 24px", 
            borderRadius: 0,
            borderBottom: isActive("/setting/security") ? "3px solid #1a73e8" : "none",
            fontWeight: isActive("/setting/security") ? 600 : 400,
            color: isActive("/setting/security") ? "#1a73e8" : "#888",
            cursor: "pointer",
            marginBottom: "-1px",
            textDecoration: "none"
          }}
        >
          Security
        </Link>
      </div>

      {/* Content from child routes */}
      <Outlet />
    </div>
  );
};

export default Setting;