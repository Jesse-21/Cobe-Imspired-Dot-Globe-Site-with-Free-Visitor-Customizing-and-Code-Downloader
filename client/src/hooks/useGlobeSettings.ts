import { useState } from "react";

// RGB color type with values between 0-1
export type RGBColor = [number, number, number];

// Location coordinates [latitude, longitude]
export type LocationCoordinates = [number, number];

export interface GlobeSettings {
  rotationSpeed: number;
  mouseSensitivity: number;
  dotSize: number;
  globeSize: number;
  autoRotate: boolean;
  landColor: RGBColor;
  haloColor: RGBColor;
  glitchEffect: boolean;
  showArcs: boolean;
  arcColor: RGBColor;
  headquartersLocation: LocationCoordinates;
  showVisitorMarkers: boolean;
  // Globe positioning
  offsetX: number; // Horizontal position offset in percentage (-50 to 50)
  offsetY: number; // Vertical position offset in percentage (-50 to 50)
}

export const useGlobeSettings = () => {
  const [settings, setSettings] = useState<GlobeSettings>(() => {
    // Check if we're on the home page to apply different default settings
    const isHomePage = window.location.pathname === '/';
    
    return {
      rotationSpeed: 3,
      mouseSensitivity: 40,
      dotSize: 0.5,
      // Make the globe larger on the home page for better visibility
      globeSize: isHomePage ? 2.4 : 1.1,
      autoRotate: true,
      landColor: [0.3, 0.3, 0.3], // Default gray land color
      haloColor: [1, 1, 1],      // Default white halo
      glitchEffect: false,       // Glitch effect disabled by default
      showArcs: true,           // Connection arcs enabled by default
      arcColor: [0.3, 0.7, 1.0], // Brighter blue arcs
      headquartersLocation: [37.7749, -122.4194], // Default: San Francisco
      showVisitorMarkers: true,  // Show visitor markers by default
      // Offset to the left side on home page for better visibility with content
      offsetX: isHomePage ? -15 : 0,  
      // Center vertically on home page
      offsetY: isHomePage ? 0 : 0   
    };
  });
  
  const updateRotationSpeed = (value: number) => {
    setSettings(prev => ({ ...prev, rotationSpeed: value }));
  };
  
  const updateMouseSensitivity = (value: number) => {
    setSettings(prev => ({ ...prev, mouseSensitivity: value }));
  };
  
  const updateDotSize = (value: number) => {
    setSettings(prev => ({ ...prev, dotSize: value }));
  };
  
  const updateGlobeSize = (value: number) => {
    setSettings(prev => ({ ...prev, globeSize: value }));
  };
  
  const updateAutoRotate = (value: boolean) => {
    setSettings(prev => ({ ...prev, autoRotate: value }));
  };
  
  const updateLandColor = (color: RGBColor) => {
    setSettings(prev => ({ ...prev, landColor: color }));
  };
  
  const updateHaloColor = (color: RGBColor) => {
    setSettings(prev => ({ ...prev, haloColor: color }));
  };
  
  const updateGlitchEffect = (value: boolean) => {
    setSettings(prev => ({ ...prev, glitchEffect: value }));
  };
  
  const updateShowArcs = (value: boolean) => {
    setSettings(prev => ({ ...prev, showArcs: value }));
  };
  
  const updateArcColor = (color: RGBColor) => {
    setSettings(prev => ({ ...prev, arcColor: color }));
  };
  
  const updateHeadquartersLocation = (location: LocationCoordinates) => {
    setSettings(prev => ({ ...prev, headquartersLocation: location }));
  };
  
  const updateShowVisitorMarkers = (value: boolean) => {
    setSettings(prev => ({ ...prev, showVisitorMarkers: value }));
  };
  
  const updateOffsetX = (value: number) => {
    // Clamp value between -50 and 50
    const clampedValue = Math.max(-50, Math.min(50, value));
    setSettings(prev => ({ ...prev, offsetX: clampedValue }));
  };
  
  const updateOffsetY = (value: number) => {
    // Clamp value between -50 and 50
    const clampedValue = Math.max(-50, Math.min(50, value));
    setSettings(prev => ({ ...prev, offsetY: clampedValue }));
  };
  
  // Helper function to convert hex color to RGB array (values 0-1)
  const hexToRgb = (hex: string): RGBColor => {
    // Remove # if present
    hex = hex.replace(/^#/, '');
    
    // Parse hex values
    const r = parseInt(hex.substring(0, 2), 16) / 255;
    const g = parseInt(hex.substring(2, 4), 16) / 255;
    const b = parseInt(hex.substring(4, 6), 16) / 255;
    
    return [r, g, b];
  };
  
  // Helper function to convert RGB array to hex color
  const rgbToHex = (rgb: RGBColor): string => {
    const toHex = (value: number) => {
      const hex = Math.round(value * 255).toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    };
    
    return `#${toHex(rgb[0])}${toHex(rgb[1])}${toHex(rgb[2])}`;
  };
  
  return {
    settings,
    updateRotationSpeed,
    updateMouseSensitivity,
    updateDotSize,
    updateGlobeSize,
    updateAutoRotate,
    updateLandColor,
    updateHaloColor,
    updateGlitchEffect,
    updateShowArcs,
    updateArcColor,
    updateHeadquartersLocation,
    updateShowVisitorMarkers,
    updateOffsetX,
    updateOffsetY,
    hexToRgb,
    rgbToHex
  };
};
