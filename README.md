# MrCoder's File Parser :)

mrcoder-file-parser is a flexible and efficient TypeScript-based library that allows you to parse various file types like CSV, Excel (XLSX and XLS), XML, and YAML. It provides a unified API to extract data from different file formats, making it easier to handle file parsing in your projects.

## Installation

Install the package using npm:

```bash
npm install mrcoder-file-parser
```

## Supported File Types

- CSV
- Excel (XLSX, XLS)
- XML
- YAML

## Usage

Here’s how you can use the mrcoder-file-parser in your project:

```typescript
import parseFile from 'mrcoder-file-parser';

async function parseData() {
  try {
    const csvData = await parseFile('path/to/file.csv');
    const excelData = await parseFile('path/to/file.xlsx');
    const xmlData = await parseFile('path/to/file.xml');
    const yamlData = await parseFile('path/to/file.yaml');
    
    console.log('CSV Data:', csvData);
    console.log('Excel Data:', excelData);
    console.log('XML Data:', xmlData);
    console.log('YAML Data:', yamlData);
  } catch (error) {
    console.error('Error parsing file:', error);
  }
}

parseData();
```

## API

### `parseFile(filePath: string): Promise<object[]>`

- `filePath`: The path to the file you want to parse.
- Returns: A promise that resolves to an array of objects representing the parsed data.

## Example

```typescript
import parseFile from 'mrcoder-file-parser';

parseFile('data.csv')
  .then(data => console.log(data))
  .catch(err => console.error('Failed to parse file:', err));
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have any improvements or new features you'd like to see.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.