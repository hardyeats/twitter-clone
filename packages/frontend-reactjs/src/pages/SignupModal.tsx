import { useNavigate } from "react-router-dom";
import styles from "./SignupModal.module.css";
const SignupModal = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <div className={styles.modalHeaderLest} onClick={() => navigate(-1)}>
            X
          </div>
          <div className={styles.modalHeaderCenter}>center</div>
          <div className={styles.modalHeaderRight}></div>
        </div>
      </div>
    </div>
  );
};

export default SignupModal;
