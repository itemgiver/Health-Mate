import { GoogleLogin } from "react-google-login";
import styles from "./index.module.scss";

export default function GoogleLoginComp() {
  const handleSuccess = (data: any) => {
    console.log("handleSuccess", data);
  };

  const handleFailure = (data: any) => {
    console.log("handleFailure", data);
  };

  return (
    <div className={styles.container}>
      <GoogleLogin
        clientId="756903864035-fqeel4iujm40c3tdl0stvo032omjlhgj.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={handleSuccess}
        onFailure={handleFailure}
        cookiePolicy="single_host_origin"
      />
    </div>
  );
}
