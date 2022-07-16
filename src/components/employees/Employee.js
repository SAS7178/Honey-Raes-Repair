import { useState } from "react"
import { Link } from "react-router-dom"


export const Employee = ({ fullName, email}) => {
  
    return <section className="employee">
    <div>
    <Link to={`/employees/{id}`}>Name:{fullName}</Link>
    </div>
    <div>Email:{email}</div>
</section>
} 