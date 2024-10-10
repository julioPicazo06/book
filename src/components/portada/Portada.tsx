import { FC } from 'react'
import cat from '../../img/cat.png'
import { Link } from "react-scroll";


export const Portada: FC<any> = () => {
    return (
        <section className="contenedor-portada portada" >


            <div className="row">
                <img src={cat} className="img-fluid" style={{
                    maxWidth: "400px"
                }}  alt='catImage'/>
            </div>



            <div className="row">
                <div>
                    <div className=" rotar ">
                        <span className="letraCursiva tituloC ">
                            Julio Eduardo Picazo Rodriguez
                        </span>

                    </div>

                </div>
            </div>
            <div className="row">
                <div className="mouse  flex blanco column cuadro">



                    <p className="textoCapital statement">
                        &nbsp;
                        Transformo ideas en código funcional y eficiente...
                        &nbsp; &nbsp;y también hago dibujitos.
                        &nbsp;

                    </p>



                </div>

            </div>
            <div className="row">
                <div className=" mt-1">
                    <Link to="menu"
                        spy={true}
                        smooth={true}
                        duration={500}>

                        <span className="btn btn-dark">
                            <i className="material-icons  flecha ">arrow_back_ios_new</i>
                        </span>
                    </Link>
                </div>
            </div>




        </section>
    )
}
