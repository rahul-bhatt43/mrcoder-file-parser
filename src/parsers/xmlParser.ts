import fs from "fs";
import xml2js from "xml2js";

function parseXML(filePath: string): Promise<object[]> {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        xml2js.parseString(data, (parseError, result) => {
          if (parseError) {
            reject(parseError);
          } else {
            resolve([result]);
          }
        });
      }
    });
  });
}

export default parseXML;
