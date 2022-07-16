import { Outlet, Route, Routes } from "react-router-dom"
import { TicketContainer } from "../tickets/TicketContainer";
import { TicketSearch } from "../tickets/TicketSearch";



export const EmployeeViews = () => {

    return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>Honey Rae Repair Shop</h1>
                    <div>Your one-stop-shop to get all your electronics fixed</div>

                    <Outlet />
                </>
            }>
                <Route path="tickets" element={<TicketContainer />} />
                <Route path="tickets" element={<TicketSearch />} />
            </Route>
        </Routes>
    )
}