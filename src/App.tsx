import Layout, { Content } from 'antd/es/layout/layout';
import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <Layout>
      <Navbar/>
      <Content>
        <AppRouter/>
      </Content>
    </Layout>
  );
}

export default App;
