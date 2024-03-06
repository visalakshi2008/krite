import './App.css';
import { Col, Row, } from "antd";
import NavBar from './components/NavBar.js';

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
