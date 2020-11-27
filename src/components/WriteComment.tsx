import { Upload } from 'antd';
import { UploadChangeParam } from 'antd/lib/upload';
import { UploadFile } from 'antd/lib/upload/interface';
import React, { useEffect, useRef, useState } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import styled from 'styled-components';
import { SendMessage } from '../typings/common';
import Toolbar from './Toolbar';

type WriteCommentProps = {
  sendMessage: (message: SendMessage) => void;
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
  .ant-upload {
    display: none;
  }
`;

function WriteComment({ sendMessage }: WriteCommentProps) {
  let quillRef = useRef<ReactQuill | null>(null);
  let editorRef = useRef<Quill | null | undefined>(null);
  let imageInputRef = useRef<HTMLInputElement | null>(null);
  const [chat, setChat] = useState('');
  const [imageList, setImageList] = useState<UploadFile[]>([]);

  const modules = {
    toolbar: {
      container: '#toolbar',
    },
  };

  const onSendMessage = async () => {
    const imageUrls = imageList.map((image) => image.response.url);
    sendMessage({ chat, imageUrls });
    setChat('');
    setImageList([]);
  };

  const onChangeChat = (chat: string) => {
    setChat(chat);
  };

  const onChangeUpload = ({
    file,
    fileList,
  }: UploadChangeParam<UploadFile<any>>) => {
    if (file.status === 'done') {
      setImageList(fileList);
    }
  };

  useEffect(() => {
    editorRef.current = quillRef.current?.getEditor();
    const editor = editorRef.current;
    const toolbar = editor?.getModule('toolbar');
    toolbar.addHandler('image', () => {
      imageInputRef.current?.click();
    });
  }, []);

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
        <Upload
          action="http://localhost:3005/image"
          listType="picture-card"
          onChange={onChangeUpload}
          name="img"
          withCredentials
          fileList={imageList}
        >
          <input hidden ref={imageInputRef} />
        </Upload>
        <Toolbar onClickSendButton={onSendMessage} />
      </StyledWriteComment>
    </Wrapper>
  );
}

export default WriteComment;
