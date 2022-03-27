import { createContext, useContext } from 'react';
import { Countries } from '../observables/countries.observable';

export const CountriesContext = createContext<Countries>(new Countries());

export const useCountriesContext = () => useContext(CountriesContext);
