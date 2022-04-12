import fs from 'fs'
import path from 'path'
import { AboutData, CoachData, IndexData } from './types/data-types'

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


export function getAboutData():AboutData {
  const aboutData:AboutData = readJson("about-data");
  return aboutData;
}

export function getCoachData():CoachData {
  const coachData:CoachData = readJson("coach-data");
  return coachData;
}