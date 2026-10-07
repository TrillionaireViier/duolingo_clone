import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const languages = [
  { name: 'Spanish', flag: '🇪🇸' }, { name: 'French', flag: '🇫🇷' }, { name: 'Japanese', flag: '🇯🇵' },
  { name: 'German', flag: '🇩🇪' }, { name: 'Korean', flag: '🇰🇷' }, { name: 'Italian', flag: '🇮🇹' },
  { name: 'Hindi', flag: '🇮🇳' }, { name: 'Chinese', flag: '🇨🇳' }, { name: 'Russian', flag: '🇷🇺' },
  { name: 'Arabic', flag: '🇸🇦' }, { name: 'Portuguese', flag: '🇧🇷' }, { name: 'Turkish', flag: '🇹🇷' },
  { name: 'Dutch', flag: '🇳🇱' }, { name: 'Latin', flag: '🏛️' }, { name: 'Swedish', flag: '🇸🇪' },
  { name: 'Irish', flag: '🇮🇪' }, { name: 'Greek', flag: '🇬🇷' }, { name: 'Polish', flag: '🇵🇱' },
  { name: 'Norwegian', flag: '🇳🇴' }, { name: 'Hebrew', flag: '🇮🇱' }, { name: 'Vietnamese', flag: '🇻🇳' },
  { name: 'Hawaiian', flag: '🌺' }, { name: 'Danish', flag: '🇩🇰' }, { name: 'Indonesian', flag: '🇮🇩' },
  { name: 'High Valyrian', flag: '🐉' }, { name: 'Welsh', flag: '🏴󠁧󠁢󠁷󠁬󠁳󠁿' }, { name: 'Scottish', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿' },
  { name: 'Czech', flag: '🇨🇿' }, { name: 'Swahili', flag: '🇰🇪' }, { name: 'Romanian', flag: '🇷🇴' }
];

export default function Landing() {
  const [modalType, setModalType] = useState(null); // 'login' or 'signup'
  const navigate = useNavigate();

  const handleLanguageClick = (lang) => {
    navigate(`/learn?lang=${lang.name}&flag=${lang.flag}`);
  };

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    setModalType(null);
    navigate('/learn?lang=Spanish&flag=🇪🇸'); // Default fallback
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <header style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        padding: '15px 40px',
        alignItems: 'center'
      }}>
        <div style={{ color: 'var(--primary-green)', fontSize: '32px', fontWeight: '900', letterSpacing: '-1px' }}>
          giraffolingo
        </div>
        <div style={{ display: 'flex', gap: '15px' }}>
          <button style={{
            background: 'none', border: 'none', color: '#afafaf', fontWeight: '700', 
            fontSize: '15px', textTransform: 'uppercase', cursor: 'pointer'
          }}>
            Site Language: English
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <main style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '50px 20px' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '60px', flexWrap: 'wrap', justifyContent: 'center' }}>
          
          <img 
            src="/mascot.png" 
            alt="Giraffe Mascot" 
            style={{ width: '400px', height: 'auto', dropShadow: '0 20px 20px rgba(0,0,0,0.1)' }} 
          />
          
          <div style={{ maxWidth: '450px', textAlign: 'center' }}>
            <h1 style={{ 
              fontSize: '32px', 
              color: 'var(--text-dark)', 
              marginBottom: '40px',
              fontWeight: '800'
            }}>
              The free, fun, and effective way to learn a language!
            </h1>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', maxWidth: '330px', margin: '0 auto' }}>
              <button className="btn btn-primary" onClick={() => setModalType('signup')}>Get started</button>
              <button className="btn btn-outline" onClick={() => setModalType('login')}>I already have an account</button>
            </div>
          </div>
          
        </div>
      </main>

      {/* Languages Carousel / List */}
      <div style={{ borderTop: '2px solid var(--border-gray)', padding: '60px 0' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '40px', color: 'var(--text-light)', fontSize: '24px' }}>
          Explore 30+ Languages & Grammar Rules
        </h2>
        
        <div className="container" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
          gap: '20px'
        }}>
          {languages.map((lang, index) => (
            <div key={index} 
            onClick={() => handleLanguageClick(lang)}
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '10px',
              padding: '12px',
              borderRadius: '12px',
              cursor: 'pointer',
              transition: 'background 0.2s',
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-gray)'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <span style={{ fontSize: '24px' }}>{lang.flag}</span>
              <span style={{ fontWeight: '700', color: '#4b4b4b' }}>{lang.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Auth Modals */}
      {modalType && (
        <div className="modal-backdrop" onClick={() => setModalType(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setModalType(null)}>✕</button>
            <h2 style={{ color: 'var(--text-dark)', fontWeight: '800' }}>
              {modalType === 'login' ? 'Log in' : 'Create your profile'}
            </h2>
            
            <form className="auth-form" onSubmit={handleAuthSubmit}>
              {modalType === 'signup' && (
                <input type="text" placeholder="Age" className="auth-input" required />
              )}
              {modalType === 'signup' && (
                <input type="text" placeholder="Name (optional)" className="auth-input" />
              )}
              <input type="email" placeholder="Email" className="auth-input" required />
              <input type="password" placeholder="Password" className="auth-input" required />
              
              <button type="submit" className="btn btn-primary" style={{ marginTop: '10px', width: '100%' }}>
                {modalType === 'login' ? 'Log in' : 'Create account'}
              </button>
            </form>

            <div className="auth-switch">
              {modalType === 'login' ? "Don't have an account? " : "Already have an account? "}
              <span onClick={() => setModalType(modalType === 'login' ? 'signup' : 'login')}>
                {modalType === 'login' ? 'Sign up' : 'Log in'}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
