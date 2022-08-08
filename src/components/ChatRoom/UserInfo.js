import React from "react";
import { Button, Avatar, Typography } from 'antd'
import styled from "styled-components";

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
    return (
        <WrapperStyled>
                <div>
                    <Avatar>Avatar</Avatar>
                    <Typography.Text className="user-name">Tank</Typography.Text>
                </div>
                <Button ghost>Đăng xuất</Button>
        </WrapperStyled>
    );
}

export default UserInfo;