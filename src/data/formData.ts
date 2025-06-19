import contactoImg from 'img/3.png';

interface IFormData {
    pageTitle : string;
    title : string;
    name : string;
    lastName : string;
    email : string;
    subject : string;
    message : string;
    button : string;
    success : string;
    img : string;
}


export interface MultiLangFormData {
    [key:string]:IFormData
}


export const formData :MultiLangFormData = {
    es : {
        pageTitle : "Contacto",
        title : "Mantengamos contacto",
        name : "Nombre",
        lastName : "Apellido",
        email : "Email",
        subject : "Asunto",
        message : "Mensaje",
        button : "Enviar",
        success : "Mensaje enviado con éxito",
        img : contactoImg
    },
    en : {
        pageTitle : "Contact",
        title : "Keep in touch",
        name : "Name",
        lastName : "Last Name",
        email : "Email",
        subject : "Subject",
        message : "Message",
        button : "Send",
        success : "Message sent successfully",
        img : contactoImg
    }

}

export const getFormData = (lang: string = ""): IFormData => {
    return formData[lang] || formData['es']; // Default to 'es' if the language is not found
};


interface IAlertMessage {
    name : string;
    lastName : string;
    email : string;
    subject : string;
    message : string;
    emailInvalid : string;
}

export interface MultiLangAlertMessage {
    [key:string]:IAlertMessage
}

export const alertMessage : MultiLangAlertMessage = {
    es : {
        name : "Nombre es requerido",
        lastName : "Apellido es requerido",
        email : "Email es requerido",
        subject : "Asunto es requerido",
        message : "Mensaje es requerido",
        emailInvalid : "Email inválido"
    },
    en : {
        name : "Name is required",
        lastName : "Last Name is required",
        email : "Email is required",
        subject : "Subject is required",
        message : "Message is required",
        emailInvalid : "Invalid email"
    }
}

export const getAlertMessage = (lang: string = ""): IAlertMessage => {
    return alertMessage[lang] || alertMessage['es']; // Default to 'es' if the language is not found
};