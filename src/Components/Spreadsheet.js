import React, { useState } from "react";
import * as XLSX from "xlsx";

function Spreadsheet({ workbook }) {
    const [data, setData] = useState([]);

    if (!workbook) {
        return <p>Selecione um arquivo XLSX.</p>;
    }

    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

    const handleChange = (value, rowIndex, cellIndex) => {
        const updatedData = [...data];
        updatedData[rowIndex][cellIndex] = value;
        setData(updatedData);
    };

    return (
        <table>
            <tbody>
                {jsonData.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {row.map((cell, cellIndex) => (
                            <td key={cellIndex}>
                                <input
                                    type="text"
                                    value={cell}
                                    onChange={(e) =>
                                        handleChange(e.target.value, rowIndex, cellIndex)
                                    }
                                />
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Spreadsheet;
