import { parseFile } from '../src';
import path from 'path';

async function test() {
  try {
    const csvData = await parseFile(path.join(__dirname, 'test.csv'));
    console.log('CSV Data:', csvData);

    const excelData = await parseFile(path.join(__dirname, 'test.xlsx'));
    console.log('Excel Data:', excelData);
  } catch (error) {
    console.error('Error:', error);
  }
}

test();
