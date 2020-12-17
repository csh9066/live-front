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
  const [isSendable, setIsSendable] = useState(false);

  const modules = {
    toolbar: {
      container: '#toolbar',
    },
  };

  const onSendMessage = async () => {
    if (!isSendable) return;
    const imageUrls = imageList.map((image) => image.response.url);
    sendMessage({ chat, imageUrls });
    setChat('');
    setImageList([]);
  };

  const onChangeChat = (chat: string) => {
    setChat(chat);
    const text = editorRef?.current?.getText().trim();
    const haveText = text ? true : false;

    if (isSendable !== haveText && imageList.length === 0) {
      setIsSendable(haveText);
    }
  };

  const onChangeUpload = ({ fileList }: UploadChangeParam<UploadFile<any>>) => {
    const haveImageList = fileList.length > 0;
    if (haveImageList !== isSendable) {
      setIsSendable(haveImageList);
    }

    setImageList(fileList);
  };

  useEffect(() => {
    editorRef.current = quillRef.current?.getEditor();
    const editor = editorRef.current;
    const submitBtn = document.getElementById('chatSubmitBtn');
    const keyboard = editor?.getModule('keyboard');
    delete keyboard.bindings[13];

    editor?.keyboard.addBinding(
      {
        key: 'Enter',
      },
      () => {
        submitBtn?.click();
      }
    );

    editor?.keyboard.addBinding(
      {
        key: 'Enter',
      },
      {
        shiftKey: true,
      },
      (range) => {
        editor.insertText(range.index, '\n');
      }
    );

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
          action={`${process.env.REACT_APP_API_URL}/image`}
          listType="picture-card"
          onChange={onChangeUpload}
          name="img"
          withCredentials
          fileList={imageList}
        >
          <input hidden ref={imageInputRef} />
        </Upload>
        <Toolbar onClickSendButton={onSendMessage} isSendable={isSendable} />
      </StyledWriteComment>
    </Wrapper>
  );
}

export default WriteComment;
