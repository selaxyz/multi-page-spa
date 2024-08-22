import { Link, useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    setTimeout(() => {
      console.log('Navigate')
      navigate('/product');
    }, 2000);
  };

  return (
    <div>
      <h1>Home</h1>
      <Link to="/product">Go to Product</Link>
      <p>Click The button to navigate automatically</p>
      <button onClick={handleNavigate}>Click Me Delay 2 Second</button>
    </div>
  );
};
