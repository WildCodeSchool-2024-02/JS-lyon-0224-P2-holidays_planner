import PropTypes from "prop-types";
import { createContext, useState, useContext, useMemo } from "react";

const DarkBlueContext = createContext();

export function DarkBlueProvider({ children }) {
  const [darkblue, setDarkBlue] = useState(false);


  const memo = useMemo(() => (
    {
      darkblue, setDarkBlue
    })
  , [darkblue, setDarkBlue]);

  return (
    <DarkBlueContext.Provider value={memo}>{children}</DarkBlueContext.Provider>
  );
}

DarkBlueProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useDarkBlue = () => useContext(DarkBlueContext);
