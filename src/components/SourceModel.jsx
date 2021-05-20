import { Button, Modal } from 'antd';

export default function SourceModel(props) {

    return (
        <>
            <Modal title="Basic Modal" visible={props.open} onOk={props.toggleModel} onCancel={props.toggleModel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </>
    )
}