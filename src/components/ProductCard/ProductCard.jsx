import styles from "./ProductCard.module.css";

const ProductCard = () => {
  return (
    <>
      <div className={styles.productCard}>
        <div className={styles.productCardImg}>
          <img
            className={styles.productCardBg}
            src=" src/assets/Images/productImg/2099fb565ffbe623e9b927ae3be066c4f975d1fc.jpg"
            alt=""
          />
          <div className={styles.productCardOptions}>
            <img src="src/assets/Images/icons/Heart.png" alt="" />
            <img src="src/assets/Images/icons/Vector (4).png" alt="" />
          </div>
        </div>

        <div className={styles.productCardInfo}>
          <div className={styles.productInfoLeft}>
            <p>Green Apple</p>
            <h4>$14.99</h4>
            <div className="flex ml-4 gap-1">
              <img src="src/assets/Images/icons/Group.png" alt="" />
              <img src="src/assets/Images/icons/Group.png" alt="" />
              <img src="src/assets/Images/icons/Group.png" alt="" />
              <img src="src/assets/Images/icons/Group.png" alt="" />
              <img src="src/assets/Images/icons/Group (1).png" alt="" />
            </div>
          </div>
          <div className="mr-5">
            <svg
              className=""
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M6.66667 8.33333H4.16667L2.5 17.5H17.5L15.8333 8.33333H13.3333M6.66667 8.33333V5.83333C6.66667 3.99239 8.15905 2.5 10 2.5C11.8409 2.5 13.3333 3.99238 13.3333 5.83333V8.33333M6.66667 8.33333H13.3333M6.66667 8.33333V10.8333M13.3333 8.33333V10.8333"
                stroke-width="1.3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
