import Icon from '../../TokenIcon/DAI.png'

export default function DAI({ handleChangeSource }) {
    return (
        <div
            id={'DAI'}
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
                handleChangeSource("DAI");
            }}
        >
            <span>
                <h2 style={{ color: 'white' }}><span>
                    <img src={Icon} style={{ height: '30px', width: '30px' }} />
                </span>  DAI</h2>
            </span>
        </div>

    )
}