import { Job } from '../types.d';

interface Props {
  jobs: Array<Job>;
}

export default function List({ jobs }: Props) {
  return (
    <ul>
      {jobs.map(({ id, name, logo, logoDescription, shortDescription }) => (
        <li key={id} data-id={id}>
          <h2>{name}</h2>
          <img src={logo} alt={logoDescription} width="100" />
          <p>{shortDescription}</p>
        </li>
      ))}
    </ul>
  );
}
