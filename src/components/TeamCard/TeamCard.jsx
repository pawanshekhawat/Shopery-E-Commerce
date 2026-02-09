import styles from "./TeamCard.module.css";

const TeamCard = () => {
  console.log(styles);
  return (
    <>
      <div className={styles.teamCard}>
        <div className={styles.teamCardImg}>
          <div className={styles.teamCardFade}>
            <div className={styles.teamCardIcons}>
              <div className={styles.teamCardIcon}>
                <img src="src/assets/Images/icons/Vector.png" alt="" />
              </div>
              <div className={styles.teamCardIcon}>
                <img src="src/assets/Images/icons/Vector (1).png" alt="" />
              </div>
              <div className={styles.teamCardIcon}>
                <img src="src/assets/Images/icons/Vector (2).png" alt="" />
              </div>
              <div className={styles.teamCardIcon}>
                <img src="src/assets/Images/icons/Vector (3).png" alt="" />
              </div>
            </div>
          </div>
          <img
            className={styles.teamCardBg}
            src="src/assets/Images/Teams/a80883dc1ed057e28b4f1bee4e87ed572c7cf693.jpg"
            alt=""
          />
        </div>
        <div className={styles.teamCardInfo}>
          <h2>Jenny Wilson</h2>
          <p>Ceo & Founder</p>
        </div>
      </div>
    </>
  );
};

export default TeamCard;
