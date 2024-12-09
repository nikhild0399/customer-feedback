import { Link } from "react-router-dom";
import styles from "./styles.module.css";

function Signup() {
  const googleAuth = () => {
    window.open("http://localhost:5000/auth/google/callback", "_self");
  };

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h1 className={styles.heading}>Create an Account</h1>
        <div className={styles.formContainer}>
   
          <div className={styles.orContainer}>
            <button className={styles.googleBtn} onClick={googleAuth}>
              <span>Sign up with Google</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
