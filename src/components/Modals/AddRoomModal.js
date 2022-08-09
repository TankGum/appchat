import React, { useState } from "react"
import { Form, Modal, Input } from 'antd'

function AddRoomModal() {

    const handleOk = () => {

    }

    const handleCancel = () => {

    }

    return (
        <div>
            <Modal 
                title='Tao phong'
                visible={false}
                onOk={handleOk}
                onCancel={handleCancel}
            />
            <Form>
                <Form.Item label='Mo ta' name='name' >
                    <Input placeholder="nhap ten" />
                </Form.Item>
                <Form.Item label='Mo ta' name='desc'>
                    <Input placeholder="nhap ten" />
                </Form.Item>
            </Form>
        </div>
    );
}

export default AddRoomModal;