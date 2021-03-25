import React,{useState,useEffect} from 'react';
import {FormControl,NativeSelect} from '@material-ui/core';
import styles from './Countrypicker.module.css'
import {fetchCountries} from '../../api';

const Countrypicker = ({handleCountryChange}) => {
  const [fetchedCountries,setfetchedCountries] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
         setfetchedCountries(await fetchCountries());
        }
        fetchAPI();
    },[setfetchedCountries]);
    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
                <option value="">Global</option>
          {fetchedCountries.map((country,i)=><option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default Countrypicker ;