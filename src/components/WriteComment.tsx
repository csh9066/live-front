import React, { useEffect, useRef } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import styled from 'styled-components';
import Toolbar from './Toolbar';

type WriteCommentProps = {
  chat: string;
  onChangeChat: (chat: string) => void;
  onSendMessage: () => void;
};

const Wrapper = styled.div`
  padding: 15px;
`;

const StyledWriteComment = styled.div`
  border: 1px solid gray;
  border-radius: 4px;
  //custom quill
  .ql-editor {
    max-height: calc(60vh - 80px);
  }
  .ql-toolbar.ql-snow,
  .ql-container.ql-snow {
    border: none;
  }
  .ql-toolbar.ql-snow {
    border-top: 1px solid #ccc;
  }

  .ql-snow.ql-toolbar button {
    width: 2rem;
    height: 2rem;

    svg {
      height: 70%;
    }

    .tooblar-pp {
      transform: rotate(55deg);
      color: white;
    }
  }
`;

function WriteComment({
  chat,
  onChangeChat,
  onSendMessage,
}: WriteCommentProps) {
  let quillRef = useRef<ReactQuill | null>(null);
  let editor = useRef<Quill | null | undefined>(null);

  useEffect(() => {
    editor.current = quillRef.current?.getEditor();
  }, []);

  const modules = {
    toolbar: {
      container: '#toolbar',
    },
  };

  return (
    <Wrapper>
      <StyledWriteComment>
        <ReactQuill
          value={chat}
          onChange={onChangeChat}
          modules={modules}
          theme="snow"
          ref={quillRef}
        />
        <Toolbar onClickSendButton={onSendMessage} />
      </StyledWriteComment>
    </Wrapper>
  );
}

export default WriteComment;
