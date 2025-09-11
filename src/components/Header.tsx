'use client';

import { useTheme } from '@/contexts/ThemeContext';
import { SweetConnectionsLogo } from './SweetConnectionsLogo';
import { MdPalette, MdStar, MdCheck } from 'react-icons/md';
import * as Select from '@radix-ui/react-select';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export function Header() {
  const { currentTheme, themeName, setTheme, themes } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg shadow-lg"
      style={{
        background: `linear-gradient(135deg, ${currentTheme.colors.primary}F5, ${currentTheme.colors.secondary}F0)`,
        borderBottom: `2px solid ${currentTheme.colors.border}40`
      }}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo y Brand */}
          <div className="flex items-center space-x-4 group">
            <div className="relative">
              <div className="absolute -inset-2 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                style={{ backgroundColor: currentTheme.colors.button }}></div>
              <SweetConnectionsLogo
                size={72}
                className="relative z-10 transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <h1 className="text-xl font-bold bg-gradient-to-r bg-clip-text text-transparent"
                  style={{
                    backgroundImage: `linear-gradient(45deg, ${currentTheme.colors.textPrimary}, ${currentTheme.colors.button})`
                  }}>
                  Dolce Benedizione
                </h1>
                <MdStar className="text-lg animate-pulse" style={{ color: currentTheme.colors.button }} />
              </div>
              <p className="text-sm font-medium tracking-wide" style={{ color: currentTheme.colors.textSecondary }}>
                Sweet Connections • Networking Gastronómico
              </p>
            </div>
          </div>

          {/* Theme Selector */}
          <div className="flex items-center space-x-4">
            <Select.Root value={themeName} onValueChange={setTheme}>
              <Select.Trigger className="inline-flex items-center justify-between px-5 py-3 rounded-full text-sm font-medium cursor-pointer shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl group min-w-[160px]"
                style={{
                  backgroundColor: currentTheme.colors.secondary + 'E6',
                  borderColor: currentTheme.colors.border,
                  color: currentTheme.colors.textPrimary,
                  border: `2px solid ${currentTheme.colors.border}60`,
                }}>
                <div className="flex items-center space-x-2">
                  <MdPalette
                    className="w-4 h-4 animate-pulse"
                    style={{ color: currentTheme.colors.button }}
                  />
                  <Select.Value placeholder="Selecciona tema" />
                </div>
                <Select.Icon className="ml-2">
                  <FaChevronDown
                    className="w-3 h-3 transition-transform duration-300 group-data-[state=open]:rotate-180"
                    style={{ color: currentTheme.colors.textPrimary }}
                  />
                </Select.Icon>
              </Select.Trigger>

              <Select.Portal>
                <Select.Content className="overflow-hidden rounded-xl shadow-2xl backdrop-blur-lg border z-50"
                  style={{
                    backgroundColor: currentTheme.colors.secondary + 'F5',
                    borderColor: currentTheme.colors.border + '40',
                    border: `1px solid ${currentTheme.colors.border}40`
                  }}>
                  <Select.ScrollUpButton className="flex items-center justify-center h-8 cursor-default">
                    <FaChevronUp style={{ color: currentTheme.colors.textPrimary }} />
                  </Select.ScrollUpButton>

                  <Select.Viewport className="p-2">
                    {Object.entries(themes).map(([key, theme]) => (
                      <Select.Item key={key}
                        value={key}
                        className="relative flex items-center px-4 py-3 text-sm font-medium rounded-lg cursor-pointer transition-colors duration-200 hover:outline-none data-[highlighted]:outline-none"
                        style={{
                          color: currentTheme.colors.textPrimary,
                          background: key === themeName ? currentTheme.colors.button + '20' : 'transparent'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = currentTheme.colors.button + '15';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = key === themeName ? currentTheme.colors.button + '20' : 'transparent';
                        }}>
                        <Select.ItemText className="flex items-center space-x-3">
                          <span>{theme.name}</span>
                        </Select.ItemText>
                        <Select.ItemIndicator className="absolute right-3">
                          <MdCheck className="w-4 h-4" style={{ color: currentTheme.colors.button }} />
                        </Select.ItemIndicator>
                      </Select.Item>
                    ))}
                  </Select.Viewport>

                  <Select.ScrollDownButton className="flex items-center justify-center h-8 cursor-default">
                    <FaChevronDown style={{ color: currentTheme.colors.textPrimary }} />
                  </Select.ScrollDownButton>
                </Select.Content>
              </Select.Portal>
            </Select.Root>
          </div>
        </div>

        {/* Decorative line */}
        <div className="mt-4 h-px bg-gradient-to-r from-transparent via-current to-transparent opacity-20"
          style={{ color: currentTheme.colors.border }}></div>
      </div>
    </header>
  );
}