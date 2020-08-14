import React, {useLayoutEffect, useRef} from 'react'
import '../05-useLayoutEffect/layout.css';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

export const Layout = () => {

    const {counter,increment} = useCounter(1);

    const {data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);

    const {quote} = !!data && data[0];


    const pTag = useRef();

    useLayoutEffect(() => {
       
    }, [quote])


    return (
        <div>
            <h1>Layout effect</h1>
            <hr/>

          
                <blockquote className="blockquote text-right">
                <p
                 className="mb-0"
                 ref={pTag}
                >{quote}
                </p>
                </blockquote>
         

            <button className="btn btn-primary"
            onClick={increment}>
                Siguiente quote
                </button>

          

        
        </div>


    )
}
