import { Form, Input, Button, Radio, Spin } from "antd";
import styles from "./index.module.scss";
import createUserProfile from "@lib/utils/createUserProfile";
import { useRouter } from "next/router";
import Paths from "@lib/paths";
import { stringify } from "qs";
import { useState } from "react";
import useGetProfile from "@lib/utils/getprofile";

export default function SignUpComponent() {
  const router = useRouter();
  const [val, load, err] = useGetProfile(router.query.userId as string);

  if (!(load || err || !val) && val.docs.length === 1) {
    const query = stringify(
      { userId: val.docs[0].data().userId },
      { addQueryPrefix: true }
    );
    router.push(Paths.HOME + query);
  }

  const [loading, setLoading] = useState(false);

  const onFinish = async (values: any) => {
    setLoading(true);
    const googleId = router.query.userId as string;
    await createUserProfile({
      name: values.name,
      age: Number(values.age),
      description: values.intro,
      memberType: values.memberType,
      imgSrc: values.imgSrc,
      userId: googleId,
    });
    setLoading(false);
    const query = stringify({ userId: googleId }, { addQueryPrefix: true });
    router.push(Paths.HOME + query);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className={styles.container}>
      <Spin spinning={loading}>
        <Form
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Enter your name.",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Age"
            name="age"
            rules={[
              {
                required: true,
                message: "Enter your age.",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="ImgSrc"
            name="imgSrc"
            rules={[
              {
                required: true,
                message: "Add your profile image link.",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="memberType"
            label="Select Mentor or Mentee."
            rules={[
              {
                required: true,
                message: "Enter your user type.",
              },
            ]}
          >
            <Radio.Group>
              <Radio value="mentor">Mentor</Radio>
              <Radio value="mentee">Mentee</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item name="intro" label="Introduction">
            <Input.TextArea />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Sign Up
            </Button>
          </Form.Item>
        </Form>
      </Spin>
    </div>
  );
}
