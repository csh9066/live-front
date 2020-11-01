import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { FaCaretDown } from 'react-icons/fa';
import { GoPlus } from 'react-icons/go';
import MenuItem from './MenuItem';
import Avatar from 'antd/lib/avatar/avatar';

type MenuProps = {
  title: string;
  children: React.ReactNode;
  onOpenModal?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const SideBarColor = {
  Font: '#C1B6C0',
};

const StyledMenu = styled.div`
  color: ${SideBarColor.Font};
  font-weight: 500;
  font-size: 15px;
`;

const MenuTitle = styled.div<{ select: boolean }>`
  display: flex;
  height: 36px;
  padding: 0 16px;
  align-items: center;
  cursor: pointer;

  .title-text {
    flex: 1;
    padding-left: 4px;
  }

  .menu-button {
    font-size: 18px;
    width: 26px;
    height: 26px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background: rgb(193, 182, 192, 0.12);
    }

    .menu-plus-i {
      display: none;
    }

    .menu-care-down-i {
      ${(props) =>
        props.select &&
        css`
          transform: rotate(-90deg);
        `};
      transition: all 0.2s ease-in-out;
    }
  }

  &:hover {
    .menu-plus-i {
      display: block;
    }
  }
`;

function Menu({ title, children, onOpenModal }: MenuProps) {
  const [titleSelect, setTitleSelect] = useState(false);

  const onToggleTitleSelect = () => {
    setTitleSelect(!titleSelect);
  };

  return (
    <StyledMenu>
      <MenuTitle select={titleSelect} onClick={onToggleTitleSelect}>
        <button className="menu-button">
          <FaCaretDown className="menu-care-down-i" />
        </button>
        <div className="title-text">{title}</div>
        <button className="menu-button" onClick={onOpenModal}>
          <GoPlus className="menu-plus-i" />
        </button>
      </MenuTitle>
      <ul style={{ display: `${titleSelect ? 'none' : 'block'}` }}>
        {children}
      </ul>
    </StyledMenu>
  );
}

export default Menu;
