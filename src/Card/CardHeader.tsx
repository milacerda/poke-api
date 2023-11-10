import './CardHeader.scss';

export default function CardHeader(props: any) {
  const imgUrl = `https://projectpokemon.org/images/normal-sprite/${props.name}.gif`;
  return (
    <div className="pokecard-header">
      <div className={'type-background ' + props.type}></div>
      <div className={'icon ' + props.type}></div>
      <img src={imgUrl} alt={props.name} />
    </div>
  );
}