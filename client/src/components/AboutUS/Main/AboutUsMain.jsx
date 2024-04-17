import styles from 
import Avatar from "../../../assets/images/avatar.png"

function AboutUs() {
    return (
<div className={styles.aboutUs}> 
<section className={styles.profileAdeline}>
<img alt="imageAdeline" src={Avatar}></img>
<p>lorem </p> 
</section>  

<section className={styles.profileBastien}>
<img alt="imageBastien " src={Avatar}></img> 
<p>lorem</p> 
</section>

<section className={styles.profileKana}> 
<img alt="imageKana" src={Avatar}></img>
<p> lorem </p> 
</section >

</div> 
    );
  }
  
  export default AboutUs;