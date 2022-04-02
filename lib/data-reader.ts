import fs from 'fs'
import path from 'path'
import { IndexData } from './types/data-types'

const dataDirectory:string = path.join(process.cwd(), "data")

function readJson(fileName:string):any {
  const filePath:string = path.join(dataDirectory, `${fileName}.json`)
  const rawData:string = fs.readFileSync(filePath, { encoding: 'utf8', flag: 'r' });
  return JSON.parse(rawData);
}

export function getIndexData():IndexData {
  const indexData:IndexData = readJson("index-data");
  return indexData;
}
