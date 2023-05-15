import React, { useState } from 'react';
import FileUpload from './Components/FileUpload';
import Spreadsheet from './Components/Spreadsheet';

function App() {
    const [workbook, setWorkbook] = useState(null);

    const handleFileLoad = (newWorkbook) => {
        setWorkbook(newWorkbook);
    };

    return (
        <div>
            <h1>XLSX Visualizador</h1>
            <FileUpload onFileLoad={handleFileLoad} />
            <Spreadsheet workbook={workbook} />
        </div>
    );
}

export default App;
