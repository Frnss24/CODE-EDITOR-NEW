import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import './App.css';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

function App() {
  const [htmlCode, setHtmlCode] = useState('<h2>Hello User</h2>');
  const [cssCode, setCssCode] = useState('body{\n  text-align:center;\n}');
  const [jsCode, setJsCode] = useState('');
  const [previewKey, setPreviewKey] = useState(0);

  // Gabungkan semua kode menjadi satu dokumen HTML
  const getFullHtml = () => {
    return `<!DOCTYPE html><html><head><style>${cssCode}</style></head><body>${htmlCode}<script>${jsCode}<' + '/script></body></html>`;
  };

  // Force preview refresh
  const refreshPreview = () => {
    setPreviewKey(prev => prev + 1);
  };

  // Fungsi download ZIP
  const handleDownloadZip = async () => {
    const zip = new JSZip();
    zip.file('index.html', htmlCode);
    zip.file('style.css', cssCode);
    zip.file('script.js', jsCode);
    const content = await zip.generateAsync({ type: 'blob' });
    saveAs(content, 'my-code-editor.zip');
  };

  return (
    <div className="app">
      <header className="header">
        <h1>🚀 Live Code Editor</h1>
        <p>Edit HTML, CSS, dan JavaScript secara real-time</p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
          <button onClick={refreshPreview} className="refresh-btn">
            🔄 Refresh Preview
          </button>
          <button onClick={handleDownloadZip} className="download-btn">
            ⬇️ Download ZIP
          </button>
        </div>
      </header>

      <div className="vertical-layout">
        <div className="editors-row">
          <div className="editor-block">
            <div className="editor-label html">HTML</div>
            <Editor
              height="30vh"
              defaultLanguage="html"
              value={htmlCode}
              onChange={setHtmlCode}
              theme="vs-dark"
              options={{
                minimap: { enabled: false },
                fontSize: 14,
                wordWrap: 'on',
                automaticLayout: true,
              }}
            />
          </div>
          <div className="editor-block">
            <div className="editor-label css">CSS</div>
            <Editor
              height="30vh"
              defaultLanguage="css"
              value={cssCode}
              onChange={setCssCode}
              theme="vs-dark"
              options={{
                minimap: { enabled: false },
                fontSize: 14,
                wordWrap: 'on',
                automaticLayout: true,
              }}
            />
          </div>
          <div className="editor-block">
            <div className="editor-label js">JavaScript</div>
            <Editor
              height="30vh"
              defaultLanguage="javascript"
              value={jsCode}
              onChange={setJsCode}
              theme="vs-dark"
              options={{
                minimap: { enabled: false },
                fontSize: 14,
                wordWrap: 'on',
                automaticLayout: true,
              }}
            />
          </div>
        </div>
        <div className="preview-row">
          <h3>Live Preview</h3>
          <div className="preview-container">
            <iframe
              key={previewKey}
              srcDoc={getFullHtml()}
              title="Live Preview"
              className="preview-frame"
              sandbox="allow-scripts allow-same-origin"
              style={{width: '100%', height: '40vh'}}
            />
          </div>
        </div>
      </div>

      <footer className="footer">
        <p>Made with ❤️ - Franzzz</p>
      </footer>
      {/* Floating GitHub Box */}
      <div className="github-float-box">
        <a href="https://github.com/Frnss24/CODE-EDITOR-NEW.git" target="_blank" rel="noopener noreferrer" className="github-link">
          <svg height="20" width="20" viewBox="0 0 16 16" fill="currentColor" style={{verticalAlign: 'middle', marginRight: 6}}>
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
          </svg>
          <span>Lihat repository di GitHub</span>
        </a>
      </div>
    </div>
  );
}

export default App;
