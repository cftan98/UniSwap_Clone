import {
    Row,
    Col,
    Card,
    Space,
    Select,
    Button,
    InputNumber
} from 'antd';
import React, { useEffect, useState } from 'react';
import {
    DownOutlined,
    SettingOutlined,
    ArrowDownOutlined
} from '@ant-design/icons';

import ETHIcon from '../TokenIcon/ETH.png';
import SourceModel from './SourceModel';

const { Option } = Select;

const cardStyle = {
    width: '480px',
    borderRadius: '24px',
    padding: '10px',
    backgroundColor: 'rgb(25, 27, 31)',
    boxShadow: 'rgb(0 0 0 / 1%) 0px 0px 1px, rgb(0 0 0 / 4%) 0px 4px 8px, rgb(0 0 0 / 4%) 0px 16px 24px, rgb(0 0 0 / 1%) 0px 24px 32px',
    color: "white",
    fontSize: '16px',
}

const innerCardStyle = {
    backgroundColor: 'rgb(33, 36, 41)',
    width: '100%',
    height: '100px',
    //marginBottom: '10px',
    borderRadius: '15px',
}

const buttonStyle = {
    marginLeft: '10px',
    padding: '5px 0 5px 5px',
    backgroundColor: 'rgb(25, 27, 31)',
    borderRadius: '10px',
    color: 'white',
    fontWeight: '500',
}

export default function MyCard() {
    const [source, setSource] = useState('ETH')
    const [sourceValue, setSourceValue] = useState(0.0);
    const [target, setTarget] = useState("Please Select")
    const [openSoureModel, setOpenModel] = useState(false)

    // useEffect(() => {
    //     console.log(openSoureModel)
    // }, [openSoureModel]);

    const handleChangeSourceValue = (v) => {
        const value = parseFloat(v);
        setSourceValue(value);
    }

    const openSourceModel = () => {
        setOpenModel((value) => {
            value = !value
            return value
        });
    }

    return (
        <React.Fragment>
            <SourceModel open={openSoureModel} toggleModel={openSourceModel} />
            <div
                style={cardStyle}
            >
                <Row style={{ marginLeft: '20px', marginTop: '5px' }}>
                    <Col span={22}>
                        <h3 style={{ color: 'white' }}>Swap</h3>
                    </Col>
                    <Col span={2}>
                        <SettingOutlined />
                    </Col>
                </Row>

                <div
                    style={innerCardStyle}
                >
                    <Row align='middle' justify='space-between'>
                        <Col span={6} style={{ marginTop: '15px' }}>
                            <div
                                style={buttonStyle}
                                onClick={() => openSourceModel()}
                            >
                                <Space align='center'>
                                    <img src={ETHIcon} style={{ height: "30px", width: '30px' }} />
                                    {source}
                                    <DownOutlined />
                                </Space>
                            </div>
                        </Col>

                        <Col span={6} style={{ marginTop: '15px' }}>
                            <InputNumber
                                size='large'
                                style={{ color: 'white', fontSize: '20px', WebkitAppearance: 'none' }}
                                bordered={false}
                                placeholder="0.0"
                                onChange={(e) => handleChangeSourceValue(e)}
                                min={0}
                                value={sourceValue}
                            />
                        </Col>
                    </Row>

                    <Row align='middle' justify='space-between'>
                        <Col span={2} style={{ marginTop: '5px', marginLeft: '10px' }}>
                            -
                        </Col>

                        <Col span={2}>
                            $1
                        </Col>

                    </Row>
                </div>

                <div style={{
                    paddingLeft: "4.5px",
                    borderRadius: "12px",
                    height: "32px",
                    width: "32px",
                    position: 'relative',
                    marginTop: '-14px',
                    marginBottom: '-14px',
                    /* position: relative; */
                    /* margin-top: -14px; */
                    /* margin-bottom: -14px; */
                    left: "calc(50% - 16px)",
                    backgroundColor: "rgb(33, 36, 41)",
                    border: "4px solid rgb(25, 27, 31)",
                    zIndex: "2",
                }}>
                    <ArrowDownOutlined />
                </div>


                <div
                    style={innerCardStyle}
                >

                </div>

                <button style={{
                    marginTop: '15px',
                    padding: "16px",
                    width: "100%",
                    textAlign: "center",
                    borderRadius: "20px",
                    outline: "none",
                    border: "1px solid transparent",
                    textDecoration: "none",
                    display: "flex",
                    justifyContent: "center",
                    cursor: "pointer",
                    backgroundColor: "rgba(21, 61, 111, 0.44)",
                    color: "rgb(109, 168, 255)",
                    fontSize: "16px",
                    fontWeight: "500",
                }}>
                    Connect Wallet
                </button>
            </div>
        </React.Fragment>
    )
}