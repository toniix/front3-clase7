import {card} from '../styles/card.module.css'

const Card = ({ index, user }) => {
  // console.log(name, music);
  
  return (
    <div key={index} className={card}>
      <p>
        Hola mi nombre es <span>{user.name}</span> y mi musica favorita es{" "}
        <span>{user.music}</span>
      </p>
    </div>
  );
}

export default Card
