import React, { useState } from 'react'

const Security = () => {
  const [securitySettings, setSecuritySettings] = useState({
    twoFactor: false,
    biometric: false,
    notifications: true
  });

  const handleToggle = (key: keyof typeof securitySettings) => {
    setSecuritySettings({
      ...securitySettings,
      [key]: !securitySettings[key]
    });
  };

  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 0", borderBottom: "1px solid #eee" }}>
          <div>
            <h3 style={{ margin: 0, fontSize: 16, fontWeight: 600 }}>Two-Factor Authentication</h3>
            <p style={{ margin: "4px 0 0 0", color: "#888", fontSize: 14 }}>Add an extra layer of security to your account</p>
          </div>
          <input 
            type="checkbox" 
            checked={securitySettings.twoFactor}
            onChange={() => handleToggle('twoFactor')}
            style={{ width: 20, height: 20, cursor: "pointer" }}
          />
        </div>
      </div>

      <div style={{ marginBottom: 24 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 0", borderBottom: "1px solid #eee" }}>
          <div>
            <h3 style={{ margin: 0, fontSize: 16, fontWeight: 600 }}>Biometric Authentication</h3>
            <p style={{ margin: "4px 0 0 0", color: "#888", fontSize: 14 }}>Use fingerprint or face recognition</p>
          </div>
          <input 
            type="checkbox" 
            checked={securitySettings.biometric}
            onChange={() => handleToggle('biometric')}
            style={{ width: 20, height: 20, cursor: "pointer" }}
          />
        </div>
      </div>

      <div style={{ marginBottom: 24 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 0" }}>
          <div>
            <h3 style={{ margin: 0, fontSize: 16, fontWeight: 600 }}>Security Notifications</h3>
            <p style={{ margin: "4px 0 0 0", color: "#888", fontSize: 14 }}>Get alerts for unusual account activity</p>
          </div>
          <input 
            type="checkbox" 
            checked={securitySettings.notifications}
            onChange={() => handleToggle('notifications')}
            style={{ width: 20, height: 20, cursor: "pointer" }}
          />
        </div>
      </div>

      <button style={{ background: "#1a73e8", color: "#fff", padding: "12px 32px", borderRadius: 8, border: "none", fontWeight: 600, fontSize: 16, cursor: "pointer", marginTop: 16 }}>
        Save Security Settings
      </button>
    </div>
  )
}

export default Security