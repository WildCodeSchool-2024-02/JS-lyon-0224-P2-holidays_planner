import { useState } from "react";
import PropTypes from 'prop-types' ; 
import styles from "./button.module.css";


// Props contient les propriétés passées par le parent (APP.jsx)
function Button({ setCountryCode }) {
  const [currentSearch, setCurrentSearch] = useState("");

  return (
    <div className={styles.blocSearch}>
      <label className={styles.title}>
        Choose your country
        {
          // On met à jour current search en permanence avec la valeur
        }
        <input
          type="text"
          className={styles.country}
          minLength="2"
          value={currentSearch}
          onChange={(e) => setCurrentSearch(e.target.value)}
        />
        <button
          type="button"
          className={styles.search}
          onClick={(e) => {
            // Fonction de traitement de l'appui sur search
            e.preventDefault(); // Faut le mettre, je sais pas ce que ça fait mais faut.

            // Attention, on ne peut chercher que les codes,
            // il faudrait transformer les pays (type France) en leur code (type FR)
            setCountryCode(currentSearch);
          }}
        >
          Search
        </button>
      </label>
    </div>
  );
}

Button.propTypes = {
  setCountryCode:PropTypes.func.isRequired
}



export default Button;
