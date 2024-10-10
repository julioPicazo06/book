export interface imgContentIllustration {
    id : number ,
    nombre : string,
    cliente : string ,
    tecnica : string,
    imgProyecto : {
      img:any
    }
    descripcion : string
    img :imgType []
  }


export interface imgType {
    src : any ,
    alt : string
  }


  export interface imgContentWeb {
    id : number ,
    nombre : string,
    cliente : string ,
    tecnica : string,
    liga? : string,
    imgProyecto : {
      img:any
    }
    descripcion : string
    img :imgType []
  } 
  