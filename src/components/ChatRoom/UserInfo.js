import React, { useEffect } from "react";
import { Button, Avatar, Typography } from 'antd'
import styled from "styled-components";

import { auth, db } from "../../firebase/config";

const WrapperStyled = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 12px 12px;
    border-bottom: 1px solid rgba(82, 38, 83);

    .user-name {
        color: #fff;
        margin-left: 5px;
    }
`

function UserInfo() {

    useEffect(() => {
        db.collection('user').onSnapshot((snapshot) => {
            const data = snapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id,
            }))

            console.log({ data, snapshot, docs: snapshot.docs })
        })
    }, [])

    const handleFbLogout = () => {
        auth.signOut()
    }

    return (
        <WrapperStyled>
                <div>
                    <Avatar>Avatar</Avatar>
                    <Typography.Text className="user-name">Tank</Typography.Text>
                </div>
                <Button ghost onClick={handleFbLogout}>Đăng xuất</Button>
        </WrapperStyled>
    );
}

export default UserInfo;