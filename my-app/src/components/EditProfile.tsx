import React, { useState } from 'react'

const EditProfile = () => {
  const [form, setForm] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Profile saved!");
  };

  const handleChange = () => {

  }

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: "flex", gap: 16, marginBottom: 16 }}>
        <div style={{ flex: 1 }}>
          <label style={{ fontSize: 14, fontWeight: 500, color: "#555", display: "block", marginBottom: 6 }}>Your Name</label>
          <input name="name" type="text"onChange={handleChange} style={{ width: "100%", padding: "10px 12px", borderRadius: 6, border: "1px solid #eee", fontSize: 14 }} />
        </div>
        <div style={{ flex: 1 }}>
          <label style={{ fontSize: 14, fontWeight: 500, color: "#555", display: "block", marginBottom: 6 }}>User Name</label>
          <input name="username" type="text" onChange={handleChange} style={{ width: "100%", padding: "10px 12px", borderRadius: 6, border: "1px solid #eee", fontSize: 14 }} />
        </div>
      </div>
      <div style={{ display: "flex", gap: 16, marginBottom: 16 }}>
        <div style={{ flex: 1 }}>
          <label style={{ fontSize: 14, fontWeight: 500, color: "#555", display: "block", marginBottom: 6 }}>Email</label>
          <input name="email" type="email" onChange={handleChange} style={{ width: "100%", padding: "10px 12px", borderRadius: 6, border: "1px solid #eee", fontSize: 14 }} />
        </div>
        <div style={{ flex: 1 }}>
          <label style={{ fontSize: 14, fontWeight: 500, color: "#555", display: "block", marginBottom: 6 }}>Password</label>
          <input name="password" type="password" onChange={handleChange} style={{ width: "100%", padding: "10px 12px", borderRadius: 6, border: "1px solid #eee", fontSize: 14 }} />
        </div>
      </div>
      <div style={{ display: "flex", gap: 16, marginBottom: 16 }}>
        <div style={{ flex: 1 }}>
          <label style={{ fontSize: 14, fontWeight: 500, color: "#555", display: "block", marginBottom: 6 }}>Date of Birth</label>
          <input name="dob" type="text" style={{ width: "100%", padding: "10px 12px", borderRadius: 6, border: "1px solid #eee", fontSize: 14 }} />
        </div>
        <div style={{ flex: 1 }}>
          <label style={{ fontSize: 14, fontWeight: 500, color: "#555", display: "block", marginBottom: 6 }}>Present Address</label>
          <input name="address" type="text" onChange={handleChange} style={{ width: "100%", padding: "10px 12px", borderRadius: 6, border: "1px solid #eee", fontSize: 14 }} />
        </div>
      </div>
      <div style={{ display: "flex", gap: 16, marginBottom: 24 }}>
        <div style={{ flex: 1 }}>
          <label style={{ fontSize: 14, fontWeight: 500, color: "#555", display: "block", marginBottom: 6 }}>Postal Code</label>
          <input name="postal" type="text" onChange={handleChange} style={{ width: "100%", padding: "10px 12px", borderRadius: 6, border: "1px solid #eee", fontSize: 14 }} />
        </div>
        <div style={{ flex: 1 }}>
          <label style={{ fontSize: 14, fontWeight: 500, color: "#555", display: "block", marginBottom: 6 }}>City</label>
          <input name="city" type="text"  onChange={handleChange} style={{ width: "100%", padding: "10px 12px", borderRadius: 6, border: "1px solid #eee", fontSize: 14 }} />
        </div>
        <div style={{ flex: 1 }}>
          <label style={{ fontSize: 14, fontWeight: 500, color: "#555", display: "block", marginBottom: 6 }}>Country</label>
          <input name="country" type="text"  onChange={handleChange} style={{ width: "100%", padding: "10px 12px", borderRadius: 6, border: "1px solid #eee", fontSize: 14 }} />
        </div>
      </div>
      <button type="submit" style={{ background: "#1a73e8", color: "#fff", padding: "12px 32px", borderRadius: 8, border: "none", fontWeight: 600, fontSize: 16, cursor: "pointer" }}>Save</button>
    </form>
  )
}

export default EditProfile