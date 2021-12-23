import { GoogleLogin } from "react-google-login";
import styles from "./index.module.scss";
import { useRouter } from "next/router";
import Paths from "@lib/paths";
import { stringify } from "qs";
import { Button } from "antd";
import { Fragment, useState } from "react";

export default function GoogleLoginComp() {
  const router = useRouter();
  const [render, setRender] = useState(false);

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

  const handleMentor = (event: any) => {
    const query = stringify({ userId: "userid001" }, { addQueryPrefix: true });

    router.push(Paths.HOME + query);
  };

  const handleMentee = (event: any) => {
    const query = stringify({ userId: "userid002" }, { addQueryPrefix: true });

    router.push(Paths.HOME + query);
  };

  const myTimeout = setTimeout(function () {
    setRender(true);
  }, 500);

  return (
    <div className={styles.container}>
      {render && (
        <Fragment>
          <GoogleLogin
            className={styles.google}
            clientId="1067700357036-cec5e4ahnij9auj2i500tvskcer2h56h.apps.googleusercontent.com"
            buttonText="Login with Google"
            onSuccess={handleSuccess}
            onFailure={handleFailure}
            cookiePolicy="single_host_origin"
          />
          <Button
            className={styles.mentor}
            type="primary"
            onClick={handleMentor}
          >
            <img
              className={styles.img}
              src="https://blog.kakaocdn.net/dn/bRWTvw/btq7xTtqI5I/t7v7FErxGH5kVkdghkDBq1/img.png"
            />
            Login as a Mentor
          </Button>
          <Button
            className={styles.mentee}
            type="primary"
            onClick={handleMentee}
          >
            <img
              className={styles.img}
              src="https://cdn.topstarnews.net/news/photo/201906/633567_329281_1014.jpg"
            />
            Login as a Mentee
          </Button>
        </Fragment>
      )}
    </div>
  );
}
