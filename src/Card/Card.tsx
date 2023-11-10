import CardHeader from './CardHeader';
import './Card.scss';

export default function Card(props: any) {
  const pokemon = props.pokemon;

  return (
    <div className="pokecard shadow-sm">
        <CardHeader name={pokemon.name} type={pokemon.types[0].type.name} />
        <div className="pokecard-body">
          <h3>{pokemon.name}</h3>
          <p className="card-text">N° {pokemon.id}</p>
          <div className="types-container">
            {
              pokemon.types.map((type: any) => {
                return <span key={type.slot} className={'badge ' + type.type.name}>{type.type.name}</span>;
              })
            }
          </div>
          <div className="stats">
            {
              pokemon.stats.map((stat: any, index: number) => {
                return (
                  <div className="stat" key={index}>
                    <span>{stat.stat.name}:</span>
                    <div className={'stat-value ' + stat.stat.name}>
                      <div style={{width: stat.base_stat + '%'}}>{stat.base_stat}</div>
                    </div>
                  </div>
                )
              })
            }
            <div></div>
          </div>
        </div>
    </div>
  );
}


