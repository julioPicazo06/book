const enpoint = "https://us-central1-bookcontent-eb619.cloudfunctions.net/";



export const endpoints = {
    jobs : `${enpoint}getDocumentByName?name=JobsTimeLineContents`,
    grades : `${enpoint}getDocumentByName?name=timeLineContents`,
    cover : `${enpoint}getDocumentByName?name=coverDataMultilenguage`,
    menu : `${enpoint}getDocumentByName?name=menuDataMultilenuage`,
    about : `${enpoint}getDocumentByName?name=aboutDataMultilenguage`,
    skills : `${enpoint}getDocumentByName?name=contentSkills`,
    illustration : `${enpoint}getDocumentByName?name=contentIllustration`,
    contentWeb : `${enpoint}getDocumentByName?name=contentWebR`,
    form : `${enpoint}getDocumentByName?name=formData`
}

