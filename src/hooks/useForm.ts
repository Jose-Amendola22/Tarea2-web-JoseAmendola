import { useState, FormEvent } from "react";

const useForm = (initialState: any ) => {
    const [state, setState] = useState(initialState);

    const handleChange = (e: React.ChangeEvent<HTMLFormElement>) => {
        setState(state => ({ ...state, [e.target.name] : e.target.value}));

    }

    return [
        state, 
        handleChange 
    ];
}

export default useForm;