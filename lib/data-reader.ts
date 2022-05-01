import fs from 'fs'
import path from 'path'
import { AboutData, CoachData, IndexData, LegalData, SchoolData } from './types/data-types'

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

export function getSchoolData():SchoolData {
  const SchoolData:SchoolData = readJson("school-data");
  return SchoolData;
}

export function getLegalData(id:string):LegalData {
  const LegalDatas:LegalData[] = readJson("legal-data");
  let legalData:LegalData|undefined = LegalDatas.find(x => x.id === id);
  if(!legalData){
    legalData = LegalDatas[0];
  }
  return legalData;
}