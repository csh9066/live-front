import React from 'react';
import styled from 'styled-components';
import { FaPaperPlane } from 'react-icons/fa';
import { Tooltip } from 'antd';

type ToolbarProps = {
  onClickSendButton: () => void;
};

const StyledToolbar = styled.div`
  background-color: #f0f0f0;

  position: relative;

  .right {
    position: absolute;
    right: 0;
    padding-right: 12px;
  }
`;

const TooltipText = styled.div`
  .title {
    text-align: center;
    font-weight: bold;
  }
  .desc {
  }
`;

function Toolbar({ onClickSendButton }: ToolbarProps) {
  return (
    <StyledToolbar id="toolbar">
      <div>
        <Tooltip
          placement="top"
          title={
            <TooltipText>
              <div className="title">굵게</div>
              <div className="desc">Crtl + B</div>
            </TooltipText>
          }
        >
          <button className="ql-bold" />
        </Tooltip>
        <button className="ql-italic" />
        <button className="ql-strike" />
        <button className="ql-code" />
        <button className="ql-list" value="ordered" />
        <button className="ql-list" value="bullet" />
        <button className="ql-image" />
      </div>
      <div className="right">
        <button
          id="chatSubmitBtn"
          style={{ backgroundColor: '#007a5a' }}
          onClick={onClickSendButton}
        >
          <FaPaperPlane className="tooblar-pp" />
        </button>
      </div>
    </StyledToolbar>
  );
}

export default Toolbar;
