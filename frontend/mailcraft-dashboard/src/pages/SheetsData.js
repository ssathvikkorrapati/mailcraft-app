// src/pages/SheetsData.js
import React, { useEffect, useState } from 'react';
import { fetchSheetData } from '../api/apiService';

const SheetsData = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const sheetData = await fetchSheetData();
        setData(sheetData);
      } catch (error) {
        setError('Failed to fetch sheet data');
      }
    };

    loadData();
  }, []);

  return (
    <div>
      <h2>Google Sheets Data</h2>
      {error && <p>{error}</p>}
      {data.length ? (
        <table>
          <thead>
            <tr>
              <th>Column 1</th>
              <th>Column 2</th>
              <th>Column 3</th>
              <th>Column 4</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                {row.map((cell, i) => (
                  <td key={i}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default SheetsData;
