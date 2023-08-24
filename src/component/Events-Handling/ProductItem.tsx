import React, {useState} from 'react';

interface IProduct{
    sno : string;
    name : string;
    imageUrl : string;
    price : number;
    qty : number;
}

const ProductItem:React.FC = () => {

    let [product, setProduct] = useState<IProduct>({
        sno: "AA001",
        name: "Tamoto",
        imageUrl: "https://m.sakshi.com/sites/default/files/styles/cinema_main/public/article_images/2021/11/7/Tomato.jpg?itok=BPIZEX4f",
        price: 99,
        qty: 1
    });

    const incrQty = ():void => {
        setProduct({
            ...product,
            qty: product.qty + 1
        });
    };

    const decrQty = ():void => {
        setProduct({
            ...product,
            qty: product.qty - 1 > 0 ? product.qty - 1 : 1
        });
    };


    return (
        <>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="card shadow-lg m-5">
                         
                            <div className="card-body">
                            <img src={product.imageUrl} alt="" className="img-fluid"/>
                                <ul className="list-group">
                                    <li className="list-group-item">Name : <span
                                        className="fw-bold">{product.name}</span></li>
                                    <li className="list-group-item">Price : <span
                                        className="fw-bold">{product.price}</span></li>
                                    <li className="list-group-item">Qty : 
                                  
                                   <button className='btn btn-primary btn-sm mx-3' onClick={decrQty}>Decrement <i className="bi bi-dash-circle mx-2"></i> </button>
                                   <span className="fw-bold">{product.qty}</span>
                                   <button className='btn btn-primary btn-sm mx-3' onClick={incrQty}> <i className="bi bi-plus-circle mx-2"></i> Increment</button>
                                  
                                    
                                    </li>
                                    <li className="list-group-item">Total : <span
                                        className="fw-bold">{product.price * product.qty}</span></li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
          
        </>
    );
}
export default ProductItem;
