const width = {
  width: '100px',
}
function Goods (props) {
  return (
    <div className="goods-block">
      <h3>{props.title}</h3>
      <p>{props.text}{props.cost}{props.val}</p>
      <img src={props.image} alt={props.title} style={width}></img>
    </div>
  );
}

export default Goods;