import './index.scss';
import React, { useRef, useEffect } from 'react';
import Editor from '../utils/Editor';

const Main = (props) => {
  const containerRef = useRef();

  useEffect(() => {
    if (!containerRef.current) return;

    Editor.setEditor(containerRef.current);
  }, []);

  return (
    <div className="container">
      aaa
      <div ref={containerRef} className="editor" />
    </div>
  );
};

export default Main;
