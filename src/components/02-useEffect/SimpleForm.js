import React from 'react';
import {useEffect,useState} from 'react';
import './effects.css';
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name : '',
        email : ''
    });

    const {name , email} = formState;

    useEffect(() => {
        
    }, []);
    

    const handleInputChange = ({ target }) =>{

        setFormState({
            ...formState,
            [ target.name ]: target.value
        });
    }



    return (
        <>
            <h1>UseEffect</h1>
            <hr />
            <div className='form-group'>
                    <input type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu Nombre va Aqui"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange}>
                    </input>
                    </div>

                <div className='form-group'>
                    <input type="text"
                    name="email"
                    className="form-control"
                    placeholder="email@gmail.com"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange}>
                    </input>

                </div>

                {( name === '123') && <Message/>}
        </>
    )
}
