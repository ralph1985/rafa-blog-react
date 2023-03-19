import { useEffect, useState } from 'react';
import './App.css';

interface Job {
  id: string;
  name: string;
  logoDescription: string;
  startDate: string;
  endDate?: string;
  logo: string;
  shortDescription: string;
}

const initialState = [
  {
    id: 'mo2o',
    name: 'Mobile One2One',
    logoDescription: 'Mobile One2One logotipo',
    startDate: '2012-01-01',
    endDate: '2016-01-01',
    logo: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/t6motz6ia3nghonbh8ej',
    shortDescription:
      'Consultora de estrategia y transformación digital de su negocio. En O2O somos expertos en Ecommerce, Mobile y Tecnologias Disruptivas.',
  },
  {
    id: 'bbva',
    name: 'BBVA',
    logoDescription: 'BBVA logo',
    startDate: '2016-01-01',
    logo: 'https://www.bbva.com/wp-content/uploads/2019/04/Logo-BBVA.jpg',
    shortDescription:
      'El Banco Bilbao Vizcaya Argentaria, más conocido por la sigla BBVA, es un banco español con sede en Bilbao. Es una de las mayores entidades financieras del mundo y sus principales mercados son España, Argentina, Colombia, México, Perú, Venezuela, Uruguay y Turquía.',
  },
];

function App() {
  const [jobs, setJobs] = useState<Array<Job>>([]);

  useEffect(() => {
    setJobs(initialState);
  }, []);

  return (
    <div className="App">
      <h1>Jobs</h1>
      <ul>
        {jobs.map(({ id, name, logo, logoDescription, shortDescription }) => (
          <li key={id} data-id={id}>
            <h2>{name}</h2>
            <img src={logo} alt={logoDescription} width="100" />
            <p>{shortDescription}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
