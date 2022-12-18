import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HTTP from "../lib/HTTP";
import styles from "./SignupModal.module.css";

const SignupModal = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.google.accounts.id.initialize({
      client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      callback: HTTP.sendGoogleIdToken,
    });
    window.google.accounts.id.renderButton(
      document.getElementById("googleLoginBtn"),
      { theme: "outline", size: "large", width: "320", shape: "circle" }
    );
  }, []);

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
        <div className={styles.modalBody}>
          <p>지금 트위터에 가입하세요.</p>
          <div id="googleLoginBtn" className={styles.googleLoginBtn}></div>
          <p>애플 로그인</p>
          <p>-----------또는-----------</p>
          <p>휴대폰 번호나 이메일 주소로 가입하기</p>
          <p>
            가입하시려면 쿠키 사용을 포함해 이용약관과 개인정보 처리방침에
            동의해야 합니다.
          </p>
          <p>이미 계정이 있으신가요? 로그인</p>
        </div>
      </div>
    </div>
  );
};

export default SignupModal;
