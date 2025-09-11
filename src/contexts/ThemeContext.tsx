'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface Theme {
  name: string;
  colors: {
    // Backgrounds
    primary: string;      // Fondo principal (claro)
    secondary: string;    // Fondo alternativo (medio)
    accent: string;       // Fondo de acento (medio-oscuro)
    dark: string;         // Fondo oscuro
    
    // Textos
    textPrimary: string;  // Texto principal (oscuro para fondos claros)
    textSecondary: string; // Texto secundario (medio)
    textLight: string;    // Texto claro (para fondos oscuros)
    
    // Elementos
    border: string;       // Bordes
    button: string;       // Botones principales
    buttonText: string;   // Texto de botones
  };
}

const themes: Record<string, Theme> = {
  rosadoAmarillo: {
    name: 'Rosa y Amarillo Pastel',
    colors: {
      primary: '#FEF7F0',      // Fondo muy claro (crema rosado)
      secondary: '#F9E8DA',    // Fondo claro (melocotón suave)
      accent: '#F5D7C0',       // Fondo medio (rosa crema)
      dark: '#8B4A6B',         // Fondo oscuro (rosa marrón)
      
      textPrimary: '#2D1B1F',  // Texto principal (muy oscuro con toque rosa)
      textSecondary: '#6B4A54', // Texto secundario (rosa marrón medio)
      textLight: '#FEF7F0',     // Texto claro (para fondos oscuros)
      
      border: '#E91E63',       // Bordes rosa vibrante
      button: '#FFB6C1',       // Botones rosa claro
      buttonText: '#2D1B1F'    // Texto de botones oscuro
    }
  },
  caramelo: {
    name: 'Caramelo Dorado',
    colors: {
      primary: '#FFF8E7',      // Fondo muy claro
      secondary: '#F5E6CC',    // Fondo claro
      accent: '#E6D7C3',       // Fondo medio
      dark: '#8B4513',         // Fondo oscuro
      
      textPrimary: '#2D1810',  // Texto principal (muy oscuro)
      textSecondary: '#5D3317', // Texto secundario (marrón oscuro)
      textLight: '#FFF8E7',     // Texto claro (para fondos oscuros)
      
      border: '#CD853F',       // Bordes dorados
      button: '#CD853F',       // Botones dorados
      buttonText: '#FFFFFF'    // Texto de botones blanco
    }
  },
  moca: {
    name: 'Moca Elegante',
    colors: {
      primary: '#F7F3ED',      // Fondo muy claro
      secondary: '#E6D7C3',    // Fondo claro
      accent: '#D2B48C',       // Fondo medio
      dark: '#654321',         // Fondo oscuro
      
      textPrimary: '#2C1810',  // Texto principal
      textSecondary: '#4A2C17', // Texto secundario
      textLight: '#F7F3ED',     // Texto claro
      
      border: '#A0522D',       // Bordes marrones
      button: '#A0522D',       // Botones marrones
      buttonText: '#FFFFFF'    // Texto de botones
    }
  },
  canela: {
    name: 'Canela Suave',
    colors: {
      primary: '#FFFBF5',      // Fondo muy claro
      secondary: '#F5DEB3',    // Fondo claro
      accent: '#DEB887',       // Fondo medio
      dark: '#8B4513',         // Fondo oscuro
      
      textPrimary: '#3D2817',  // Texto principal
      textSecondary: '#6B4423', // Texto secundario
      textLight: '#FFFBF5',     // Texto claro
      
      border: '#BC8F8F',       // Bordes rosados
      button: '#BC8F8F',       // Botones rosados
      buttonText: '#FFFFFF'    // Texto de botones
    }
  },
  chocolate: {
    name: 'Chocolate Rico',
    colors: {
      primary: '#FAF0E6',      // Fondo muy claro
      secondary: '#E6D3C7',    // Fondo claro
      accent: '#D2B48C',       // Fondo medio
      dark: '#3C1810',         // Fondo muy oscuro
      
      textPrimary: '#2D1B13',  // Texto principal
      textSecondary: '#5D4037', // Texto secundario
      textLight: '#FAF0E6',     // Texto claro
      
      border: '#8D4004',       // Bordes chocolate
      button: '#8D4004',       // Botones chocolate
      buttonText: '#FFFFFF'    // Texto de botones
    }
  },
  vainilla: {
    name: 'Vainilla Premium',
    colors: {
      primary: '#FFFEF7',      // Fondo muy claro
      secondary: '#F9F1E6',    // Fondo claro
      accent: '#F0E68C',       // Fondo dorado suave
      dark: '#8B6914',         // Fondo oscuro
      
      textPrimary: '#1A1611',  // Texto principal muy oscuro
      textSecondary: '#4A3728', // Texto secundario
      textLight: '#FFFEF7',     // Texto claro
      
      border: '#DAA520',       // Bordes dorados
      button: '#DAA520',       // Botones dorados
      buttonText: '#FFFFFF'    // Texto de botones
    }
  }
};

interface ThemeContextType {
  currentTheme: Theme;
  themeName: string;
  setTheme: (themeName: string) => void;
  themes: Record<string, Theme>;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Cambiado: el tema por defecto es ahora 'rosadoAmarillo'
  const [themeName, setThemeName] = useState('rosadoAmarillo');

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    // Si no hay tema guardado o el tema guardado no existe, usar rosa como predeterminado
    if (!saved || !themes[saved]) {
      setThemeName('rosadoAmarillo');
      localStorage.setItem('theme', 'rosadoAmarillo');
    } else {
      setThemeName(saved);
    }
  }, []);

  const setTheme = (newTheme: string) => {
    if (themes[newTheme]) {
      setThemeName(newTheme);
      localStorage.setItem('theme', newTheme);
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        currentTheme: themes[themeName],
        themeName,
        setTheme,
        themes
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}