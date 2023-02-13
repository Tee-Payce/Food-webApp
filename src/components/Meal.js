import React, {useState} from "react";
import {Modal} from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/cartAction";

export default function Meal({meal}){
    const[quantity, setquantity] = useState(1)
    const[combo, setcombo] = useState('combo1')
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch()
    function addtocart() {
        dispatch(addToCart(meal,quantity,combo))
    }
    return(
        <div style={ {margin : 10}}  className="shadow-lg p-3 mb-5 bg-blue square">
         <div onClick={handleShow}>
         <h1>{meal.name}</h1>
            <img src={meal.image} className="img-fluid" alt="" style={{height:200, width:250}}></img>

         </div>
            <div className="flex-container">
                <div className="w-100">
                    <p>Combos</p>
                    <select className="btn" value={combo} onChange={(e)=>{setcombo(e.target.value)}}>
                        {meal.combos.map(combo=>{
                            return <option value={combo}>{combo}</option>
                        })}
                    </select>
                </div>
                <div className="w-100">
                    <p>Quantity</p>
                    <select className="btn" value={quantity} onChange={(e)=>{setquantity(e.target.value)}}>
                        {[...Array(10).keys()].map((x,i)=>{
                            return <option value={i+1}>{i+1}</option>
                        })}
                    </select>
                </div>

            </div>
            <div className="flex-container">
                <div className='m-1 w-100'>
                        <h1 className="mt-1">Price: {meal.prices[0][combo]*quantity} USD</h1>
                </div>
                <div className='m-1 w-100'>
                        <button className="btn" onClick={addtocart}>ADD TO CART</button>
                </div>

            </div>
            <Modal show={show}>
      <Modal.Header closeButton>
        <Modal.Title>{meal.name}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <img src={meal.image} className="img-fluid" alt="" style={{height:270, width:430}}></img>
        <p>{meal.description}</p>
      </Modal.Body>

      <Modal.Footer>
       <button className="btn" onClick={handleClose}>CLOSE</button>
      </Modal.Footer>
    </Modal>
        </div>
    )
}