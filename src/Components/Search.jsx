import React, { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'
import { geo_url, geo_options } from '../api';

function Search({onSearchChange}) {

    const [search, setSearch]= useState(null);

    const loadOptions = async (inputValue) => {
        try {
            const response = await fetch(`${geo_url}?minPopulation=1000000&namePrefix=${inputValue}`, geo_options);
            const result = await response.json();
            
            return {
                options: result.data.map((city) => ({
                    value: `${city.latitude} ${city.longitude}`,
                    label: `${city.name}, ${city.countryCode}`
                }))
            };
        } catch (error) {
            console.error(error);
            return { options: [] }; // Return empty options array in case of error
        }
    };
    

    const handleOnChange = (searchData) =>{
        setSearch(searchData);
        onSearchChange(searchData);
    }

    return (
        <AsyncPaginate
            placeholder="Search for City"
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />
    )
}

export default Search