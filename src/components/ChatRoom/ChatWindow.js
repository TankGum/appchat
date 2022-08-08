import { UserAddOutlined } from "@ant-design/icons";
import { Avatar, Button, Form, Tooltip } from "antd";
import Input from "rc-input";
import React from "react";
import styled from "styled-components";
import Message from "./Message";

const HeaderStyled = styled.div`
    display: flex;
    justify-content: space-between;
    height: 56px;
    padding: 0 16px;
    align-item: center;
    border-bottom: 1px solid rgb(230, 230, 230);

    .header {
        &__info {
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        &__title {
            margin: 0;
            font-weight: bold;
        }

        &__desc {
            font-size: 12px;
        }
    }
`

const ButtonGroupStyled = styled.div`
    display: flex;
    align-items: center;
`

const WrapperStyled = styled.div`
    height: 100vh;
`

const ContentStyled = styled.div`
    height: calc(100% - 56px);
    display: flex;
    flex-direction: column;
    padding: 11px;
    justify-content: flex-end;
`

const FormStyled = styled(Form)`
    display: flex;
    justify-content: space-between;
    align-item: center;
    padding: 2px 2px 2px 0;
    border: 1px solid rgb(230, 230, 230);
    border-radius: 2px;

    .ant-form-item {
        flex: 1;
        margin-bottom: 0;
    }
`

const MessageListStyled = styled.div`
    max-height: 100%;
    overflow-y: auto;
`

function ChatWindow() {
    return (
        <WrapperStyled>
                <HeaderStyled>
                    <div className="header__info">
                        <p className="header__title">Phòng 1</p>
                        <span className="header__decs">Đây là Phòng 1</span>
                    </div>
                    <ButtonGroupStyled>
                        <Button icon={<UserAddOutlined />} type='text'>
                            Mời
                        </Button>
                        <Avatar.Group size='small' maxCount={4}>
                            <Tooltip title="A">
                                <Avatar>Tank</Avatar>
                            </Tooltip>
                            <Tooltip title="A">
                                <Avatar>Shelby</Avatar>
                            </Tooltip>
                            <Tooltip title="A">
                                <Avatar>Enric</Avatar>
                            </Tooltip>
                            <Tooltip title="A">
                                <Avatar>Justin</Avatar>
                            </Tooltip>
                        </Avatar.Group>
                    </ButtonGroupStyled>
                </HeaderStyled>
                <ContentStyled>
                    <MessageListStyled>
                        <Message text='Cafe ?' photoURL={null} displayName='TankGum' createdAt={44431}/>
                        <Message text='Ngồi đâu anh' photoURL={null} displayName='Shelby' createdAt={45333}/>
                        <Message text='Hội An nhé' photoURL={null} displayName='Enric' createdAt={45444}/>
                        <Message text='Em đi với :D' photoURL={null} displayName='Justin' createdAt={45555}/>
                    </MessageListStyled>
                        <FormStyled>
                                <Form.Item>
                                    <Input 
                                        placeholder="Nhập tin nhắn"
                                        bordered={false}
                                        autoComplete='off'
                                    />
                                </Form.Item>
                                <Button type="primary">Gửi</Button>
                        </FormStyled>
                </ContentStyled>
        </WrapperStyled>
    );
}

export default ChatWindow;