import { router } from './routers'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import DefaultLayout from './components/Layout/DefaultLayout'
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {router.map((route, index) => {
                        const Page = route.component
                        let Layout = DefaultLayout
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        )
                    })}
                </Routes>
            </div>
        </Router>
    )
}

export default App
