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
                <img 
                    src={img} 
                    className="img-fluid max-w-[400px] mx-auto" 
                    alt='catImage'
                />
            </div>

            <div className="row">
                <div>
                    <div className="rotar">
                        <span className="letraCursiva tituloC text-center block">
                            { title }
                        </span>
                    </div>
                </div>
            </div>
            
            <div className="row">
                <div className="mouse flex blanco column cuadro justify-center items-center p-4">
                    <p className="textoCapital statement text-center">
                        {statement}
                    </p>
                </div>
            </div>
            
            <div className="row">
                <div className="mt-4 flex justify-center">
                    <Link 
                        to="menu"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        <span className="btn btn-dark hover:scale-110 transition-transform duration-200">
                            <ExpandMoreIcon/>
                        </span>
                    </Link>
                </div>
            </div>

        </section>
    )
}
