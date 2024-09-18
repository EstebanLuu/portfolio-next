'use client'

import { createContext, useContext, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const PathnameContext = createContext();

export const PathnameProvider = ({ children }) => {
    const pathname = usePathname();
    const [prevPathname, setPrevPathname] = useState(pathname);

    useEffect(() => {
        setPrevPathname(pathname);
    }, [pathname]);

    return (
        <PathnameContext.Provider value={{ prevPathname, currentPathname: pathname }}>
            {children}
        </PathnameContext.Provider>
    );
};

export const usePathnameContext = () => useContext(PathnameContext);
