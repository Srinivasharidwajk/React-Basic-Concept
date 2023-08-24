import React, { useState } from 'react'
import NavbarHeading from '../NavbarHeading'
import ProductItem from './ProductItem';
import { ProductCard } from './product-card/ProductCard';

const Eventshandling:React.FC = () => {
    const [count,setCount]=useState<number>(0);
    const incr=()=>{
        setCount(count+1);
    }
    const decr = ():void => {
        setCount(count - 1 > 0 ? count - 1 : 0);
    };

    const incrBy = (value:number):void => {
        setCount(count + value);
    };

    const decrBy = (value:number):void => {
        setCount(count - value > 0 ? count - value : 0);
    };
  return (
    <>
    <NavbarHeading navbarName="React 'Events handling' Concept with Counter Example"/>
   <div className="card m-3 p-5">
   <div className="card ">
     <div className="container ">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="card my-5  shadow ">
                            <div className="card-body">
                                <p className="display-3">{count}</p>
                                <button className="btn btn-primary me-1" onClick={incr}>Increment</button>
                                <button className="btn btn-primary" onClick={decr}>Decrement</button>
                                <hr/>
                                <button className="btn btn-primary me-1" onClick={() => incrBy(5)}>Increment By 5</button>
                                <button className="btn btn-primary" onClick={() => decrBy(5)}>Decrement By 5</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
     </div>
     <div className="card my-5">
<ProductItem/>
</div>
<div className="card my-5">
    <ProductCard/>
</div>
   </div>


   
    </>
  )
}

export default Eventshandling