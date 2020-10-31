import React, { useEffect, useRef, useState } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import styled from 'styled-components';
import Toolbar from './Toolbar';

type WriteCommentProps = {};

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

function WriteComment(props: WriteCommentProps) {
  const [value, setvalue] = useState('');

  let quillRef = useRef<ReactQuill | null>(null);
  let editor = useRef<Quill | null | undefined>(null);

  useEffect(() => {
    editor.current = quillRef.current?.getEditor();
  }, []);

  const onChangeValue = (content: string) => {
    setvalue(content);
  };

  const modules = {
    toolbar: {
      container: '#toolbar',
    },
  };

  return (
    <StyledWriteComment>
      <ReactQuill
        value={value}
        onChange={onChangeValue}
        modules={modules}
        theme="snow"
        ref={quillRef}
      />
      <Toolbar />
    </StyledWriteComment>
  );
}

export default WriteComment;
