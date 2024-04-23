import Avatar from "../../assets/images/avatar.png";
import styles from "./profile.module.css";
import Adeline from "../../assets/images/Adeline.jpg";
import Bastien from "../../assets/images/Bastien.jpg";
import Kana from "../../assets/images/Kana.jpg";

function Profile() {
  return (
    <div className={styles.aboutUs}>
      <h1>About team</h1>
      <img alt="imageAdeline" src={Adeline} />
      <h2>Adeline</h2>
      <h4>Developer Web Junior</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur,
        architecto!
      </p>

      <img alt="imageBastien " src={Bastien} />
      <h2>Bastien</h2>
      <h4>Developer Web Junior</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
        iste.
      </p>

      <img alt="imageKana" src={Kana} />
      <h2>Kana</h2>
      <h4>Developer Web Junior</h4>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam,
        dolorem.
      </p>
    </div>
  );
}

export default Profile;
