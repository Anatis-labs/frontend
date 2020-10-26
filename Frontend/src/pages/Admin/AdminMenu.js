import React, { Component } from 'react'
import "./AdminMenu.css"

export default class AdminMenu extends Component {
    render() {
        return (
            <div>
                <div className="AdminMenuBox">
                    <div class="nav-scroller py-1 mb-2">
                        <nav class="nav d-flex justify-content-between">
                        <a class="p-2 text-muted" href="/admin">
                            Admin startsida
                        </a>  
                            <a class="p-2 text-muted" href="/admin/add">
                            Lägg till seminarie
                        </a>  
                        <a class="p-2 text-muted" href="/admin/remove">
                        Ta bort seminarien
                    </a>        
                    <a class="p-2 text-muted" href="/admin/users">
                        Lista av användare
                    </a>                 
                </nav>
            </div>
        </div>
    </div>
        )
    }
}
