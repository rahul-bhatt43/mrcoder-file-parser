import xlsx from 'xlsx';
import fs from 'fs';

interface RowData {
  [key: string]: string | number | boolean | null | undefined;
}

function parseExcel(filePath: string): Promise<RowData[]> {
  return new Promise((resolve, reject) => {
    try {
      const fileBuffer = fs.readFileSync(filePath);
      const workbook = xlsx.read(fileBuffer, { type: 'buffer' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];

      const data = xlsx.utils.sheet_to_json<RowData>(sheet);
      
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
}

export default parseExcel;
