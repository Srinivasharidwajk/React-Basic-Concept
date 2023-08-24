import React, { useState } from 'react'
import { IProduct } from './IProduct';
import {ProductService} from "./ProductService"

export const ProductCard:React.FC = () => {
    const [products, setProducts] = useState<IProduct[]>(ProductService.getAllProducts());
    let incrQty = (sno: string) => {
      const filteredProducts: IProduct[] = products.map((product) => {
        if (product.id === sno) {
          return {
            ...product,
            qty: product.qty + 1,
          };
        }
        return product; // Return the original product if IDs don't match
      });
    
      setProducts(filteredProducts);
    };

    let decrQty = (sno: string) => {
      const filteredProducts: IProduct[] = products.map((product) => {
        if (product.id === sno) {
          return {
            ...product,
            qty: product.qty - 1 > 0 ? product.qty -1:1 ,
          };
        }
        return product;
      });
    
      setProducts(filteredProducts);
    };
    let clickDeleteWatch=(sno:string)=>{
      const deletePreoduct:IProduct[]=products.filter(product => product.id !== sno)
      setProducts(deletePreoduct)
    }
    const grandTotal = (): number => {
      let total: number = 0;
      for (let product of products) {
        total += product.price * product.qty;
      }
      return total;
    };
    
  return (
    <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h3">Product Cart</p>
                        <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur,
                            consequatur cupiditate delectus exercitationem facilis itaque laborum natus possimus
                            provident quaerat quas quia quos ratione reprehenderit rerum sapiente similique voluptate
                            voluptatem.</p>
                    </div>
                </div>
            </div>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        {
                            products.length > 0 ? <>
                                <table className="table table-striped text-center shadow  ">
                                    <thead className="bg-primary text-white m-5" style={{ padding: '15px' }}>
                                    <th style={{ padding: '15px' }}>SNO </th>
                                    <th style={{ padding: '15px' }}>Image</th>
                                    <th style={{ padding: '15px' }}>Name</th>
                                    <th style={{ padding: '15px' }}>Price</th>
                                    <th style={{ padding: '15px' }}>Qty</th>
                                    <th style={{ padding: '15px' }}>Total</th>
                                    <th style={{ padding: '15px' }}>Action</th>
                                    </thead>
                                    <tbody className="table-group-divider">
                                    {
                                        products.map((product) => {
                                            return (
                                                <tr key={product.id}>
                                                    <td>{product.id}</td>
                                                    <td>
                                                        <img src={product.imageUrl} alt="" width={50} height={50}/>
                                                    </td>
                                                    <td>{product.name}</td>
                                                    <td>&#8377;{product.price.toFixed(2)}</td>
                                                    <td>
                                                        <i onClick={() => decrQty(product.id)}
                                                           className="bi bi-dash-circle-fill text-primary me-2"></i>
                                                        {product.qty}
                                                        <i onClick={() => incrQty(product.id)}
                                                           className="bi bi-plus-circle-fill text-primary ms-2"></i>
                                                    </td>
                                                    <td>&#8377;{(product.price * product.qty).toFixed(2)}</td>
                                                    <td>
                                                        <button className="btn btn-danger"
                                                                onClick={() => clickDeleteWatch(product.id)}>
                                                            <i className="bi bi-trash"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                    <tr className=''>
                                        <td colSpan={4}></td>
                                        <td>Grand Total :</td>
                                        <td>&#8377;<span className="fw-bold ">{grandTotal().toFixed(2)}</span></td>
                                        <td></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </> : <>
                                <div className="row">
                                    <div className="col">
                                        <p className="h5 text-warning">----------- no records found --------</p>
                                    </div>
                                </div>
                            </>
                        }

                    </div>
                </div>
            </div>
        </>
  )
}
