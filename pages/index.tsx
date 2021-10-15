import { Button, PageHeader } from "antd";

import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      <PageHeader title="HealthMate" subTitle="Home route" />
      <div>
        <Button>Sample Antd Button</Button>
      </div>
    </div>
  );
};

export default Home;
