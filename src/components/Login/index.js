import React from "react";
import { Row, Col, Button, Typography } from 'antd'
import firebase, { auth } from '../../firebase/config';
import { addDocument } from "../../firebase/services";

const { Title } = Typography

const fbProvider = new firebase.auth.FacebookAuthProvider()

function Login() {
    const handleFbLogin = async () => {
        const { additionalUserInfo, user } = await auth.signInWithPopup(fbProvider)

        if (additionalUserInfo?.isNewUser) {
            addDocument('user', {
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
                uid: user.displayName,
                providerId: additionalUserInfo.providerId,
            })
        }
    }

    return (
        <div>
            <Row justify="center" style={{ height: 800 }}>
                <Col span={8}>
                    <Title style={{ textAlign: 'center' }} level={3}>
                        Fun Chat
                    </Title>
                    <Button style={{ width: '100%', marginBottom: 5 }}>
                        Đăng nhập với Google
                    </Button>
                    <Button style={{ width: '100%' }} onClick={handleFbLogin}>
                        Đăng nhập với Facebook
                    </Button>
                </Col>
            </Row>
        </div>
    );
}

export default Login;