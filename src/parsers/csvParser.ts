import fs from 'fs';
import csvParser from 'csv-parser';

interface RowData {
  [key: string]: string;
}

function parseCSV(filePath: string): Promise<RowData[]> {
  return new Promise((resolve, reject) => {
    const results: RowData[] = [];
    fs.createReadStream(filePath)
      .pipe(csvParser())
      .on('data', (row: RowData) => results.push(row))
      .on('end', () => resolve(results))
      .on('error', (error: Error) => reject(error));
  });
}

export default parseCSV;
