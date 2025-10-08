import React, { 
  createContext, 
  useState, 
  useContext, 
  useCallback, 
  ReactNode 
} from 'react';

// Create the ScrollContext type
type ScrollContextType = {
  activeSection: string;
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
  scrollToSection: (sectionId: string) => void;
};

// Create the ScrollContext with a default value
const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

// ScrollProvider component props
interface ScrollProviderProps {
  children: ReactNode;
}

// ScrollProvider component
export const ScrollProvider: React.FC<ScrollProviderProps> = ({ children }) => {
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Function to scroll to a specific section
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
      setActiveSection(sectionId);
    }
  }, []);

  // Value to be provided
  const value = {
    activeSection,
    setActiveSection,
    scrollToSection
  };

  return (
    <ScrollContext.Provider value={value}>
      {children}
    </ScrollContext.Provider>
  );
};

// Custom hook to use the scroll context
export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error('useScroll must be used within a ScrollProvider');
  }
  return context;
};
