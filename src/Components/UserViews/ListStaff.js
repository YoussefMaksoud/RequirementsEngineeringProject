import React, { Component } from 'react'
import {Button} from '../Button'
import {Link} from 'react-router-dom'

class ListStaff extends Component{
    render(){
        const staff = [
            {
                id: '0000000000',
                firstName: 'jeff',
                lastName: 'paterson',
                email: 'jeffpatterson1@gmail.com',
            },
            {
                id: '1111111111',
                firstName: 'youssef',
                lastName: 'baxter',
                email: 'youssefbaxter2@gmail.com',
            },
            {
                id: '2222222222',
                firstName: 'emil',
                lastName: 'goin',
                email: 'emilgoin3@gmail.com',
            },
            {
                id: '3333333333',
                firstName: 'lacey',
                lastName: 'pratt',
                email: 'laceypratt4@gmail.com',
            },
            {
                id: '4444444444',
                firstName: 'Arnold',
                lastName: 'bigster',
                email: 'arnoldbigster5@gmail.com',
            }
        ]
        return(
            <div>
                {staff.map((employee) => 
                    <li className = "list" key = {employee.id}>
                        {employee.id}{"  |  "}
                        {employee.firstName}{"  "}
                        {employee.lastName}{"    "}
                        {employee.email}{"  |  "}
                        <Link to = '/ListClients'>
                            <Button>View Clients</Button>
                        </Link>
                        <hr />
                    </li>
                    )}
            </div>
        )
    }
}

export default ListStaff