import React, { Component } from 'react'
import './Listvehicles.css'
import redCivic from '../../14-civic-1.jpg';
import mazda from '../../mazda.jpg';
import sonata from '../../sonata.jpg';
import elantra from '../../elantra.jpg';
import focus from '../../focus.jpg';

class ListVehicles extends Component{
    render(){
        const vehicles = [
            {
                make: 'Honda',
                model: 'Civic',
                year: '2014',
                colour: 'red',
                image: redCivic
            },
            {
                make: 'Mazda',
                model: '5',
                year: '2021',
                colour: 'black',
                image: mazda
            },
            {
                make: 'Hyundai',
                model: 'Sonata',
                year: '2011',
                colour: 'white',
                image: sonata
            },
            {
                make: 'Hyundai',
                model: 'Elantra',
                year: '2014',
                colour: 'blue',
                image: elantra
            },
            {
                make: 'ford',
                model: 'focus',
                year: '2018',
                colour: 'red',
                image: focus
            },
        ]
        return(
            <div>
                {vehicles.map((vehicle) => 
                    <li className = "list">
                        {vehicle.make}{"  |  "}
                        {vehicle.model}{"  "}
                        {vehicle.year}{"    "}
                        {vehicle.colour}{"  |  "}
                        <img src = {vehicle.image} className = 'photo' />
                        <hr />
                    </li>
                    )}
            </div> 
        )
    }
}

export default ListVehicles