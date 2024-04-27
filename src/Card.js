function Card({ img, name }) {
  return (
    <div className="card" style={{ width: 150, padding: 10, margin: 15 }}>
      <img src={img} className="card-img-top" alt="flag" />
      <div className="card-body">
        <p className="card-text">{name}</p>
      </div>
    </div>
  );
}

export default Card;
