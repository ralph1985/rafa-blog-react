interface Props {
  jobs: Array<{
    id: string;
    name: string;
    logoDescription: string;
    startDate: string;
    endDate?: string;
    logo: string;
    shortDescription: string;
  }>;
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
