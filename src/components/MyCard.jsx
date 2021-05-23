import {
    Row,
    Col,
    Card,
    Space,
    Select,
    Button,
    Input
} from 'antd';
import React, { useEffect, useState } from 'react';
import {
    DownOutlined,
    SettingOutlined,
    ArrowDownOutlined
} from '@ant-design/icons';

import ETH_Icon from '../TokenIcon/ETH.png';
import DAI_Icon from '../TokenIcon/DAI.png';
import WBTC_Icon from '../TokenIcon/WBTC.png';

import SourceModel from './SourceModel';
import TargetModel from './TargetModel';
//import ETH from './TokenComponents/ETH';

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
    borderRadius: '15px',
}

const selectButtonStyle = {
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
    const [target, setTarget] = useState("Select Token")
    const [TargetValue, setTargeteValue] = useState(0.0);

    const [openSoureModel, setOpenSourceModal] = useState(false)
    const [openTargetModel, setOpenTargetModal] = useState(false)

    useEffect(() => {
        console.log(source)
        console.log(target)

        if (target !== "Select Token") {
            if (source === "ETH") {
                if (target === "WBTC") {
                    //1 : 0.0610924
                    { sourceValue ? setTargeteValue(Math.round(sourceValue * 0.0610924 * 1000000) / 1000000) : setTargeteValue(0.0) }
                }
                else if (target === "DAI") {
                    // 1 : 2118.98
                    { sourceValue ? setTargeteValue(Math.round(sourceValue * 0.0000295 * 1000000) / 1000000) : setTargeteValue(0.0) }
                }
                else if (target === "ETH") {
                    { sourceValue ? setTargeteValue(sourceValue) : setTargeteValue(0.0) }
                }
            } else if (source === "WBTC") {
                if (target === "ETH") {
                    //1 : 0.0610924
                    { sourceValue ? setTargeteValue(Math.round(sourceValue * 16.3964 * 1000000) / 1000000) : setTargeteValue(0.0) }
                }
                else if (target === "DAI") {
                    // 1 : 2118.98
                    { sourceValue ? setTargeteValue(Math.round(sourceValue * 34321.1 * 1000000) / 1000000) : setTargeteValue(0.0) }
                }
                else if (target === "WBTC") {
                    { sourceValue ? setTargeteValue(sourceValue) : setTargeteValue(0.0) }
                }
            }
        }
    }, [source, target, sourceValue]);

    const swap = () => {
        if (target !== "Select Token") {
            setSource(target);
            setTarget(source);
        }
    }

    const handleChangeSourceValue = (e) => {
        const value = parseFloat(e.target.value);
        setSourceValue(value);
    }

    const calculateToUSD = () => {
        switch (source) {
            case ("ETH"):
                return Math.round(sourceValue * 2118.98 * 100) / 100
            case ("DAI"):
                return sourceValue * 1
            case ("WBTC"):
                return Math.round(sourceValue * 33815.3 * 100) / 100
        }
    }

    const openStateSrouceModal = () => {
        setOpenSourceModal((value) => {
            value = !value;
            return value
        });
    }

    const openStateTargetModel = () => {
        setOpenTargetModal((value) => {
            value = !value;
            return value
        });
    }

    const handleChangeSourceToken = (source) => {
        setSource(source);
        setOpenSourceModal((value) => {
            value = !value;
            return value;
        })
    }

    const handleChangeTargetToken = (t) => {
        setTarget(t);
        setOpenTargetModal(value => {
            value = !value;
            return value
        });
    }

    const checkSelectSource = () => {
        if (source && source === 'ETH') {
            return (
                <Space
                    align='center'
                    style={{ cursor: 'pointer' }}
                >
                    <img src={ETH_Icon} style={{ height: "30px", width: '30px' }} />
                    {source}
                    <DownOutlined />
                </Space>
            )
        } else if (source && source === "DAI") {
            return (
                <Space
                    align='center'
                    style={{ cursor: 'pointer' }}
                >
                    <img src={DAI_Icon} style={{ height: "30px", width: '30px' }} />
                    {source}
                    <DownOutlined />
                </Space>
            )
        } else if (source && source === "WBTC") {
            return (
                <Space
                    align='center'
                    style={{ cursor: 'pointer' }}
                >
                    <img src={WBTC_Icon} style={{ height: "30px", width: '30px', borderRadius: '24px' }} />
                    {source}
                    <DownOutlined style={{ marginLeft: '-5px' }} />
                </Space>
            )
        }
    }

    const checkSelectTarget = () => {
        if (target === "Select Token") {
            return (
                <Col span={6} style={{ marginTop: '15px' }}>
                    <div
                        style={{
                            marginLeft: '10px',
                            backgroundColor: 'rgb(33, 114, 229)',
                            fontWeight: 500,
                            borderRadius: '16px',
                            height: '2.4rem',
                            textAlign: 'center',
                            fontSize: '15px',
                            paddingTop: '8px',
                            cursor: 'pointer'
                        }}
                        onClick={() => openStateTargetModel()}
                    >
                        {target}
                    </div>
                </Col>
            )
        } else {
            if (target && target === 'ETH') {
                return (
                    <Col
                        span={6}
                        style={{ marginTop: '15px', ...selectButtonStyle }}
                        onClick={() => openStateTargetModel()}
                    >
                        <Space
                            align='center'
                            style={{ cursor: 'pointer' }}
                        >
                            <img src={ETH_Icon} style={{ height: "30px", width: '30px' }} />
                            {target}
                            <DownOutlined />
                        </Space>
                    </Col>
                )
            } else if (target && target === "DAI") {
                return (
                    <Col
                        span={6}
                        style={{ marginTop: '15px', ...selectButtonStyle }}
                        onClick={() => openStateTargetModel()}
                    >
                        <Space
                            align='center'
                            style={{ cursor: 'pointer' }}
                        >
                            <img src={DAI_Icon} style={{ height: "30px", width: '30px' }} />
                            {target}
                            <DownOutlined />
                        </Space>
                    </Col>
                )
            } else if (target && target === "WBTC") {
                return (
                    <Col
                        span={6}
                        style={{ marginTop: '15px', ...selectButtonStyle }}
                        onClick={() => openStateTargetModel()}
                    >
                        <Space
                            align='center'
                            style={{ cursor: 'pointer' }}
                        >
                            <img src={WBTC_Icon} style={{ height: "30px", width: '30px', borderRadius: '24px' }} />
                            {target}
                            <DownOutlined style={{ marginLeft: '-5px' }} />
                        </Space>
                    </Col>
                )
            }
        }
    }

    return (
        <React.Fragment>
            <SourceModel
                open={openSoureModel}
                toggleModel={openStateSrouceModal}
                handleChangeSource={handleChangeSourceToken}
            />

            <TargetModel
                open={openTargetModel}
                toggleModel={openStateTargetModel}
                handleChangeSource={handleChangeTargetToken}
            />

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
                        <Col span={6} style={{ marginTop: '15px', ...selectButtonStyle }} onClick={() => openStateSrouceModal()}>
                            {checkSelectSource()}
                        </Col>

                        <Col span={16} style={{ marginTop: '15px' }}>
                            <Input
                                placeholder="Borderless"
                                bordered={false}
                                style={{
                                    color: 'white',
                                    fontSize: '20px',
                                    textAlign: 'right'
                                }}
                                placeholder={"0.0"}
                                onChange={(e) => handleChangeSourceValue(e)}
                            />
                        </Col>
                    </Row>

                    <Row align='middle' justify='space-between'>
                        <Col span={2} style={{ marginTop: '5px', marginLeft: '10px' }}>
                            -
                        </Col>

                        <Col style={{ float: 'right', marginRight: '10px' }}>
                            ~${sourceValue ?
                                calculateToUSD()
                                :
                                ""
                            }
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
                    left: "calc(50% - 16px)",
                    backgroundColor: "rgb(33, 36, 41)",
                    border: "4px solid rgb(25, 27, 31)",
                    zIndex: "2",
                    cursor: 'pointer',
                }}
                    onClick={() => swap()}
                >
                    <ArrowDownOutlined />
                </div>

                <div
                    style={innerCardStyle}
                >
                    <Row align='middle' justify='space-between'>
                        {checkSelectTarget()}


                        <Col span={16} style={{ marginTop: '15px' }}>
                            <Input
                                placeholder="Borderless"
                                bordered={false}
                                style={{
                                    color: 'white',
                                    fontSize: '20px',
                                    textAlign: 'right'
                                }}
                                placeholder={"0.0"}
                                value={TargetValue}
                            />
                        </Col>
                    </Row>

                    <Row align='middle' justify='space-between'>
                        <Col span={2} style={{ marginTop: '5px', marginLeft: '10px' }}>
                            -
                        </Col>

                        <Col style={{ float: 'right', marginRight: '10px' }}>
                            ~${target !== "Select Token" && sourceValue ? calculateToUSD() : ""}
                        </Col>
                    </Row>
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