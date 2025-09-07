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
  const uniqueId = `logo-${Math.random().toString(36).substr(2, 9)}`;

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
        <linearGradient id={`sweetGradient-${uniqueId}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF8E7" />
          <stop offset="50%" stopColor="#F5E6CC" />
          <stop offset="100%" stopColor="#FAD7B6" />
        </linearGradient>

        <linearGradient id={`candyGradient-${uniqueId}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={primaryColor} />
          <stop offset="100%" stopColor={secondaryColor} />
        </linearGradient>

        <linearGradient id={`textGradient-${uniqueId}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={primaryColor} />
          <stop offset="50%" stopColor={secondaryColor} />
          <stop offset="100%" stopColor="#A0522D" />
        </linearGradient>

        <filter id={`shadow-${uniqueId}`} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="2" dy="2" stdDeviation="3" floodOpacity="0.3" />
        </filter>

        {/* Path curvo para el texto */}
        {/* Path arco inferior del círculo exterior */}
        <path
          id={`textPath-${uniqueId}`}
          d="
            M 5,50
            A 45,45 0 0,0 95,50
          "
          fill="none"
        />

      </defs>

      {/* Fondo circular elegante */}
      <circle
        cx="50"
        cy="50"
        r="47"
        fill={`url(#sweetGradient-${uniqueId})`}
        stroke={primaryColor}
        strokeWidth="2"
        filter={`url(#shadow-${uniqueId})`}
      />

      {/* Paleta principal - círculo exterior */}
      <circle cx="50" cy="45" r="18" fill="#FF6B9D" />
      <circle cx="50" cy="45" r="15" fill="#FF69B4" />
      <circle cx="50" cy="45" r="12" fill="#FF1493" />

      {/* Espiral de la paleta */}
      <path
        d="M50 33 Q62 33 62 45 Q62 57 50 57 Q38 57 38 45 Q38 39 44 39 Q50 39 50 45 Q50 48 48 48"
        stroke="#FFFFFF"
        strokeWidth="2.5"
        fill="none"
        opacity="0.9"
        strokeLinecap="round"
      />

      {/* Palito de la paleta */}
      <rect x="48.5" y="63" width="3" height="22" fill="#D2691E" />
      <rect x="49" y="63" width="2" height="22" fill="#CD853F" />

      {/* Sombra del palito */}
      <ellipse cx="50" cy="63" rx="2" ry="1.5" fill="#8B4513" />

      {/* Brillo en la paleta */}
      <ellipse cx="45" cy="38" rx="3" ry="2" fill="#FFFFFF" opacity="0.6" />
      <circle cx="52" cy="41" r="1.5" fill="#FFFFFF" opacity="0.4" />

      {/* Líneas de conexión (networking) más sutiles */}
      <g opacity="0.6">
        <path
          d="M20 25 Q28 18 38 22"
          stroke={primaryColor}
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="3,2"
        />
        <path
          d="M62 22 Q72 18 80 25"
          stroke={primaryColor}
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="3,2"
        />
        <path
          d="M20 75 Q28 82 38 78"
          stroke={primaryColor}
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="3,2"
        />
        <path
          d="M62 78 Q72 82 80 75"
          stroke={primaryColor}
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="3,2"
        />
      </g>

      {/* Puntos de conexión */}
      <circle cx="20" cy="25" r="2.5" fill={primaryColor} />
      <circle cx="80" cy="25" r="2.5" fill={primaryColor} />
      <circle cx="20" cy="75" r="2.5" fill={primaryColor} />
      <circle cx="80" cy="75" r="2.5" fill={primaryColor} />

      {/* Detalles adicionales - brillos */}
      <circle cx="35" cy="30" r="1.5" fill="#FFFFFF" opacity="0.5" />
      <circle cx="65" cy="30" r="1.5" fill="#FFFFFF" opacity="0.5" />
      <ellipse cx="50" cy="55" rx="8" ry="2" fill="#FFFFFF" opacity="0.3" />

      {/* Texto curvo "Sweet Connections" */}
      {/* Sombra del texto curvo */}
      <text fontSize="6.5" fontFamily="'Segoe UI', Arial, sans-serif" fill="#00000015" fontWeight="600" letterSpacing="0.8px">
        <textPath href={`#textPath-${uniqueId}`} startOffset="50%" textAnchor="middle" dy="1">
          Sweet Connections
        </textPath>
      </text>

      <text fontSize="6.5" fontFamily="'Segoe UI', Arial, sans-serif" fill={`url(#textGradient-${uniqueId})`} fontWeight="600" letterSpacing="0.8px">
        <textPath href={`#textPath-${uniqueId}`} startOffset="50%" textAnchor="middle">
          Sweet Connections
        </textPath>
      </text>
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
  const uniqueId = `mini-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={`miniGradient-${uniqueId}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF8E7" />
          <stop offset="100%" stopColor="#F5E6CC" />
        </linearGradient>
        <linearGradient id={`miniCandy-${uniqueId}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={primaryColor} />
          <stop offset="100%" stopColor={secondaryColor} />
        </linearGradient>

        {/* Path curvo para texto mini */}
        <path
          id={`miniTextPath-${uniqueId}`}
          d="M 8 40 Q 24 44 40 40"
          fill="none"
        />
      </defs>

      {/* Fondo */}
      <circle cx="24" cy="24" r="22" fill={`url(#miniGradient-${uniqueId})`} stroke={primaryColor} strokeWidth="1.5" />

      {/* Paleta mini */}
      <circle cx="24" cy="22" r="9" fill="#FF6B9D" />
      <circle cx="24" cy="22" r="7" fill="#FF69B4" />
      <circle cx="24" cy="22" r="5" fill="#FF1493" />

      {/* Espiral mini */}
      <path
        d="M24 16 Q29 16 29 22 Q29 28 24 28 Q19 28 19 22 Q19 20 21 20 Q24 20 24 22"
        stroke="#FFFFFF"
        strokeWidth="1.2"
        fill="none"
        opacity="0.9"
        strokeLinecap="round"
      />

      {/* Palito mini */}
      <rect x="23" y="31" width="2" height="10" fill="#D2691E" />
      <rect x="23.3" y="31" width="1.4" height="10" fill="#CD853F" />

      {/* Brillo mini */}
      <ellipse cx="22" cy="19" rx="1.5" ry="1" fill="#FFFFFF" opacity="0.6" />

      {/* Conexiones minimalistas */}
      <g opacity="0.5">
        <path d="M8 16 L14 18" stroke={primaryColor} strokeWidth="1" strokeDasharray="2,1" />
        <path d="M34 18 L40 16" stroke={primaryColor} strokeWidth="1" strokeDasharray="2,1" />
        <path d="M8 32 L14 30" stroke={primaryColor} strokeWidth="1" strokeDasharray="2,1" />
        <path d="M34 30 L40 32" stroke={primaryColor} strokeWidth="1" strokeDasharray="2,1" />
      </g>

      {/* Puntos de conexión */}
      <circle cx="8" cy="16" r="1.5" fill={primaryColor} />
      <circle cx="40" cy="16" r="1.5" fill={primaryColor} />
      <circle cx="8" cy="32" r="1.5" fill={primaryColor} />
      <circle cx="40" cy="32" r="1.5" fill={primaryColor} />

      {/* Texto curvo "Sweet Connections" para mini */}
      <text fontSize="3" fontFamily="'Segoe UI', sans-serif" fill={primaryColor} fontWeight="600" letterSpacing="0.4px">
        <textPath href={`#miniTextPath-${uniqueId}`} startOffset="50%" textAnchor="middle">
          Sweet Connections
        </textPath>
      </text>
    </svg>
  );
}

// Componente de solo el icono SVG para usar como favicon
export function SweetConnectionsIcon({
  size = 32,
  primaryColor = '#CD853F',
  secondaryColor = '#8B4513'
}: {
  size?: number;
  primaryColor?: string;
  secondaryColor?: string;
}) {
  const uniqueId = `icon-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={`iconBgGradient-${uniqueId}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF8E7" />
          <stop offset="100%" stopColor="#F5E6CC" />
        </linearGradient>

        <linearGradient id={`iconGradient-${uniqueId}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={primaryColor} />
          <stop offset="100%" stopColor={secondaryColor} />
        </linearGradient>

        {/* Path curvo para texto icono */}
        <path
          id={`iconTextPath-${uniqueId}`}
          d="M 4 26 Q 16 29 28 26"
          fill="none"
        />
      </defs>

      {/* Fondo con borde redondeado */}
      <rect width="32" height="32" rx="6" fill={`url(#iconBgGradient-${uniqueId})`} stroke={primaryColor} strokeWidth="1" />

      {/* Paleta icono */}
      <circle cx="16" cy="15" r="6" fill="#FF6B9D" />
      <circle cx="16" cy="15" r="4.5" fill="#FF69B4" />
      <circle cx="16" cy="15" r="3" fill="#FF1493" />

      {/* Espiral icono */}
      <path
        d="M16 11 Q19 11 19 15 Q19 19 16 19 Q13 19 13 15 Q13 14 14 14 Q16 14 16 15"
        stroke="#FFFFFF"
        strokeWidth="0.8"
        fill="none"
        opacity="0.9"
        strokeLinecap="round"
      />

      {/* Palito icono */}
      <rect x="15.2" y="21" width="1.6" height="6" fill="#D2691E" />
      <rect x="15.4" y="21" width="1.2" height="6" fill="#CD853F" />

      {/* Brillo icono */}
      <ellipse cx="14.5" cy="13" rx="1" ry="0.7" fill="#FFFFFF" opacity="0.6" />

      {/* Texto circular "Sweet Connections" bordeando el icono */}
      <text fontSize="1.8" fontFamily="'Segoe UI', sans-serif" fill={`url(#iconGradient-${uniqueId})`} fontWeight="600" letterSpacing="0.4px">
        <textPath href={`#iconTextPath-${uniqueId}`} startOffset="50%" textAnchor="middle">
          Sweet Connections
        </textPath>
      </text>
    </svg>
  );
}