import { FC } from 'react'
import cat from 'img/cat.png'
import { Link } from "react-scroll";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { coverData } from 'data/coverData';

export const Cover: FC<any> = () => {
    
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
                            { coverData.title }
                        </span>

                    </div>

                </div>
            </div>
            <div className="row">
                <div className="mouse  flex blanco column cuadro">



                    <p className="textoCapital statement">
                        {coverData.statement }

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
                           <ExpandMoreIcon/>
                        </span>
                    </Link>
                </div>
            </div>




        </section>
    )
}
