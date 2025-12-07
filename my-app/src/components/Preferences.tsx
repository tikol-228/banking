import React, { useState } from "react";
import styles from "./Preferences.module.css";

const Preferences = () => {
  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    pushNotifications: false,
    smsNotifications: true,
    marketingEmails: false,
    language: "en",
    theme: "light"
  });

  const handleToggle = (key: keyof typeof preferences) => {
    if (typeof preferences[key] === 'boolean') {
      setPreferences({
        ...preferences,
        [key]: !preferences[key]
      });
    }
  };

  const handleChange = (key: keyof typeof preferences, value: string) => {
    setPreferences({
      ...preferences,
      [key]: value
    });
  };

  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 0", borderBottom: "1px solid #eee" }}>
          <div>
            <h3 style={{ margin: 0, fontSize: 16, fontWeight: 600 }}>Email Notifications</h3>
            <p style={{ margin: "4px 0 0 0", color: "#888", fontSize: 14 }}>Receive email updates about your account</p>
          </div>
          <input 
            type="checkbox" 
            checked={preferences.emailNotifications}
            onChange={() => handleToggle('emailNotifications')}
            style={{ width: 20, height: 20, cursor: "pointer" }}
          />
        </div>
      </div>

      <div style={{ marginBottom: 24 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 0", borderBottom: "1px solid #eee" }}>
          <div>
            <h3 style={{ margin: 0, fontSize: 16, fontWeight: 600 }}>Push Notifications</h3>
            <p style={{ margin: "4px 0 0 0", color: "#888", fontSize: 14 }}>Receive push notifications on your device</p>
          </div>
          <input 
            type="checkbox" 
            checked={preferences.pushNotifications}
            onChange={() => handleToggle('pushNotifications')}
            style={{ width: 20, height: 20, cursor: "pointer" }}
          />
        </div>
      </div>

      <div style={{ marginBottom: 24 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 0", borderBottom: "1px solid #eee" }}>
          <div>
            <h3 style={{ margin: 0, fontSize: 16, fontWeight: 600 }}>SMS Notifications</h3>
            <p style={{ margin: "4px 0 0 0", color: "#888", fontSize: 14 }}>Receive important updates via SMS</p>
          </div>
          <input 
            type="checkbox" 
            checked={preferences.smsNotifications}
            onChange={() => handleToggle('smsNotifications')}
            style={{ width: 20, height: 20, cursor: "pointer" }}
          />
        </div>
      </div>

      <div style={{ marginBottom: 24 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 0", borderBottom: "1px solid #eee" }}>
          <div>
            <h3 style={{ margin: 0, fontSize: 16, fontWeight: 600 }}>Marketing Emails</h3>
            <p style={{ margin: "4px 0 0 0", color: "#888", fontSize: 14 }}>Receive promotional offers and updates</p>
          </div>
          <input 
            type="checkbox" 
            checked={preferences.marketingEmails}
            onChange={() => handleToggle('marketingEmails')}
            style={{ width: 20, height: 20, cursor: "pointer" }}
          />
        </div>
      </div>

      <div style={{ marginBottom: 24, paddingTop: 16 }}>
        <label style={{ fontSize: 14, fontWeight: 500, color: "#555", display: "block", marginBottom: 8 }}>Language</label>
        <select 
          value={preferences.language}
          onChange={(e) => handleChange('language', e.target.value)}
          style={{ width: "100%", padding: "10px 12px", borderRadius: 6, border: "1px solid #eee", fontSize: 14 }}
        >
          <option value="en">English</option>
          <option value="ru">Russian</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
        </select>
      </div>

      <div style={{ marginBottom: 24 }}>
        <label style={{ fontSize: 14, fontWeight: 500, color: "#555", display: "block", marginBottom: 8 }}>Theme</label>
        <select 
          value={preferences.theme}
          onChange={(e) => handleChange('theme', e.target.value)}
          style={{ width: "100%", padding: "10px 12px", borderRadius: 6, border: "1px solid #eee", fontSize: 14 }}
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="auto">Auto</option>
        </select>
      </div>

      <button style={{ background: "#1a73e8", color: "#fff", padding: "12px 32px", borderRadius: 8, border: "none", fontWeight: 600, fontSize: 16, cursor: "pointer" }}>
        Save Preferences
      </button>
    </div>
  );
};

export default Preferences;