import React from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../../services/car.service";

const CarForm = ({setAllCars}) => {
    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm({mode: 'all'});
    const save = async (car) => {
        const {data} = await carService.create(car);
        setAllCars(prev => prev)
        console.log(data);
    }


    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'brand'} {...register('brand', {
                pattern: {
                    value: /^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/,
                    message: 'бенд должен быть от 1 до 20 символов'
                },
                required: {value: true, message: 'required'}
            })}/>
            {errors.brand && <span>{errors.brand.message}</span>}

            <input type="text" placeholder={'price'} {...register('price', {
                valueAsNumber: true,
                min: {value: 0, message: 'min 0'},
                max: {value: 1000000, message: 'max 1000000'},
                required: {value: true, message: 'required'}
            })}/>
            {errors.price && <span>{errors.price.message}</span>}

            <input type="text" placeholder={'year'} {...register('year', {
                valueAsNumber: true,
                min: {value: 1990, message: 'min 1990'},
                max: {value: new Date().getFullYear(), message: 'max'},
                required: {value: true, message: 'required'}
            })}/>
            {errors.year && <span>{errors.year.message}</span>}

            <button disabled={!isValid}>save</button>
        </form>
    );
};

export default CarForm;