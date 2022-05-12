import { drive_v3, google  } from 'googleapis';
import { JWT } from 'google-auth-library';
import { AboutData, CoachData, IndexData, SchoolData } from './types/data-types'
import * as fallbackDataReader from './data-reader'
import { GaxiosResponse } from 'gaxios';
import fs from 'fs'
import path from 'path'



class DriveFileHandler {

    credentials:{
        client_email:string,
        private_key:string
    } | null;
    scopes: string[];
    auth: JWT;
    drive: drive_v3.Drive;
    fileDataMap: {
        aboutData:  string,
        coachData:  string,
        indexData:  string,
        legalData:  string,
        schoolData: string
    }


    constructor(){
        try {
            this.credentials = JSON.parse(fs.readFileSync(path.join(process.cwd(), "credentials.json"), { encoding: 'utf8', flag: 'r' }));
        } catch(err){
            console.error(err)
            this.credentials = null;
        }
        if(this.credentials == null){
            console.error("credentials.json file to access google drive is missing from root directory");
        }
        this.scopes = ['https://www.googleapis.com/auth/drive'];
        this.auth = new google.auth.JWT(
            this.credentials?.client_email, undefined,
            this.credentials?.private_key, this.scopes
        );
        this.drive = google.drive({ version: "v3", auth: this.auth });
        this.fileDataMap = {
            aboutData: "about-data",
            coachData: "coach-data",
            indexData: "index-data",
            legalData: "legal-data",
            schoolData: "school-data"
        }
    }


    getIndexData = async (): Promise<IndexData> => {
        return this.getCurrentData(this.fileDataMap.indexData, fallbackDataReader.getIndexData);
    }

    getAboutData = async (): Promise<AboutData> => {
        return this.getCurrentData(this.fileDataMap.aboutData, fallbackDataReader.getAboutData);
    }

    getCoachData = async (): Promise<CoachData> => {
        return this.getCurrentData(this.fileDataMap.coachData, fallbackDataReader.getCoachData);
    }

    getSchoolData = async (): Promise<SchoolData> => {
        return this.getCurrentData(this.fileDataMap.schoolData, fallbackDataReader.getSchoolData);
    }

    getCurrentData = async (fileName: string, fallback: () => any): Promise<any> => {
        if(this.credentials == null){
            return fallback();
        }
        try {
            let files:drive_v3.Schema$File[] = await this.listFiles(fileName);
            files.sort((x , y) => (x.name as string).localeCompare((y.name) as string));
            if(files[0]){
                const json = await this.downloadFile((files[0].id as string));    
                return JSON.parse(json);
            }
            throw new Error("Could not find file with name: " + fileName)
        } catch(err){
            console.warn("could not get indexData from Google drive, fallbacking to local copy", err);
            return fallback();
        }
    } 

    private listFiles = async (nameFilter:string): Promise<drive_v3.Schema$File[]> => {
        return new Promise((resolve, reject) => {
            //this.drive.files.list({}, (err: any, res: { data: { files: {name:string}[]; }; }) => {
            this.drive.files.list({}, (err: Error | null, res?: GaxiosResponse<drive_v3.Schema$FileList> | null) => {
                if (err) return reject(err);
                if(!res || !res.data || !res.data.files) return reject(new Error("No reponse from google drive"));
                const files = res.data.files;
                if (!files) {
                    return reject(new Error('No files found with name:' + nameFilter));
                }
                return resolve(files.filter(x => x.name && x.name.includes(nameFilter)));
            });
        })
    }



    private downloadFile = async (fileId: string): Promise<string> => {
        return new Promise((resolve, reject) => { // make the function a promise
            this.drive.files.get({ 
                fileId: fileId, 
                alt: 'media' 
            },
            { 
                responseType: "arraybuffer" 
            },
                (err: Error | null, res?: GaxiosResponse<drive_v3.Schema$File> | null) => {
                    if (err) {
                        return reject(Buffer.from(err.message).toString());
                    }
                    if(!res || !res.data){
                        return reject(new Error('Could not download file with id: ' + fileId));
                    }
                    return resolve(Buffer.from(res.data as any).toString());
                }
            );
        });
    }
}

export default new DriveFileHandler();