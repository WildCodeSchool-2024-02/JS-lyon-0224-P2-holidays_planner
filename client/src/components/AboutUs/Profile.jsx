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

      <img alt="imageBastien " src={Bastien} />
      <h2>Bastien</h2>
      <h4>Developer Web Junior</h4>

      <img alt="imageKana" src={Kana} />
      <h2>Kana</h2>
      <h4>Developer Web Junior</h4>
    </div>
  );
}

export default Profile;
