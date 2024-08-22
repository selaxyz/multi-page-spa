import { useParams } from 'react-router-dom';

export const ProductDetail = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Product Detail: {id}</h1>
    </div>
  );
};
