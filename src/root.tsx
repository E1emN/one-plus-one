import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assests/styles/main.scss';
const IndexPage = lazy(() => import('./pages'));

const App: React.FC = () => {
    return(
        <Suspense fallback={<div>loading...</div>}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<IndexPage />} />
                </Routes>
            </BrowserRouter>
        </Suspense>
    )
};

export default App;