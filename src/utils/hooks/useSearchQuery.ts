import { Dispatch, SetStateAction, useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';

const useLocationQueryParams = (setSearchParams: (el: Record<string, string>) => void) => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const urlParamsArray = new URLSearchParams(location.search);
        const urlParams = Array.from(urlParamsArray.entries()).reduce((acc, [key, value]) => ({
            ...acc,
            [key]: value
        }), {} as Record<string, string>);

        let p: Record<string, string> = {}

        if (urlParams.q) {
            p.q = urlParams.q;
        }

        if (urlParams.page) {
            p.page = urlParams.page;
        }

        if (Object.keys(p).length > 0) {
            setSearchParams(p);
        }
    }, []);


    return ((searchParams: Record<string, string>) => {
        let p: Record<string, string> = { page: searchParams.page };

        if (searchParams.q !== "") {
            p.q = searchParams.q;
        }

        navigate({ pathname: location.pathname, search: (new URLSearchParams(p)).toString() })
    });
}

export default useLocationQueryParams;
