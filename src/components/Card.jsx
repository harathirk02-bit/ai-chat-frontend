function Card(props) {

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        margin: "20px",
        borderRadius: "10px",
        width: "250px",
        boxShadow: "0px 2px 5px rgba(0,0,0,0.2)"
      }}
    >

      <h2>{props.title}</h2>

      <p>{props.description}</p>

    </div>
  );
}

export default Card;