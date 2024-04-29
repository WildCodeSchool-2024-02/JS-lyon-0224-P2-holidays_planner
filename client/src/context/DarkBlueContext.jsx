import PropTypes from "prop-types";
import { createContext, useState, useContext } from "react";

const DarkBlueContext = createContext();

export function DarkBlueProvider({ children }) {
  const [darkblue, setDarkBlue] = useState(false);

  function changeDarkBlue() {
    setDarkBlue(!darkblue);
  }

  return (
    <DarkBlueContext.Provider value={{ darkblue, changeDarkBlue }}>
      {children}
    </DarkBlueContext.Provider>
  );
}

DarkBlueProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useDarkBlue = () => useContext(DarkBlueContext);
