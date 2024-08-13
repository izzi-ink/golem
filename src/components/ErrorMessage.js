import React from 'react';

const ErrorMessage = ({ message }) => {
  return (
    <div className="error-container">
      <div className="header">
        <span className="add-material">+ Add your material to the library</span>
        <button className="upload-button">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12"/>
          </svg>
        </button>
      </div>
      <div className="error-message">
        {message}
      </div>
      <div className="footer">
        <button className="alert-button">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0zM12 9v4M12 17h.01"/>
          </svg>
        </button>
      </div>
      <style jsx>{`
        .error-container {
          background-color: #1F2937;
          padding: 16px;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }
        .add-material {
          color: white;
          font-size: 18px;
        }
        .upload-button {
          background: none;
          border: none;
          color: white;
          cursor: pointer;
        }
        .upload-button svg {
          width: 24px;
          height: 24px;
        }
        .error-message {
          background-color: #FEE2E2;
          color: #991B1B;
          padding: 12px;
          border-radius: 6px;
          font-size: 14px;
        }
        .footer {
          display: flex;
          justify-content: flex-end;
          margin-top: 16px;
        }
        .alert-button {
          background-color: #EF4444;
          border: none;
          border-radius: 50%;
          padding: 8px;
          cursor: pointer;
        }
        .alert-button svg {
          width: 24px;
          height: 24px;
          color: white;
        }
      `}</style>
    </div>
  );
};

export default ErrorMessage;