import React, { Component } from 'react'
import './ListClients.css'
import {Button} from '../Button'
import {Link} from 'react-router-dom'

class ListClients extends Component{
    render(){
        const clients = [
            {
                id: '1',
                firstName: 'jeff',
                lastName: 'paterson',
                email: 'jeffpatterson1@gmail.com',
                billingAddress: 'Address 1'
            },
            {
                id: '2',
                firstName: 'youssef',
                lastName: 'baxter',
                email: 'youssefbaxter2@gmail.com',
                billingAddress: 'Address 2'
            },
            {
                id: '3',
                firstName: 'emil',
                lastName: 'goin',
                email: 'emilgoin3@gmail.com',
                billingAddress: 'Address 3'
            },
            {
                id: '4',
                firstName: 'lacey',
                lastName: 'pratt',
                email: 'laceypratt4@gmail.com',
                billingAddress: 'Address 4'
            },
            {
                id: '5',
                firstName: 'Arnold',
                lastName: 'bigster',
                email: 'arnoldbigster5@gmail.com',
                billingAddress: 'Address 5'
            }
        ]
        return(
            <div>
                {clients.map((client) => 
                    <li className = "list" key = {client.id}>
                        {client.id}{"  |  "}
                        {client.firstName}{"  "}
                        {client.lastName}{"    "}
                        {client.email}{"  |  "}
                        {client.billingAddress}{"  |  "}
                        <Link to = '/ListVehicles'>
                            <Button>View Recent Vehicles</Button>
                        </Link>
                        <Link to = '/ListVehicles'>
                            <Button>View  Owned Vehicles</Button>
                        </Link>
                        <hr />
                    </li>
                    )}
            </div>
        )
    }
}

export default ListClients