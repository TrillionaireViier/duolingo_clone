import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Book, Medal, User, MoreHorizontal, Zap } from 'lucide-react';

export default function Learn() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const lang = queryParams.get('lang') || 'Spanish';
  const flag = queryParams.get('flag') || '🇪🇸';

  const unitColors = [
    'var(--primary-green)',
    'var(--secondary-blue)',
    '#CE82FF', // Purple
    '#FF9600', // Orange
    '#FF4B4B'  // Red
  ];

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      
      {/* Sidebar */}
      <aside style={{ 
        width: '250px', 
        borderRight: '2px solid var(--border-gray)',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <div style={{ color: 'var(--primary-green)', fontSize: '28px', fontWeight: '900', marginBottom: '40px', paddingLeft: '15px' }}>
          giraffolingo
        </div>

        <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <SidebarItem icon={<Home size={28}/>} label="Learn" active />
          <SidebarItem icon={<Book size={28}/>} label="Grammar Rules" />
          <SidebarItem icon={<Medal size={28}/>} label="Leaderboards" />
          <SidebarItem icon={<User size={28}/>} label="Profile" />
          <SidebarItem icon={<MoreHorizontal size={28}/>} label="More" />
        </nav>
      </aside>

      {/* Main Content Area */}
      <main style={{ flex: 1, overflowY: 'auto', padding: '0 40px' }}>
        
        {/* Top bar */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          padding: '20px 0',
          borderBottom: '2px solid var(--border-gray)',
          gap: '30px'
        }}>
          <StatBadge icon={flag} text={lang} />
          <StatBadge icon="🔥" text="12" color="#FF9600" />
          <StatBadge icon="💎" text="450" color="#1CB0F6" />
          <StatBadge icon="❤️" text="5" color="#FF4B4B" />
        </div>

        {/* Path / Map */}
        <div style={{ maxWidth: '600px', margin: '40px auto', display: 'flex', flexDirection: 'column', gap: '30px', alignItems: 'center' }}>
          
          {Array.from({ length: 90 }).map((_, i) => {
            const unitNumber = i + 1;
            const bgColor = unitColors[i % unitColors.length];
            return (
              <div key={unitNumber} style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '30px', alignItems: 'center', marginBottom: '40px' }}>
                <div style={{
                  background: bgColor,
                  color: 'white',
                  padding: '20px',
                  borderRadius: '16px',
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div>
                    <h2 style={{ fontSize: '22px', marginBottom: '5px' }}>Unit {unitNumber}</h2>
                    <p style={{ fontSize: '15px' }}>Form basic sentences, greet people in {lang}</p>
                  </div>
                  <Link to="/" className="btn" style={{ background: 'white', color: bgColor }}>Guidebook</Link>
                </div>

                {/* Nodes pattern per unit */}
                <LessonNode icon={<Zap fill={i === 0 ? "white" : "transparent"} />} active={i === 0} offset={0} color={bgColor} />
                <LessonNode icon={<Zap />} offset={-40} color={bgColor} />
                <LessonNode icon={<Zap />} offset={-60} color={bgColor} />
                <LessonNode icon={<Book />} offset={-30} color={bgColor} />
                <LessonNode icon={<Zap />} offset={20} color={bgColor} />
                <LessonNode icon={<Zap />} offset={50} color={bgColor} />
                <LessonNode icon={<Book />} offset={10} color={bgColor} />
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

function SidebarItem({ icon, label, active }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
      padding: '12px 15px',
      borderRadius: '12px',
      cursor: 'pointer',
      color: active ? 'var(--secondary-blue)' : 'var(--text-dark)',
      backgroundColor: active ? '#DDF4FF' : 'transparent',
      border: active ? '2px solid #84D8FF' : '2px solid transparent',
      fontWeight: '700',
      textTransform: 'uppercase',
      fontSize: '14px',
      letterSpacing: '1px'
    }}>
      {icon}
      <span>{label}</span>
    </div>
  );
}

function StatBadge({ icon, text, color = 'var(--text-light)' }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '700', fontSize: '15px', color, cursor: 'pointer' }}>
      <span style={{ fontSize: '20px' }}>{icon}</span>
      <span>{text}</span>
    </div>
  );
}

function LessonNode({ icon, active, offset, color = 'var(--primary-green)' }) {
  // We approximate a shadow color by just using the base color or a generic shadow if inactive
  const shadowColor = active ? 'rgba(0,0,0,0.2)' : '#D4D4D4';
  
  return (
    <div style={{ 
      transform: `translateX(${offset}px)`,
      position: 'relative'
    }}>
      <div style={{
        width: '70px',
        height: '70px',
        borderRadius: '50%',
        backgroundColor: active ? color : 'var(--border-gray)',
        boxShadow: `0 8px 0 ${shadowColor}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: active ? 'white' : '#AFAFAF',
        cursor: 'pointer',
        transition: 'transform 0.1s',
      }}
      onMouseDown={(e) => {
        e.currentTarget.style.transform = 'translateY(4px)';
        e.currentTarget.style.boxShadow = 'none';
      }}
      onMouseUp={(e) => {
        e.currentTarget.style.transform = 'none';
        e.currentTarget.style.boxShadow = `0 8px 0 ${shadowColor}`;
      }}
      >
        {icon}
      </div>
    </div>
  );
}
