'use client'
import React from 'react';
import "./styles/globals.css";
import "./styles/common.css";
import "./styles/mg_pd.css";
import "./styles/flex.css";
import "./styles/font.css";
import Header from './components/Header/header';

function LayoutWrapper({children}: Readonly<{
    children: React.ReactNode;
}>) {
    // const loading = useSelector(state => state.vocabReducer.tLoading)
    // const error = useSelector(state => state.vocabReducer.isError)

    return (
        <div>
            <Header/>
            {/*{loading && <Loading />}*/}
            {/*{error.state && error.contents === 'BLOCK PAGE' && <Warning />}*/}
            {children}
        </div>
    );
}

export default LayoutWrapper;
