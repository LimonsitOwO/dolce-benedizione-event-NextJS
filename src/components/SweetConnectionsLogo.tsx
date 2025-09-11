'use client';

import { useTheme } from "@/contexts/ThemeContext";


interface SweetConnectionsLogoProps {
  size?: number;
  className?: string;
  palette?: 'blue' | 'orange' | 'pink';
}

export function SweetConnectionsLogo({
  size = 120,
  className = '',
  palette = 'blue'
}: SweetConnectionsLogoProps) {
  const { currentTheme } = useTheme();
  const uniqueId = `logo-${Math.random().toString(36).substr(2, 9)}`;

  // Definir las tres paletas de colores (mantenemos las originales para las paletas)
  const palettes = {
    blue: {
      primary: '#6BCEFF',
      secondary: '#69B7FF',
      accent: '#14B9FF'
    },
    orange: {
      primary: '#FF9F6B',
      secondary: '#FFAF69',
      accent: '#FF6E14'
    },
    pink: {
      primary: '#FF6B9D',
      secondary: '#FF69B4',
      accent: '#FF1493'
    }
  };

  const colors = palettes[palette];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 140"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Gradiente de fondo usando colores del tema */}
        <linearGradient id={`paint0_linear_${uniqueId}`} x1="3.59961" y1="3.59998" x2="116.4" y2="116.4" gradientUnits="userSpaceOnUse">
          <stop stopColor={currentTheme.colors.primary} />
          <stop offset="0.5" stopColor={currentTheme.colors.secondary} />
          <stop offset="1" stopColor={currentTheme.colors.accent} />
        </linearGradient>

        {/* Sombra para texto */}
        <filter id={`shadow_${uniqueId}`} x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="1" dy="1" stdDeviation="2" floodOpacity="0.3" />
        </filter>

        {/* Camino curvo para el texto - perfectamente curvado */}
        <path
          id={`textPath_${uniqueId}`}
          d="M 15,125 Q 60,115 105,125"
          fill="none"
        />
      </defs>

      {/* Círculo de fondo - usando colores del tema */}
      <path
        d="M59.9996 116.4C91.1485 116.4 116.4 91.1488 116.4 60C116.4 28.8511 91.1485 3.59998 59.9996 3.59998C28.8507 3.59998 3.59961 28.8511 3.59961 60C3.59961 91.1488 28.8507 116.4 59.9996 116.4Z"
        fill={`url(#paint0_linear_${uniqueId})`}
        stroke={currentTheme.colors.border}
        strokeWidth="2.4"
      />

      {/* Paleta izquierda (azul por defecto) */}
      <path
        d="M77.8686 66.7727C94.6974 69.9926 110.95 58.9604 114.17 42.1316C117.39 25.3028 106.358 9.05005 89.5289 5.83015C72.7001 2.61025 56.4474 13.6425 53.2275 30.4713C50.0076 47.3001 61.0398 63.5528 77.8686 66.7727Z"
        fill={colors.primary}
      />
      <path
        d="M78.8389 61.694C92.8629 64.3773 106.407 55.1838 109.09 41.1598C111.773 27.1357 102.58 13.5918 88.5558 10.9086C74.5318 8.22531 60.9879 17.4188 58.3046 31.4428C55.6214 45.4669 64.8149 59.0108 78.8389 61.694Z"
        fill={colors.secondary}
      />
      <path
        d="M79.8092 56.6153C91.0284 58.7619 101.864 51.4071 104.01 40.1879C106.157 28.9687 98.802 18.1335 87.5827 15.9869C76.3635 13.8403 65.5284 21.1951 63.3818 32.4143C61.2352 43.6336 68.59 54.4687 79.8092 56.6153Z"
        fill={colors.accent}
      />

      {/* Detalle en espiral - paleta izquierda */}
      <path
        opacity="0.9"
        d="M87.5827 15.9869C101.126 18.5781 106.601 26.6451 104.01 40.1879C101.419 53.7307 93.352 59.2065 79.8092 56.6153C66.2664 54.0241 60.7906 45.9571 63.3818 32.4143C64.6774 25.6429 68.7109 22.905 75.4823 24.2006C82.2537 25.4962 84.9916 29.5297 83.696 36.3011C83.0482 39.6868 81.5957 41.1637 79.3386 40.7319"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Palito izquierdo */}
      <path d="M80.4067 67.2584L75.3281 66.2867L68.2024 103.529L73.2809 104.501L80.4067 67.2584Z" fill={currentTheme.colors.dark} />
      <path d="M79.5595 67.0965L76.1738 66.4487L69.0481 103.691L72.4338 104.339L79.5595 67.0965Z" fill={currentTheme.colors.border} />
      <path d="M77.3808 69.3118C79.2507 69.6696 80.984 68.8227 81.2523 67.4203C81.5207 66.0179 80.2224 64.591 78.3525 64.2332C76.4826 63.8755 74.7493 64.7223 74.481 66.1247C74.2126 67.5271 75.5109 68.954 77.3808 69.3118Z" fill={currentTheme.colors.textSecondary} />

      {/* Puntos decorativos izquierda */}
      <path opacity="0.6" d="M76.8542 26.2177C79.6591 26.7543 82.2228 25.6736 82.5806 23.8037C82.9384 21.9338 80.9546 19.983 78.1498 19.4463C75.345 18.9097 72.7813 19.9904 72.4235 21.8603C72.0657 23.7302 74.0494 25.681 76.8542 26.2177Z" fill="white" />
      <path opacity="0.4" d="M87.8918 32.7169C89.2942 32.9852 90.6486 32.0659 90.9169 30.6635C91.1852 29.2611 90.2659 27.9067 88.8635 27.6384C87.4611 27.37 86.1067 28.2894 85.8384 29.6918C85.57 31.0942 86.4894 32.4486 87.8918 32.7169Z" fill="white" />
      <path opacity="0.3" d="M79.8117 56.6156C87.2911 58.0466 93.6445 57.6909 94.0022 55.821C94.36 53.9512 88.5867 51.2752 81.1072 49.8442C73.6278 48.4131 67.2744 48.7688 66.9167 50.6387C66.5589 52.5086 72.3322 55.1845 79.8117 56.6156Z" fill="white" />

      {/* Paleta derecha (naranja) */}
      <path
        d="M42.13 66.7722C58.9589 63.5528 69.9916 47.3004 66.7722 30.4715C63.5527 13.6425 47.3004 2.60987 30.4714 5.82929C13.6425 9.04871 2.60986 25.3011 5.82928 42.13C9.0487 58.9589 25.3011 69.9916 42.13 66.7722Z"
        fill="#FF9F6B"
      />
      <path
        d="M41.1581 61.6936C55.1822 59.0108 64.3761 45.4671 61.6933 31.443C59.0104 17.4189 45.4668 8.22504 31.4427 10.9079C17.4186 13.5907 8.22468 27.1344 10.9075 41.1585C13.5904 55.1826 27.134 64.3765 41.1581 61.6936Z"
        fill="#FFAF69"
      />
      <path
        d="M40.1853 56.6152C51.4046 54.4689 58.7597 43.6339 56.6134 32.4147C54.4671 21.1954 43.6322 13.8403 32.4129 15.9866C21.1937 18.1328 13.8385 28.9678 15.9848 40.187C18.1311 51.4063 28.966 58.7614 40.1853 56.6152Z"
        fill="#FF6E14"
      />

      {/* Detalle en espiral - paleta derecha */}
      <path
        opacity="0.9"
        d="M32.4129 15.9866C45.9558 13.3958 54.0226 18.8718 56.6134 32.4147C59.2042 45.9575 53.7282 54.0244 40.1853 56.6152C26.6424 59.2059 18.5756 53.7299 15.9848 40.187C14.6894 33.4156 17.4274 29.3822 24.1989 28.0868C30.9703 26.7914 35.0037 29.5294 36.2991 36.3009C36.9468 39.6866 36.1421 41.5953 33.8849 42.0271"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Palito derecho */}
      <path d="M44.6694 66.2863L39.5908 67.2579L46.7155 104.501L51.7941 103.529L44.6694 66.2863Z" fill={currentTheme.colors.dark} />
      <path d="M43.8222 66.4483L40.4365 67.096L47.5612 104.339L50.9469 103.691L43.8222 66.4483Z" fill={currentTheme.colors.border} />
      <path d="M42.6141 69.3116C44.484 68.9538 45.7823 67.527 45.514 66.1246C45.2458 64.7222 43.5124 63.8753 41.6426 64.233C39.7727 64.5907 38.4743 66.0176 38.7426 67.42C39.0109 68.8224 40.7442 69.6693 42.6141 69.3116Z" fill={currentTheme.colors.textSecondary} />

      {/* Puntos decorativos derecha */}
      <path opacity="0.6" d="M26.2167 29.4557C29.0216 28.9191 31.0053 26.9683 30.6476 25.0984C30.2899 23.2286 27.7262 22.1477 24.9213 22.6843C22.1165 23.2208 20.1328 25.1717 20.4905 27.0415C20.8482 28.9114 23.4119 29.9923 26.2167 29.4557Z" fill="white" />
      <path opacity="0.4" d="M38.8751 31.4211C40.2775 31.1528 41.1969 29.7985 40.9286 28.396C40.6603 26.9936 39.306 26.0743 37.9035 26.3425C36.5011 26.6108 35.5817 27.9652 35.85 29.3676C36.1183 30.77 37.4727 31.6894 38.8751 31.4211Z" fill="white" />
      <path opacity="0.3" d="M40.1869 56.615C47.6664 55.1841 53.4398 52.5083 53.0821 50.6385C52.7243 48.7686 46.371 48.4127 38.8915 49.8435C31.412 51.2744 25.6386 53.9502 25.9963 55.82C26.354 57.6899 32.7074 58.0458 40.1869 56.615Z" fill="white" />

      {/* Paleta central (rosa) */}
      <path d="M60.3248 65.4952C77.4589 65.4952 91.3488 51.6053 91.3488 34.4712C91.3488 17.3371 77.4589 3.4472 60.3248 3.4472C43.1907 3.4472 29.3008 17.3371 29.3008 34.4712C29.3008 51.6053 43.1907 65.4952 60.3248 65.4952Z" fill="#FF6B9D" />
      <path d="M60.324 60.3245C74.6025 60.3245 86.1774 48.7496 86.1774 34.4711C86.1774 20.1927 74.6025 8.6178 60.324 8.6178C46.0456 8.6178 34.4707 20.1927 34.4707 34.4711C34.4707 48.7496 46.0456 60.3245 60.324 60.3245Z" fill="#FF69B4" />
      <path d="M60.3243 55.1538C71.747 55.1538 81.007 45.8939 81.007 34.4711C81.007 23.0484 71.747 13.7885 60.3243 13.7885C48.9016 13.7885 39.6416 23.0484 39.6416 34.4711C39.6416 45.8939 48.9016 55.1538 60.3243 55.1538Z" fill="#FF1493" />

      {/* Detalle en espiral - paleta central */}
      <path
        opacity="0.9"
        d="M60.3243 13.7885C74.1127 13.7885 81.007 20.6827 81.007 34.4711C81.007 48.2596 74.1127 55.1538 60.3243 55.1538C46.5358 55.1538 39.6416 48.2596 39.6416 34.4711C39.6416 27.5769 43.0887 24.1298 49.9829 24.1298C56.8772 24.1298 60.3243 27.5769 60.3243 34.4711C60.3243 37.9182 59.1752 39.6418 56.8772 39.6418"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Palito central */}
      <path d="M62.9099 65.4951H57.7393V103.413H62.9099V65.4951Z" fill={currentTheme.colors.dark} />
      <path d="M62.0477 65.4951H58.6006V103.413H62.0477V65.4951Z" fill={currentTheme.colors.border} />
      <path d="M60.3241 68.0805C62.2279 68.0805 63.7712 66.923 63.7712 65.4952C63.7712 64.0673 62.2279 62.9099 60.3241 62.9099C58.4203 62.9099 56.877 64.0673 56.877 65.4952C56.877 66.923 58.4203 68.0805 60.3241 68.0805Z" fill={currentTheme.colors.textSecondary} />

      {/* Puntos decorativos centro */}
      <path opacity="0.6" d="M51.7078 25.8533C54.5635 25.8533 56.8784 24.31 56.8784 22.4062C56.8784 20.5024 54.5635 18.9591 51.7078 18.9591C48.8521 18.9591 46.5371 20.5024 46.5371 22.4062C46.5371 24.31 48.8521 25.8533 51.7078 25.8533Z" fill="white" />
      <path opacity="0.4" d="M63.7709 30.1623C65.1987 30.1623 66.3562 29.0048 66.3562 27.577C66.3562 26.1491 65.1987 24.9916 63.7709 24.9916C62.343 24.9916 61.1855 26.1491 61.1855 27.577C61.1855 29.0048 62.343 30.1623 63.7709 30.1623Z" fill="white" />
      <path opacity="0.3" d="M60.3256 55.1537C67.9407 55.1537 74.114 53.6104 74.114 51.7066C74.114 49.8028 67.9407 48.2595 60.3256 48.2595C52.7104 48.2595 46.5371 49.8028 46.5371 51.7066C46.5371 53.6104 52.7104 55.1537 60.3256 55.1537Z" fill="white" />

      {/* Texto "Sweet Connections" curvado */}
      <defs>
        {/* Camino curvo para Sweet */}
        <path
          id={`textPath_sweet_${uniqueId}`}
          d="M 15,108 Q 60,98 105,108"
          fill="none"
        />
        {/* Camino curvo para Connections (un poco más abajo) */}
        <path
          id={`textPath_connections_${uniqueId}`}
          d="M 15,120 Q 60,110 105,120"
          fill="none"
        />
      </defs>

      {/* Texto "Sweet" - usando color del tema */}
      <text
        fontSize="16"
        fontFamily="'Segoe UI', 'Arial', sans-serif"
        fill={currentTheme.colors.textPrimary}
        fontWeight="bold"
        stroke={currentTheme.colors.textLight}
        strokeWidth="1"
        paintOrder="stroke"
        textAnchor="middle"
        filter={`url(#shadow_${uniqueId})`}
      >
        <textPath
          href={`#textPath_sweet_${uniqueId}`}
          startOffset="50%"
          textAnchor="middle"
        >
          Sweet
        </textPath>
      </text>

      {/* Texto "Connections" - usando color del tema */}
      <text
        fontSize="16"
        fontFamily="'Segoe UI', 'Arial', sans-serif"
        fill={currentTheme.colors.textPrimary}
        fontWeight="bold"
        stroke={currentTheme.colors.textLight}
        strokeWidth="1"
        paintOrder="stroke"
        textAnchor="middle"
        filter={`url(#shadow_${uniqueId})`}
      >
        <textPath
          href={`#textPath_connections_${uniqueId}`}
          startOffset="50%"
          textAnchor="middle"
        >
          Connections
        </textPath>
      </text>

    </svg>
  );
}