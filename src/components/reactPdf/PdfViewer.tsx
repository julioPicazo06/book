// components/PdfViewer.tsx
import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { Plugin } from '@react-pdf-viewer/core';

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

// default layout plugin
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

const PdfViewer: React.FC<{ fileUrl: string }> = ({ fileUrl }) => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
  
    return (
      <div style={{ height: '750px' }}>
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
              <Viewer fileUrl={fileUrl} plugins={[defaultLayoutPluginInstance]} />
          </Worker>
      </div>
    );
  };
  
  export default PdfViewer;