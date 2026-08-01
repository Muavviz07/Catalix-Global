'use client';

import React, { useMemo } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

interface QuillEditorProps {
  value: string;
  onChange: (content: string) => void;
  placeholder?: string;
}

export default function QuillEditor({ value, onChange, placeholder }: QuillEditorProps) {
  const ReactQuill = useMemo(
    () =>
      dynamic(() => import('react-quill'), {
        ssr: false,
        loading: () => (
          <div className="h-64 bg-slate-100 dark:bg-slate-800 animate-pulse rounded-md flex items-center justify-center text-slate-400">
            Loading Rich Text Editor...
          </div>
        ),
      }),
    []
  );

  const modules = useMemo(
    () => ({
      toolbar: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['blockquote', 'code-block'],
        [{ color: [] }, { background: [] }],
        ['link', 'clean'],
      ],
    }),
    []
  );

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'list',
    'bullet',
    'blockquote',
    'code-block',
    'color',
    'background',
    'link',
  ];

  return (
    <div className="bg-white rounded-md overflow-hidden border border-slate-300 focus-within:border-brand-gold shadow-sm">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        placeholder={placeholder || 'Write your blog content here...'}
        modules={modules}
        formats={formats}
        className="min-h-[350px] text-brand-navy"
      />
    </div>
  );
}
