import React from 'react'
import { Outlet } from 'react-router-dom'
import Layout from '../../layouts/Layout'

export default function HomePage() {
    return (
        <Layout>
            <Outlet />
        </Layout>

    )
}
