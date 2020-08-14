import React from 'react'
import {useEffect} from 'react'

export const Message = () => {

    useEffect(() => {
        console.log('componente montado');


        return () => {
            console.log('componente desmontado');
        }
    }, [])

    return (
        <div>
            <h3>Eres muy pro</h3>
        </div>
    )
}
