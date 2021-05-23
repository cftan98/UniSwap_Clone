import Icon from '../../TokenIcon/WBTC.png';

export default function WBTC({ handleChangeSource }) {
    return (
        <div
            style={{
                borderRadius: '15px',
                backgroundColor: 'rgb(33, 36, 41)',
                width: '100px',
                textAlign: 'center',
                padding: '5px 0 0.5px 0',
                marginBottom: '10px',
                cursor: 'pointer'
            }}
            onClick={() => {
                handleChangeSource("WBTC");
            }}
        >
            <span>
                <h2 style={{ color: 'white' }}>
                    <span>
                        <img src={Icon} style={{ height: '30px', width: '30px', borderRadius: '24px' }} />
                    </span>  WBTC
                </h2>
            </span>
        </div>

    )
}