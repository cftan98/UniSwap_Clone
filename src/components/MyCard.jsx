import { Card, Space, Select, Button, Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import ETHIcon from '../TokenIcon/ETH.png';
import { DownOutlined } from '@ant-design/icons';
import SourceModel from './SourceModel';

const { Option } = Select;

const cardStyle = {
    backgroundColor: 'rgb(44, 47, 54)',
    width: '100%',
    marginBottom: '10px',
    borderRadius: '15px',
}

export default function MyCard() {
    const [source, setSource] = useState('ETH')
    const [target, setTarget] = useState()

    const [openSoureModel, setOpenModel] = useState(false)

    useEffect(() => {
        console.log(openSoureModel)
    }, [openSoureModel]);

    // const handleChangeSource = (value) => {
    //     setSource(value);
    // }

    const openSourceModel = () => {
        setOpenModel((value) => {
            value = !value
            return value
        });
    }

    return (
        <React.Fragment>
            <SourceModel open={openSoureModel} toggleModel={openSourceModel} />
            <Card
                style={{
                    width: '480px',
                    borderRadius: '24px',
                    padding: '10px',
                    backgroundColor: 'rgb(25, 27, 31)',
                    boxShadow: 'rgb(0 0 0 / 1%) 0px 0px 1px, rgb(0 0 0 / 4%) 0px 4px 8px, rgb(0 0 0 / 4%) 0px 16px 24px, rgb(0 0 0 / 1%) 0px 24px 32px',
                    color: "white",
                    fontSize: '16px',
                }}
            >
                <div style={{ marginLeft: '20px', marginTop: '5px', display: 'inline-block' }}>
                    <h3 style={{ color: 'white' }}>Swap</h3>
                </div>

                <Card.Grid
                    style={cardStyle}
                    hoverable={false}
                >
                    <Button
                        style={{
                            backgroundColor: 'rgb(28, 28, 28)',
                            borderRadius: '10px',
                            color: 'white',
                            fontWeight: '500'
                        }}
                        icon={<DownOutlined />}
                        onClick={() => openSourceModel()}
                    >{source}
                    </Button>
                </Card.Grid>
                <Card.Grid
                    style={cardStyle}
                    hoverable={false}
                >
                    Target
            </Card.Grid>
                <button style={{
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
            </Card>
        </React.Fragment>
    )
}