export type IndexData = {
    aboutSection: AboutSection,
    detailsSection: DetailsSection,
    contactSection: ContactSection
}

export type AboutSection = {
    titleTop: string,
    titleBottom: string,
    paragraphs: string[],
    image:string;
}

export type DetailsSection = {
    titleTop: string,
    titleBottom: string,
    paragraphs: {
        title:string,
        body:string
    }[]
    image:string;
}

export type ContactSection = {
    titleTop: string,
    titleBottom: string,
    contactData: {
        title:string,
        body:string
    }[]
}

export type AboutData = {
    introductionParagraphs: string[],
    introductionCarouselData:CarouselData
    competencies:string[],
    workParagraphs: workParagraph[],
    workCarouselData:CarouselData
}

export type workParagraph = {
    title:string,
    body:string
}

export type CarouselData = {
    entries:CarouselEntry[];
}

export type CarouselEntry = {
    img: string,
    imgWidth:number,
    imgHeight:number,
    labelTitle:string,
    labelBody:string
}