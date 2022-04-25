import './Products.css';
import Card from '../Card/Card';
import list from '../../data';

const Products = ({ handleClick }) => {

    return (
        <div>
            {list.map((item) => (
                <Card key={item.id} item={item} handleClick={handleClick} />
            ))}
        </div>
    );
};

export default Products;