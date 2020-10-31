import { Avatar, Menu, Layout, Badge } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import React from 'react';
import styled from 'styled-components';

type SideBarProps = {
  onToggleFirendModal: () => void;
};

const StyledMenuItem = styled(Menu.Item)`
  .text {
    padding-left: 1rem;
  }
`;

const StyledAvatar = styled(Avatar)``;

function SideBar({ onToggleFirendModal }: SideBarProps) {
  return (
    <Layout.Sider theme={'dark'} width={230}>
      <Menu
        mode="inline"
        theme={'dark'}
        inlineIndent={8}
        defaultOpenKeys={['channel', 'dm']}
      >
        <SubMenu title="채널" key="channel">
          <StyledMenuItem
            icon={
              <StyledAvatar
                size={'small'}
                shape="square"
                style={{ backgroundColor: '#431E44' }}
              >
                #
              </StyledAvatar>
            }
          >
            <span className="text">담소방</span>
          </StyledMenuItem>
          <StyledMenuItem
            icon={
              <StyledAvatar
                style={{ backgroundColor: '#431E44' }}
                size="small"
                shape="square"
              >
                +
              </StyledAvatar>
            }
          >
            <span className="text">채널 추가</span>
          </StyledMenuItem>
        </SubMenu>
        <SubMenu title="다이렉트 메시지" key="dm">
          <StyledMenuItem
            icon={
              <Badge status="default" dot offset={[0, 30]}>
                <StyledAvatar
                  size="small"
                  shape="square"
                  src={
                    'https://ca.slack-edge.com/T01D6JLRG4C-U01CTMS5LEA-7d0fd815bc41-24'
                  }
                >
                  안녕
                </StyledAvatar>
              </Badge>
            }
          >
            <span className="text">김치</span>
          </StyledMenuItem>
          <StyledMenuItem
            icon={
              <Badge status="success" dot offset={[0, 30]}>
                <StyledAvatar
                  size="small"
                  shape="square"
                  src={
                    'https://ca.slack-edge.com/T01D6JLRG4C-U01CTMS5LEA-7d0fd815bc41-24'
                  }
                >
                  안녕
                </StyledAvatar>
              </Badge>
            }
          >
            <span className="text">최승호</span>
            <span style={{ marginLeft: 8, opacity: 0.7 }}>나</span>
          </StyledMenuItem>
          <StyledMenuItem
            onClick={onToggleFirendModal}
            icon={
              <StyledAvatar
                style={{ backgroundColor: '#431E44' }}
                size="small"
                shape="square"
              >
                +
              </StyledAvatar>
            }
          >
            <span className="text">친구 추가</span>
          </StyledMenuItem>
        </SubMenu>
      </Menu>
    </Layout.Sider>
  );
}

export default SideBar;
