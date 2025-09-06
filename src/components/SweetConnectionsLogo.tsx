'use client';

interface SweetConnectionsLogoProps {
  size?: number;
  className?: string;
  primaryColor?: string;
  secondaryColor?: string;
}

export function SweetConnectionsLogo({ 
  size = 48, 
  className = '', 
  primaryColor = '#CD853F',
  secondaryColor = '#8B4513'
}: SweetConnectionsLogoProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Definir gradientes */}
      <defs>
        <linearGradient id={`sweetGradient-${size}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF8E7" />
          <stop offset="50%" stopColor="#F5E6CC" />
          <stop offset="100%" stopColor="#FAD7B6" />
        </linearGradient>
        
        <linearGradient id={`cakeGradient-${size}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={primaryColor} />
          <stop offset="100%" stopColor={secondaryColor} />
        </linearGradient>
        
        <filter id={`shadow-${size}`} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="2" dy="2" stdDeviation="3" floodOpacity="0.3"/>
        </filter>
      </defs>
      
      {/* Fondo circular elegante */}
      <circle 
        cx="50" 
        cy="50" 
        r="47" 
        fill={`url(#sweetGradient-${size})`} 
        stroke={primaryColor}
        strokeWidth="2"
        filter={`url(#shadow-${size})`}
      />
      
      {/* Base del pastel (sombra) */}
      <ellipse cx="50" cy="75" rx="25" ry="6" fill={secondaryColor} opacity="0.2" />
      
      {/* Cuerpo del pastel - 3 niveles */}
      {/* Nivel inferior */}
      <rect x="25" y="60" width="50" height="15" rx="4" fill={`url(#cakeGradient-${size})`} />
      <rect x="27" y="62" width="46" height="3" rx="2" fill="#FFFFFF" opacity="0.5" />
      <circle cx="35" cy="67" r="1.5" fill="#FFD700" opacity="0.8" />
      <circle cx="45" cy="65" r="1.5" fill="#FFD700" opacity="0.8" />
      <circle cx="55" cy="67" r="1.5" fill="#FFD700" opacity="0.8" />
      <circle cx="65" cy="65" r="1.5" fill="#FFD700" opacity="0.8" />
      
      {/* Nivel medio */}
      <rect x="30" y="45" width="40" height="15" rx="4" fill={`url(#cakeGradient-${size})`} />
      <rect x="32" y="47" width="36" height="3" rx="2" fill="#FFFFFF" opacity="0.5" />
      <circle cx="40" cy="52" r="1.5" fill="#FFD700" opacity="0.8" />
      <circle cx="50" cy="50" r="1.5" fill="#FFD700" opacity="0.8" />
      <circle cx="60" cy="52" r="1.5" fill="#FFD700" opacity="0.8" />
      
      {/* Nivel superior */}
      <rect x="35" y="30" width="30" height="15" rx="4" fill={`url(#cakeGradient-${size})`} />
      <rect x="37" y="32" width="26" height="3" rx="2" fill="#FFFFFF" opacity="0.5" />
      <circle cx="45" cy="37" r="1.5" fill="#FFD700" opacity="0.8" />
      <circle cx="55" cy="37" r="1.5" fill="#FFD700" opacity="0.8" />
      
      {/* Cereza en la parte superior con tallo */}
      <circle cx="50" cy="25" r="4" fill="#DC2626" />
      <circle cx="50" cy="25" r="3" fill="#EF4444" />
      <path d="M50 21 Q52 18 54 20" stroke="#16A34A" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      
      {/* Líneas de conexión (networking) */}
      <g opacity="0.7">
        <path 
          d="M15 25 Q25 15 35 20" 
          stroke={primaryColor} 
          strokeWidth="2" 
          fill="none"
          strokeDasharray="4,3"
        />
        <path 
          d="M65 20 Q75 15 85 25" 
          stroke={primaryColor} 
          strokeWidth="2" 
          fill="none"
          strokeDasharray="4,3"
        />
        <path 
          d="M15 75 Q25 85 35 80" 
          stroke={primaryColor} 
          strokeWidth="2" 
          fill="none"
          strokeDasharray="4,3"
        />
        <path 
          d="M65 80 Q75 85 85 75" 
          stroke={primaryColor} 
          strokeWidth="2" 
          fill="none"
          strokeDasharray="4,3"
        />
      </g>
      
      {/* Puntos de conexión */}
      <circle cx="15" cy="25" r="3" fill={primaryColor} />
      <circle cx="85" cy="25" r="3" fill={primaryColor} />
      <circle cx="15" cy="75" r="3" fill={primaryColor} />
      <circle cx="85" cy="75" r="3" fill={primaryColor} />
      
      {/* Detalles adicionales - brillos */}
      <circle cx="40" cy="30" r="2" fill="#FFFFFF" opacity="0.6" />
      <circle cx="60" cy="35" r="2" fill="#FFFFFF" opacity="0.6" />
      <ellipse cx="50" cy="55" rx="8" ry="2" fill="#FFFFFF" opacity="0.3" />
    </svg>
  );
}

// Logo simplificado para espacios pequeños
export function SweetConnectionsLogoMini({ 
  size = 24, 
  className = '', 
  primaryColor = '#CD853F',
  secondaryColor = '#8B4513'
}: { 
  size?: number; 
  className?: string; 
  primaryColor?: string;
  secondaryColor?: string;
}) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 48 48" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={`miniGradient-${size}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF8E7" />
          <stop offset="100%" stopColor="#F5E6CC" />
        </linearGradient>
        <linearGradient id={`miniCake-${size}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={primaryColor} />
          <stop offset="100%" stopColor={secondaryColor} />
        </linearGradient>
      </defs>
      
      {/* Fondo */}
      <circle cx="24" cy="24" r="22" fill={`url(#miniGradient-${size})`} stroke={primaryColor} strokeWidth="2" />
      
      {/* Pastel simplificado */}
      <rect x="14" y="28" width="20" height="8" rx="3" fill={`url(#miniCake-${size})`} />
      <rect x="16" y="22" width="16" height="6" rx="2" fill={`url(#miniCake-${size})`} />
      <rect x="18" y="16" width="12" height="6" rx="2" fill={`url(#miniCake-${size})`} />
      
      {/* Cereza */}
      <circle cx="24" cy="13" r="2.5" fill="#DC2626" />
      <path d="M24 10 Q25 8 26 10" stroke="#16A34A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      
      {/* Conexiones minimalistas */}
      <g opacity="0.6">
        <path d="M6 14 L14 18" stroke={primaryColor} strokeWidth="1.5" strokeDasharray="2,1" />
        <path d="M34 18 L42 14" stroke={primaryColor} strokeWidth="1.5" strokeDasharray="2,1" />
        <path d="M6 34 L14 30" stroke={primaryColor} strokeWidth="1.5" strokeDasharray="2,1" />
        <path d="M34 30 L42 34" stroke={primaryColor} strokeWidth="1.5" strokeDasharray="2,1" />
      </g>
      
      {/* Puntos de conexión */}
      <circle cx="6" cy="14" r="2" fill={primaryColor} />
      <circle cx="42" cy="14" r="2" fill={primaryColor} />
      <circle cx="6" cy="34" r="2" fill={primaryColor} />
      <circle cx="42" cy="34" r="2" fill={primaryColor} />
    </svg>
  );
}

// Componente de solo el icono SVG para usar en el public folder si es necesario
export function SweetConnectionsIcon() {
  return (
    <svg 
      width="32" 
      height="32" 
      viewBox="0 0 32 32" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#CD853F" />
          <stop offset="100%" stopColor="#8B4513" />
        </linearGradient>
      </defs>
      
      {/* Fondo */}
      <rect width="32" height="32" rx="8" fill="url(#iconGradient)" />
      
      {/* Pastel simplificado */}
      <rect x="8" y="20" width="16" height="6" rx="2" fill="#FFF8E7" />
      <rect x="10" y="16" width="12" height="4" rx="1" fill="#FFF8E7" />
      <rect x="12" y="12" width="8" height="4" rx="1" fill="#FFF8E7" />
      
      {/* Cereza */}
      <circle cx="16" cy="9" r="1.5" fill="#DC2626" />
      
      {/* Chispitas */}
      <circle cx="12" cy="18" r="0.5" fill="#FFD700" />
      <circle cx="20" cy="18" r="0.5" fill="#FFD700" />
      <circle cx="14" cy="14" r="0.5" fill="#FFD700" />
      <circle cx="18" cy="14" r="0.5" fill="#FFD700" />
    </svg>
  );
}