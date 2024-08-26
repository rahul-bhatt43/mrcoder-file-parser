import path from "path";
import parseCSV from "./parsers/csvParser";
import parseExcel from "./parsers/excelParser";
import parseXML from "./parsers/xmlParser";
import parseYAML from "./parsers/yamlParser";

function parseFile(filePath: string): Promise<object[]> {
  const extname = path.extname(filePath).toLowerCase();

  switch (extname) {
    case ".csv":
      return parseCSV(filePath);
    case ".xlsx":
    case ".xls":
      return parseExcel(filePath);
    case ".xml":
      return parseXML(filePath);
    case ".yaml":
    case ".yml":
      return parseYAML(filePath);
    default:
      return Promise.reject(new Error("Unsupported file type"));
  }
}

export { parseFile };
