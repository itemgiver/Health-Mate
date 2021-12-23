import { GoogleLogin } from "react-google-login";
import styles from "./index.module.scss";
import { useRouter } from "next/router";
import Paths from "@lib/paths";
import { stringify } from "qs";

export default function GoogleLoginComp() {
  const router = useRouter();

  const handleSuccess = (data: any) => {
    console.log("handleSuccess googleId", data.googleId);

    const query = stringify(
      { userId: data.googleId },
      { addQueryPrefix: true }
    );

    router.push(Paths.SIGN_UP + query);
  };

  const handleFailure = (data: any) => {
    console.log("handleFailure", data);
  };

  return (
    <div className={styles.container}>
      <GoogleLogin
        clientId="1067700357036-cec5e4ahnij9auj2i500tvskcer2h56h.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={handleSuccess}
        onFailure={handleFailure}
        cookiePolicy="single_host_origin"
      />
    </div>
  );
}
