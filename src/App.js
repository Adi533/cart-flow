import { useDispatch,useSelector } from 'react-redux';
import './App.css';
import { addToCart,removeFromCart } from './store/cartSlice';

function App() {
  const dispatch = useDispatch();
  const {products,cart,total}=useSelector((state)=>state.cart);
  const purchaseHandler = (e,product)=>{
    let name = product.name+":"+product.price;
    let price = parseInt(e.target.value);
    let itemObj = {name,price};
    dispatch(addToCart(itemObj));
  }
  const deleteHandler = (index,price)=>{
    let deleteItem = {index,price};
    dispatch(removeFromCart(deleteItem));
  };
  return (
    <div className="App">
      <h1>PRODUCTS</h1>
      {products.map((product,index)=>{
          return <li key ={index} value={product.price} onClick={(e)=>purchaseHandler(e,product)}>{product.name}:{product.price}</li>
        })}

      <hr />
      <h2>Carts</h2>
        {cart.map((item,index)=>{
          return <li key ={index} onClick={()=>deleteHandler(index,item.price)}>{item.name}</li>
        })}
      <hr/>
      <h2>Total</h2>
      <p>{total}</p>
    </div>
  );
}

export default App;
