import { useState } from 'react';
import imagen1 from '../assets/descarga.png'; // Reemplaza con la ruta correcta de la imagen
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Importa el CSS completo de Swiper

const Proyectos = () => {
  const [proyectos] = useState([
    {
      id: 1,
      nombre: 'Proyecto 1',
      descripcion: 'Descripción breve del Proyecto 1.',
      imagen: imagen1,
      enlace: 'https://wm-siteweb.vercel.app/',
    },
    {
      id: 2,
      nombre: 'Proyecto 2',
      descripcion: 'Descripción breve del Proyecto 2.',
      imagen: imagen1,
      enlace: 'https://wm-siteweb.vercel.app/',
    },
    // Agrega más proyectos aquí si lo deseas
  ]);

  return (
    <div className="proyectos">
      <h1>Mis Proyectos</h1>
      
    </div>
  );
};

export default Proyectos;
