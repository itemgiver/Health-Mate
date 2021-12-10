import { Form, Input, Button, Radio, Spin } from "antd";
import styles from "./index.module.scss";
import createUserProfile from "@lib/utils/createUserProfile";
import { useRouter } from "next/router";
import Paths from "@lib/paths";
import { stringify } from "qs";
import { useState } from "react";

export default function SignUpComponent() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: any) => {
    setLoading(true);
    const googleId = router.query.googleId as string;
    await createUserProfile({
      name: values.name,
      age: values.age,
      intro: values.intro,
      memberType: values.memberType,
      imgSrc: values.imgSrc,
      userId: googleId,
    });
    setLoading(false);
    const query = stringify({ userId: googleId }, { addQueryPrefix: true });
    router.push(Paths.SETTING + query);
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
            label="이름"
            name="name"
            rules={[
              {
                required: true,
                message: "이름을 입력하세요",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="나이"
            name="age"
            rules={[
              {
                required: true,
                message: "나이를 입력하세요",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="프로필사진"
            name="imgSrc"
            rules={[
              {
                required: true,
                message: "프로필사진 링크를 추가하시오",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="memberType"
            label="멘토/멘티 선택하시오"
            rules={[
              {
                required: true,
                message: "역할을 선택하시오",
              },
            ]}
          >
            <Radio.Group>
              <Radio value="mentor">멘토</Radio>
              <Radio value="mentee">멘티</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item name="intro" label="소개">
            <Input.TextArea />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              회원가입하기
            </Button>
          </Form.Item>
        </Form>
      </Spin>
    </div>
  );
}
