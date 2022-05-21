import Layout from "../components/Layout";
import LeftPanel from "../components/LeftPanel";
import WhatForm from "../components/WhatForm";

export default function Index() {
  return (
    <div className="flex">
      <Layout title="Link Generator">
        <LeftPanel className="w-1/2"></LeftPanel>
        <WhatForm className="w-1/2"></WhatForm>
      </Layout>
    </div>
  )
}