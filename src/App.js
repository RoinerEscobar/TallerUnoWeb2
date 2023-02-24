

import Pagina from './comp/Pagina';
import React, { useState } from 'react';
import Contador from './comp/Contador';

function App() {
  
  const [contador,setCont] = useState(0)

  const aumentar = () => { 
    setCont(contador + 1)
  };

  const disminuir = () => { 
    setCont(contador - 1)
  };

  const resetear = () => { 
    setCont(0)
  };

  const [paisajes, setPaisajes] = useState([
    {
      id: 1,
      name: "Barcelona",
      text: "El Fútbol Club Barcelona (en catalán, Futbol Club Barcelona), conocido popularmente como Barça,n. 1​ es una entidad polideportiva con sede en Barcelona, España. Fue fundado como club de fútbol el 29 de noviembre de 1899 y registrado oficialmente el 5 de enero de 1903.7​8​9​Tanto el club como sus hinchas reciben el apelativo de «culers» (pronunciado culés),10​ y también, en referencia",
      img: "http://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/3.png",
      
    },
    {
      id: 2,
      name: "Juventus",
      text: "La Juventus es el equipo más exitoso de Italia y al mismo tiempo uno de los clubes más laureados y renombrados del mundo.13​ Es el club con el mayor número de títulos oficiales conquistados en el fútbol italiano con un total de 59 campeonatos (36 Ligas, 14 Copas, 9 Supercopas).Nota 3​ Fue el primer club italiano y del sur europeo en ganar la Copa de la UEFA (temporada 1976-77),14​ .",
      img: "http://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/29.png",
      
    },
    {
      id: 3,
      name: "Inter",
      text: "El Football Club Internazionale Milano,1​ comúnmente llamado Internazionale (pronunciado /ˌinternattsjoˈnaːle/) o Inter,2​ y más conocido en el resto del mundo como Inter de Milán,3​4​5​ es un club de fútbol de Italia con sede en la ciudad de Milán, capital de la región de Lombardía, y de propiedad principalmente china con mas de mil millones de euro.",
      img: "http://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/35.png",
      
    },
    {
      id: 4,
      name: "Madrid",
      text: "El Real Madrid Club de Fútbol, más conocido simplemente como Real Madrid, es una entidad polideportiva con sede en Madrid, España. Fue declarada oficialmente registrada como club de fútbol por sus socios el 6 de marzo de 1902 con el objeto de la práctica y desarrollo de este deporte —si bien sus orígenes datan del año 1900 siempre ha sido el hijo del FC Barcelona",
      img: "https://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/1.png",
      
    },
    {
      id: 5,
      name: "PSG",
      text: "El Paris Saint-Germain Football Club, conocido popularmente por sus siglas PSG, es una entidad polideportiva francesa con sede en París. Fue fundada el 12 de agosto de 1970 tras la fusión del Paris Football Club y el Stade Saint-Germain. Su principal actividad es el fútbol profesional. También cuenta con secciones de balonmano, judo y deportes electrónicos, ",
      img: "http://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/49.png",
      
    },
    {
      id: 6,
      name: "Manchester",
      text: "El Manchester City ingresó a la Football League en 1892 y ganó su primer trofeo oficial con la FA Cup en 1904. No obstante, el club disfrutó de su mayor período de éxito a finales de los años 1960 y principios de los 1970, cuando ganó el campeonato de Liga de First Division, FA Cup, Copa de la Liga y la Recopa de Europa bajo la dirección técnica primero de Joe Mercer y luego de ",
      img: "http://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/66.png",
      
    },
  ]);
  return (
    <div className="App">
    <div className="container">
        <div className="row">
          {paisajes.map((p) => {
            return (
              <Pagina
                key={p.id}
                name={p.name}
                img={p.img}
                text={p.text}
                cont={contador}
                
              />
            );
          })}
        </div></div>
      
        <Contador
        contador={contador}
        aumentar={aumentar}
        disminuir={disminuir}
        resetear={resetear}
        />
    </div>
    
  );
}

export default App;
