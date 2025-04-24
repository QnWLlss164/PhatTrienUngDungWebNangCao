import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const PostEditor = ({ value, onChange }) => {

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'align': [] }],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      ['link', 'image'],
      ['clean']
    ],
  };

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike',
    'align',
    'list', 'bullet',
    'link', 'image'
  ];

  return (
    <div style={{ margin: 'auto' }}>
      <h2>Soạn bài viết</h2>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
        placeholder="Nhập nội dung bài viết ở đây..."
        style={{ height: '400px', marginBottom: '30px' }}
      />
    </div>
  );
};

export default PostEditor;

