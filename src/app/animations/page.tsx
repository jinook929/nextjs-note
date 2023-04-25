import styles from "./page.module.css";
import "@fortawesome/fontawesome-svg-core/styles.css"; //importing font awesome css
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faTiktok,
  faLinkedin,
  faGithub,
  faDiscord,
  faWordpress,
  faSlack,
  faFigma,
  faApple,
  faGoogle,
  faDocker,
  faWindows,
  faPaypal,
  faStackOverflow,
  faKickstarter,
  faDribbble,
  faDropbox,
} from "@fortawesome/free-brands-svg-icons";

const numOfLines = [...Array(20)];

const numOfIconSets = [...Array(5)]

export default function AnimationPage() {
  return (
    <section className={styles.section}>
      {numOfLines.map((lineNum, index) => (
        <div key={`${index}_${lineNum}`} className={`${styles.row} ${index % 2 === 0 ? styles.even : styles.odd}`}>
          {numOfIconSets.map((setNum) => (
            <div key={setNum}>
              <FontAwesomeIcon icon={faYoutube} aria-hidden="true" />
              <FontAwesomeIcon icon={faFacebook} aria-hidden="true" />
              <FontAwesomeIcon icon={faTwitter} aria-hidden="true" />
              <FontAwesomeIcon icon={faInstagram} aria-hidden="true" />
              <FontAwesomeIcon icon={faTiktok} aria-hidden="true" />
              <FontAwesomeIcon icon={faLinkedin} aria-hidden="true" />
              <FontAwesomeIcon icon={faGithub} aria-hidden="true" />
              <FontAwesomeIcon icon={faDiscord} aria-hidden="true" />
              <FontAwesomeIcon icon={faWordpress} aria-hidden="true" />
              <FontAwesomeIcon icon={faSlack} aria-hidden="true" />
              <FontAwesomeIcon icon={faFigma} aria-hidden="true" />
              <FontAwesomeIcon icon={faApple} aria-hidden="true" />
              <FontAwesomeIcon icon={faGoogle} aria-hidden="true" />
              <FontAwesomeIcon icon={faDocker} aria-hidden="true" />
              <FontAwesomeIcon icon={faWindows} aria-hidden="true" />
              <FontAwesomeIcon icon={faPaypal} aria-hidden="true" />
              <FontAwesomeIcon icon={faStackOverflow} aria-hidden="true" />
              <FontAwesomeIcon icon={faKickstarter} aria-hidden="true" />
              <FontAwesomeIcon icon={faDribbble} aria-hidden="true" />
              <FontAwesomeIcon icon={faDropbox} aria-hidden="true" />
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}
