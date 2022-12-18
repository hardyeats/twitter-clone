import { useNavigate } from "react-router-dom";
import styles from "./SignupModal.module.css";
const SignupModal = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <div className={styles.modalHeaderLeft} onClick={() => navigate(-1)}>
            <i className="fa-solid fa-x"></i>
          </div>
          <div className={styles.modalHeaderCenter}>
            <i className="fa-brands fa-twitter"></i>
          </div>
          <div className={styles.modalHeaderRight}></div>
        </div>
      </div>
    </div>
  );
};

export default SignupModal;
