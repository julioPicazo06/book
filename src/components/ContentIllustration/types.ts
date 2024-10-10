

export interface PropsIllustracion {
    handleClose:Function
}

export interface imgenes {
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