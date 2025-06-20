import { FC } from 'react'
import { Link } from "react-scroll";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';

export const Cover: FC<any> = () => {

    const { title , statement , img } = useSelector((state:RootState) => state.cover);
    
    return (
        <section className="contenedor-portada">
            {/* Imagen principal */}
            <div className="imagen-principal">
                <img 
                    src={img} 
                    className="gato-img" 
                    alt='catImage'
                />
            </div>

            {/* Título con rotación */}
            <div className="titulo-container">
                <div className="rotar">
                    <span className="letraCursiva tituloC">
                        {title}
                    </span>
                </div>
            </div>
            
            {/* Statement/Descripción */}
            <div className="statement-container">
                <div className="cuadro">
                    <p className="textoCapital statement">
                        {statement}
                    </p>
                </div>
            </div>
            
            {/* Botón de navegación */}
            <div className="boton-container">
                <Link 
                    to="menu"
                    spy={true}
                    smooth={true}
                    duration={500}
                >
                    <button className="boton-inicio">
                        <ExpandMoreIcon />
                    </button>
                </Link>
            </div>
        </section>
    )
} 