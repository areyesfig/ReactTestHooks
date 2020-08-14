import React from 'react';
import {useEffect} from 'react';
import { useForm } from '../../hooks/useForm';


export const FormWithCustomHook = () => {

    const [FormValue, handleInputChange] = useForm({
        name : '',
        email : '',
        password:''
    });

    const {name , email,password} = FormValue;

    useEffect(() => {
        console.log('escuchando mail')
    }, [email]);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(FormValue);
    }



    return (
        <form onSubmit={handleSubmit}>
            <h1>FormWithCustomHook</h1>
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

                <div className='form-group'>
                    <input type="password"
                    name="password"
                    className="form-control"
                    placeholder="*****"
                    autoComplete="off"
                    value={ password }
                    onChange={ handleInputChange}>
                    </input>

                </div>

               <button className='btn btn-primary' type="submit">Guardar</button>
        </form>
    )
}
