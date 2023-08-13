import pizzas from './pizzas/spinaci.jpg'

const Pizza = () => {
  return (
    <div>
      <img src={pizzas} alt="spinaci" />
      <h2>Pizza Spinaci</h2>
      <p>Tomato, mozarella, spinach, and ricotta cheese</p>
    </div>
  );
};

export default Pizza;
