import './App.css';
import { Button, Col, Dropdown, Image, Row, Typography } from "antd";
import NavBar from './components/NavBar.js';
import { AppleOutlined } from '@ant-design/icons';
import MenuBar from './components/MenuBar.js';


function App() {
  return (
    <>
      <div>
        <Row>
          <Col span={4} style={{
          }}>
            <MenuBar />
          </Col>
          <Col span={20}>
            <NavBar />
          </Col>
        </Row>
      </div>


    </>
  );
}

export default App;
