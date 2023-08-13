import pizzas from './pizzas/spinaci.jpg'

const Pizza = () => {
  return (
    <div>
      <img src={pizzas} alt="spinaci" />
      <h3>Pizza Spinaci</h3>
      <p>Tomato, mozarella, spinach, and ricotta cheese</p>
    </div>
  );
};

export default Pizza;
