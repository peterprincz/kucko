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
    sides: {
        title:string,
        paragraphs: {
            title:string,
            body:string
        }[],
    }[],
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

export type CoachData = {
    coachSection: CoachIntro,
    childCoachingSection: CoachTypeSection,
    teenagerCoachingSection: CoachTypeSection,
    parentCoachingSection: CoachTypeSection,
    cancellation: string
}

export type CoachIntro = {
    title: string,
    paragraphs: string[],
    link:string
} 

export type CoachTypeSection = {
    buttonName:string,
    title:string,
    introductionParagraphs: string[],
    listTitle:string,
    listItems:string[],
    price:Price,
    cancellation:string
}

export type SchoolData = {
    title:string,
    subtitle:string,
    paragraphs: string[],
    linkTitle: string,
    link: string,
    listTitle:string,
    listItems:string[],
    price:Price,
    cancellation:string,
}

export type Dandelion = {
    id:number,
    xTarget:number, 
    yTarget:number, 
    rotate:number, 
    offsetX: number, 
    offsetY: number 
    fadeOutTimeMS: number,
    animationtimeS: number
}

export type Price = {
    price:string,
    duration:string,
    priceDesc:string,
}