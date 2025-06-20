import { FC } from 'react'
import { Link } from "react-scroll";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';

export const CoverLegacy: FC<any> = () => {

    const { title , statement , img } = useSelector((state:RootState) => state.cover);
    
    return (
        <section className="contenedor-portada">
            {/* Imagen principal */}
            <div className="mb-8">
                <img 
                    src={img} 
                    className="gato-img mx-auto" 
                    alt='catImage'
                />
            </div>

            {/* Título con rotación */}
            <div className="mb-8">
                <div className="rotar">
                    <span className="letraCursiva tituloC text-center block text-white">
                        {title}
                    </span>
                </div>
            </div>
            
            {/* Statement/Descripción */}
            <div className="mb-12 max-w-2xl mx-auto px-4">
                <div className="cuadro p-6 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                    <p className="textoCapital statement text-center text-white">
                        {statement}
                    </p>
                </div>
            </div>
            
            {/* Botón de navegación */}
            <div className="mt-8">
                <Link 
                    to="menu"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="inline-block"
                >
                    <button className="boton-inicio hover:scale-110 transition-transform duration-200 group">
                        <ExpandMoreIcon className="text-2xl group-hover:animate-bounce" />
                    </button>
                </Link>
            </div>

            {/* Indicador de scroll */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
                </div>
            </div>
        </section>
    )
} 