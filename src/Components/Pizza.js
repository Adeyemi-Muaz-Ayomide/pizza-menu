import pizzas from "./pizzas/spinaci.jpg";

const Pizza = ({ pizzaObj }) => {
  return (
    <li className="pizza">
      <img src={pizzas} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.price}</span>
      </div>
    </li>
  );
};

export default Pizza;
