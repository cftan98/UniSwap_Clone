import { Row, Col } from 'antd';
import MyCard from './components/MyCard';

function App() {
  return (
    <div>
      <Row
        justify='center'
        style={{marginTop: '10%'}}
      >
        <Col>
          <MyCard />
        </Col>
      </Row>
    </div>
  );
}

export default App;
