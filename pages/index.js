import Head from 'next/head'
import Header from '@components/HeaderSite'
import Footer from '@components/Footer'
import { Layout, Space } from 'antd';
const { Sider, Content } = Layout;
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>SreeSrinivasa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
    size={[0, 48]}
  >
  <Layout>
      <Header />
   
<Content>site being constructing</Content>
    <Footer />
    </Layout>
    </Space>
    </div>
  )
}
