import { FC } from 'react'
import { Link } from "react-scroll";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';

export const Cover: FC<any> = () => {

    const { title , statement , img } = useSelector((state:RootState) => state.cover);
    
    

    return (
        <section className="contenedor-portada portada" >


            <div className="row">
                <img src={img} className="img-fluid" style={{
                    maxWidth: "400px"
                }}  alt='catImage'/>
            </div>



            <div className="row">
                <div>
                    <div className=" rotar ">
                        <span className="letraCursiva tituloC ">
                            { title }
                        </span>

                    </div>

                </div>
            </div>
            <div className="row">
                <div className="mouse  flex blanco column cuadro">



                    <p className="textoCapital statement">
                        {statement}

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
