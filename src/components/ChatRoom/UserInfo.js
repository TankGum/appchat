import React, { useContext, useEffect } from "react";
import { Button, Avatar, Typography } from 'antd'
import styled from "styled-components";
import { AuthContext } from "../../Context/AuthProvider";

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

    const { user: {
        displayName,
        photoURL
    } } = useContext(AuthContext)

    const handleFbLogout = () => {
        auth.signOut()
    }

    return (
        <WrapperStyled>
            <div>
                <Avatar src={photoURL}>
                    {photoURL ? '' : displayName?.charAt(0)?.toUpperCase()}
                </Avatar>
                <Typography.Text className="user-name">{displayName}</Typography.Text>
            </div>
            <Button ghost onClick={handleFbLogout}>Đăng xuất</Button>
        </WrapperStyled>
    );
}

export default UserInfo;