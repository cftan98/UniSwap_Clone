import { Button, Modal, Space } from 'antd';
import DAI from './TokenComponents/DAI';
import ETH from './TokenComponents/ETH';
import WBTC from './TokenComponents/WBTC';

export default function TargetModel(props) {
    return (
        <Modal
            className='darkModal'
            visible={props.open}
            onOk={props.toggleModel}
            onCancel={props.toggleModel}
            footer={null}
        >
            <h2 style={{ color: 'white' }}>Select a token</h2>
            <Space>
                <ETH handleChangeSource={props.handleChangeSource} />
                {/* <DAI handleChangeSource={props.handleChangeSource} /> */}
                <WBTC handleChangeSource={props.handleChangeSource} />
            </Space>
        </Modal>
    );
}