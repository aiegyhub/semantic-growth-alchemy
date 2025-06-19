
import React from 'react';

interface CustomServiceIconProps {
  serviceName: string;
  className?: string;
  size?: number;
}

const CustomServiceIcon: React.FC<CustomServiceIconProps> = ({ 
  serviceName, 
  className = "",
  size = 48 
}) => {
  
  const getServiceIcon = (service: string) => {
    const normalizedService = service.toLowerCase().replace(/[^a-z]/g, '');
    
    const iconStyle = {
      width: size,
      height: size,
      borderRadius: '12px',
      padding: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
      transition: 'all 0.3s ease'
    };

    // Custom SVG icons for different services
    const icons: Record<string, JSX.Element> = {
      'acservices': (
        <svg viewBox="0 0 24 24" fill="none" style={{ width: '60%', height: '60%' }}>
          <path d="M6 12L8 10L10 12L14 8L18 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 18H21V20H3V18Z" fill="white"/>
          <circle cx="12" cy="6" r="2" fill="white"/>
        </svg>
      ),
      'plumbing': (
        <svg viewBox="0 0 24 24" fill="none" style={{ width: '60%', height: '60%' }}>
          <path d="M14 14L10 10L12 8L16 12L14 14Z" fill="white"/>
          <path d="M8 16L4 20L2 18L6 14L8 16Z" fill="white"/>
          <circle cx="18" cy="6" r="3" stroke="white" strokeWidth="2" fill="none"/>
        </svg>
      ),
      'electrical': (
        <svg viewBox="0 0 24 24" fill="none" style={{ width: '60%', height: '60%' }}>
          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="white"/>
        </svg>
      ),
      'cleaning': (
        <svg viewBox="0 0 24 24" fill="none" style={{ width: '60%', height: '60%' }}>
          <path d="M12 2L15 8H21L16 12L18 20L12 16L6 20L8 12L3 8H9L12 2Z" fill="white"/>
          <circle cx="12" cy="14" r="2" fill="rgba(255,255,255,0.8)"/>
        </svg>
      ),
      'pestcontrol': (
        <svg viewBox="0 0 24 24" fill="none" style={{ width: '60%', height: '60%' }}>
          <ellipse cx="12" cy="8" rx="6" ry="4" fill="white"/>
          <ellipse cx="12" cy="16" rx="4" ry="3" fill="white"/>
          <circle cx="8" cy="8" r="1" fill="#667eea"/>
          <circle cx="16" cy="8" r="1" fill="#667eea"/>
        </svg>
      ),
      'watertank': (
        <svg viewBox="0 0 24 24" fill="none" style={{ width: '60%', height: '60%' }}>
          <rect x="6" y="8" width="12" height="12" rx="2" fill="white"/>
          <path d="M8 8V6C8 4.9 8.9 4 10 4H14C15.1 4 16 4.9 16 6V8" stroke="#667eea" strokeWidth="2" fill="none"/>
          <path d="M8 12H16" stroke="#667eea" strokeWidth="1"/>
          <path d="M8 16H16" stroke="#667eea" strokeWidth="1"/>
        </svg>
      ),
      'carpentry': (
        <svg viewBox="0 0 24 24" fill="none" style={{ width: '60%', height: '60%' }}>
          <path d="M6 6L18 18" stroke="white" strokeWidth="2"/>
          <path d="M4 8L8 4L12 8L8 12L4 8Z" fill="white"/>
          <path d="M16 12L20 16L16 20L12 16L16 12Z" fill="white"/>
        </svg>
      ),
      'painting': (
        <svg viewBox="0 0 24 24" fill="none" style={{ width: '60%', height: '60%' }}>
          <path d="M8 4H16V12L12 16L8 12V4Z" fill="white"/>
          <rect x="10" y="16" width="4" height="6" fill="white"/>
          <circle cx="12" cy="7" r="1" fill="#667eea"/>
        </svg>
      )
    };

    return icons[normalizedService] || icons['acservices'];
  };

  return (
    <div 
      className={`service-icon ${className}`}
      style={{
        ...{
          width: size,
          height: size,
          borderRadius: '12px',
          padding: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          transition: 'all 0.3s ease',
          cursor: 'pointer'
        }
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.25)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
      }}
    >
      {getServiceIcon(serviceName)}
    </div>
  );
};

export default CustomServiceIcon;
