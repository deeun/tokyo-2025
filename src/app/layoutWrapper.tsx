'use client'
import React, {useEffect, useState} from 'react';
import "./styles/globals.css";
import "./styles/common.css";
import "./styles/mg_pd.css";
import "./styles/flex.css";
import "./styles/font.css";
import Header from './components/Header/header';
import { useSelector } from 'react-redux';
import Loading from './components/Loading/loading';

function LayoutWrapper({children}: Readonly<{
    children: React.ReactNode;
}>) {
    const loading = useSelector(state => state.loadingReducer.loading)
    const [client, setClient] = useState(false);
    useEffect(() => {
        setClient(true);
    }, []);
    return (
        <div style={{width: '100%'}}>
            {
                client &&
                <>
                    <Header/>
                    {loading && <Loading />}
                    {/*{error.state && error.contents === 'BLOCK PAGE' && <Warning />}*/}
                    {children}
                    {/* <Footer /> */}
                </>
            }
        </div>
    );
}

export default LayoutWrapper;
