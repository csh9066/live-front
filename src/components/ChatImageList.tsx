import { Image } from 'antd';
import React, { useState } from 'react';
import { FaCaretDown } from 'react-icons/fa';
import styled from 'styled-components';

type ChatImageListProps = {
  imageUrls: string[];
};

const StyledChatImageList = styled.div`
  .header {
    padding: 12px 0;
    display: flex;
    font-size: 0.875rem;
    color: #8c8c8c;
    .toggle-btn {
      padding: 0 6px;
      height: 100%;
      cursor: pointer;
    }
  }
  .images {
    display: flex;
    .image-container {
      width: 86px;
      height: 64px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      border: 1px solid#e9ecef;
      margin-right: 12px;
    }
  }
`;

function ChatImageList({ imageUrls }: ChatImageListProps) {
  const [visible, setVisible] = useState(false);

  const onClickToggleBtn = () => {
    setVisible(!visible);
  };

  return (
    <StyledChatImageList>
      <div className="header">
        <span>{imageUrls.length}개 파일</span>
        <div className="toggle-btn" onClick={onClickToggleBtn}>
          <FaCaretDown />
        </div>
      </div>
      {visible && (
        <div className="images">
          {imageUrls.map((image) => (
            <div className="image-container" key={image}>
              <Image src={image} width="20" />
            </div>
          ))}
        </div>
      )}
    </StyledChatImageList>
  );
}

export default ChatImageList;
