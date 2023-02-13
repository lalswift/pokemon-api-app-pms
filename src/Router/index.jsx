import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../Pages'
import DetailsPage from '../Pages/DetailsPage'
import Error404Page from '../Pages/Error404Page'

const RouterPage = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/details/:id' element={<DetailsPage />} />
                <Route path="*" element={<Error404Page />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouterPage;