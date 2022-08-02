import './Product.css';
import {button } from 'react';
import yaris from '../../yaris.jpg'
import interior from '../../interior.jpg'

function Product(){
    return(
        <>
        <h1>Vehicle Viewer</h1>
        <div className = 'vehicle-selection'>
            <li className = 'vehicles'>
                <img src = {yaris} className = "car"></img>
                <img src = {interior} className = 'seats'></img>   
            </li>
            <li>
            <button className = 'a'>Yaris</button>
            <button className = 'b'>Sonata</button>
            <button className = 'c'>Civic</button>
            <button className = 'd'>Odyssey</button>
            <button className = 'e'>Elantra</button>
            </li>
        </div>
        <div diplay = 'inline' className = 'content'></div>
        <div className = 'table'>
        <div className = 'color-palett'>
            <h1 className = 'color-title'>Exterior Colours</h1>
        <li className = 'colors'>
                <button className = 'button-1'></button>
                <button className = 'button-2'></button>
                <button className = 'button-3'></button>
                <button className = 'button-4'></button>
                <button className = 'button-5'></button>
                <button className = 'button-6'></button>
            </li>
            <h1 className = 'interior-title'>Interior Colours</h1>
            <li className = 'int-colors'>
                <button className = 'button-7'></button>
                <button className = 'button-8'></button>
            </li>
        </div>
        </div>
        </>

    )
}

export default Product;

