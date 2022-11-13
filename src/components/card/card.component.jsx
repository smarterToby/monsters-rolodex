import './card.styles.css';

const Card = ({ monster }) => {
  const { id, name, email } = monster;
  return (
    <div className='card-container'>
      <img
        src={`https://robohash.org/${id}?set=set2&size=1024x1024`}
        alt={`monster ${name}`}
        style={{ width: '512px', height: '512px' }}
      />
      <h2>{name}</h2>
      <p style={{ fontSize: '20px', fontWeight: 'lighter' }}>{email}</p>
    </div>
  );
};

export default Card;
