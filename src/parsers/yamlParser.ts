import fs from "fs";
import yaml from "js-yaml";

function parseYAML(filePath: string): Promise<object[]> {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        try {
          const yamlData = yaml.load(data);
          resolve(Array.isArray(yamlData) ? yamlData : [yamlData]);
        } catch (parseError) {
          reject(parseError);
        }
      }
    });
  });
}

export default parseYAML;
