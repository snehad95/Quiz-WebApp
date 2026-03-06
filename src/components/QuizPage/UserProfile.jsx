import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Moon, 
  Sun, 
  User, 
  Phone, 
  ShieldCheck, 
  AlertTriangle, 
  Key, 
  LogOut, 
  Trash2,
  Flame,
  ChevronRight
} from 'lucide-react';

const UserProfile = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  
  // Local state for profile data
  const [profile, setProfile] = useState({
    name: "Sneha Dhotre",
    username: "@sneha123",
    role: "STUDENT",
    streak: 1,
    phone: "",
    email: "sneha123@gmail.com"
  });

  // Toggle Dark Mode
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  // Apply body background class
  useEffect(() => {
    document.body.className = isDarkMode ? 'bg-dark' : 'bg-light';
  }, [isDarkMode]);

  // Handle local save
  const handleSave = () => {
    setIsEditing(false);
    console.log("Saved locally:", profile);
  };

  // UI Helper Classes
  const cardClass = `card border-0 shadow-sm mb-3 rounded-4 transition-all ${
    isDarkMode 
      ? 'bg-secondary bg-opacity-10 text-white border border-secondary border-opacity-25' 
      : 'bg-white text-dark'
  }`;
  
  const inputClass = `form-control rounded-3 border-0 text-center ${
    isDarkMode ? 'bg-dark text-white shadow-none' : 'bg-light text-dark shadow-none'
  } py-2`;

  const labelClass = `form-label d-block text-center small fw-bold mb-1 ${
    isDarkMode ? 'text-secondary' : 'text-muted'
  }`;

  return (
    <div className={`min-vh-100 py-3 ${isDarkMode ? 'text-white' : 'text-dark'}`} style={{ transition: 'background 0.3s ease' }}>
      {/* Bootstrap CSS Link */}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" />

      <div className="container" style={{ maxWidth: '900px' }}>
        
        {/* Navigation Bar */}
        {/* <nav className="d-flex justify-content-between align-items-center mb-4">
          <button className={`btn d-flex align-items-center gap-2 fw-semibold px-3 py-1.5 rounded-3 border-0 ${isDarkMode ? 'btn-dark text-light' : 'btn-white bg-white shadow-sm text-dark'}`}>
            <ArrowLeft size={16} />
            <span className="small">Dashboard</span>
          </button>
          
          <button onClick={toggleDarkMode} className={`btn p-2 rounded-3 border-0 d-flex align-items-center justify-content-center ${isDarkMode ? 'bg-secondary bg-opacity-25 text-warning' : 'bg-white shadow-sm text-secondary'}`}>
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav> */}

        {/* Profile Header Block - Made smaller and more compact */}
        <section className={`${cardClass} p-3 p-md-4 mb-4`}>
          <div className="row align-items-center text-center text-md-start g-3">
            <div className="col-md-auto d-flex justify-content-center">
              <div 
                className="rounded-circle d-flex align-items-center justify-content-center text-white fw-bold shadow"
                style={{ 
                  width: '90px', height: '90px', fontSize: '2.2rem',
                  background: 'linear-gradient(135deg, #4264fb, #2b44bf)'
                }}
              >
                {profile.name?.charAt(0).toUpperCase() || 'P'}
              </div>
            </div>
            <div className="col-md ps-md-3">
              <h2 className="h4 fw-bold mb-0">{profile.name}</h2>
              <p className={`mb-2 small ${isDarkMode ? 'text-secondary' : 'text-muted'}`}>{profile.username}</p>
              <div className="d-flex flex-wrap justify-content-center justify-content-md-start gap-2">
                <span className="badge rounded-pill bg-primary bg-opacity-10 text-primary px-3 py-1 fw-bold" style={{ fontSize: '0.7rem' }}>
                  {profile.role}
                </span>
                <span className="badge rounded-pill bg-warning bg-opacity-10 text-warning px-3 py-1 fw-bold d-flex align-items-center gap-1" style={{ fontSize: '0.7rem' }}>
                  <Flame size={12} fill="currentColor" />
                  {profile.streak} Streak
                </span>
              </div>
            </div>
          </div>
        </section>

        <div className="row g-3">
          <div className="col-lg-8">
            
            {/* Personal Details Section */}
            <div className={cardClass}>
              <div className="card-header bg-transparent border-0 px-4 pt-3 pb-0 d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-2 small fw-bold mb-0 text-uppercase tracking-wider opacity-75">
                  <User size={16} />
                  <span>Personal Details</span>
                </div>
                <button 
                  onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                  className="btn btn-link text-decoration-none fw-bold p-0 small text-primary"
                >
                  {isEditing ? 'Save' : 'Edit'}
                </button>
              </div>
              <div className="card-body px-4 py-4">
                <div className="mb-3">
                  <label className={labelClass}>Full Name</label>
                  <input 
                    type="text" 
                    value={profile.name}
                    onChange={(e) => setProfile({...profile, name: e.target.value})}
                    disabled={!isEditing}
                    className={inputClass}
                  />
                </div>
                
                <div className="mb-3">
                  <label className={labelClass}>Phone Number</label>
                  <div className="position-relative">
                    <Phone size={16} className="position-absolute translate-middle-y top-50 start-0 ms-3 text-muted opacity-50" />
                    <input 
                      type="tel" 
                      placeholder="Enter phone number" 
                      value={profile.phone}
                      onChange={(e) => setProfile({...profile, phone: e.target.value})}
                      disabled={!isEditing}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="mb-1">
                  <label className={labelClass}>Email Address</label>
                  <input 
                    type="email" 
                    value={profile.email} 
                    disabled
                    className={`${inputClass} opacity-75`}
                  />
                </div>
              </div>
            </div>

            {/* Security Section */}
            <div className={cardClass}>
              <div className="card-body px-4 py-4">
                <div className={`d-flex align-items-center gap-2 small fw-bold mb-3 text-uppercase tracking-wider opacity-75 ${isDarkMode ? 'text-white' : 'text-dark'}`}>
                  <ShieldCheck size={16} />
                  <span>Security</span>
                </div>
                
                {/* Warning Alert Box */}
                <div className={`alert border-0 border-start border-3 border-warning p-3 rounded-3 mb-3 ${isDarkMode ? 'bg-warning bg-opacity-10 text-warning' : 'bg-warning bg-opacity-10 text-dark'}`}>
                  <div className="d-flex align-items-center justify-content-center gap-2 fw-bold small mb-1">
                    <AlertTriangle size={16} className="text-warning" />
                    <span>Password Recovery</span>
                  </div>
                  <p className="extra-small mb-0 text-center opacity-75 mx-auto" style={{ fontSize: '0.75rem', maxWidth: '350px' }}>
                    Recovery is limited. Please save your password securely.
                  </p>
                </div>

                {/* Change Password Bar */}
                <div className={`d-flex align-items-center justify-content-between p-2 ps-3 rounded-3 ${isDarkMode ? 'bg-dark' : 'bg-light'}`}>
                  <div className="d-flex align-items-center gap-3">
                    <div className={`p-1.5 rounded-2 ${isDarkMode ? 'bg-secondary bg-opacity-25' : 'bg-white shadow-sm'}`}>
                      <Key size={16} className="text-secondary" />
                    </div>
                    <div>
                      <h6 className="fw-bold mb-0 small">Password</h6>
                      <small className="text-muted extra-small" style={{ fontSize: '0.7rem' }}>Update credentials</small>
                    </div>
                  </div>
                  <button className="btn btn-link text-decoration-none fw-bold text-primary p-0 d-flex align-items-center gap-1 small">
                    Change <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Danger Zone Section */}
          <div className="col-lg-4 "style={{height:"250px"}}>
            <div className={`card border-0 rounded-4 p-4 text-center shadow-sm h-100 ${isDarkMode ? 'bg-danger bg-opacity-10 border border-danger border-opacity-10' : 'bg-danger bg-opacity-10'}`}>
              <h6 className="text-danger fw-bold mb-2 text-uppercase tracking-widest small">Danger Zone</h6>
              <p className="text-danger extra-small mb-4 opacity-75" style={{ fontSize: '0.75rem' }}>
                These actions are irreversible.
              </p>

              <div className="d-grid gap-2">
                <button 
                  className={`btn py-2 fw-bold rounded-3 d-flex align-items-center justify-content-center gap-2 border-0 bg-white shadow-sm text-dark small transition-all hover-lift`}
                  onClick={() => window.location.reload()}
                >
                  <LogOut size={16} className="text-danger" />
                  Sign Out
                </button>
                <button className="btn btn-danger py-2 fw-bold rounded-3 d-flex align-items-center justify-content-center gap-2 shadow-sm small">
                  <Trash2 size={16} />
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>

        <footer className="py-4 text-center opacity-25 d-flex align-items-center justify-content-center gap-2 extra-small" style={{ fontSize: '0.7rem' }}>
          <ShieldCheck size={12} />
          Secure Dashboard Environment
        </footer>
      </div>

      <style>{`
        .extra-small { font-size: 0.8rem; }
        .hover-lift:hover { transform: translateY(-2px); }
        .transition-all { transition: all 0.2s ease-in-out; }
      `}</style>
    </div>
  );
};

export default UserProfile;