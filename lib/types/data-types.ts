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
    carouselData:CarouselData
}

export type CarouselData = {
    entries:CarouselEntry[];
}

export type CarouselEntry = {
    img: string,
    labelTitle:string,
    labelBody:string
}