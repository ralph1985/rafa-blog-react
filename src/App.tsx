import { useEffect, useState } from 'react';
import './App.scss';
import List from './components/List';
import { Job } from './types.d';

interface AppState {
  jobs: Array<Job>;
}

const INITIAL_STATE = [
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
  const [jobs, setJobs] = useState<AppState['jobs']>([]);

  useEffect(() => {
    setJobs(INITIAL_STATE);
  }, []);

  return (
    <div className="App">
      <h1>Jobs</h1>
      <List jobs={jobs} />
    </div>
  );
}

export default App;
