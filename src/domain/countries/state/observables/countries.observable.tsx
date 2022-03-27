import { makeAutoObservable, runInAction } from 'mobx';
import { api } from '../../../../infrastructure/api';
import { Country } from '../model';

class Countries {
  countries: Country[] = [];
  state: 'initial' | 'pending' | 'success' | 'error' = 'initial';
  error;

  constructor() {
    makeAutoObservable(this);
  }

  getRegionInfo(name: string) {
    const selectedCountry = this.countries.find((country) => country.name.common === name);

    if (!selectedCountry) {
      return [];
    }

    const countriesInSameRegion = this.countries.filter((country) => country.region === selectedCountry.region);

    return countriesInSameRegion.map((country) => country.name.common).sort();
  }

  async fetchCountries() {
    this.countries = [];
    this.state = 'pending';
    try {
      const result = await api.get('all');
      if (result.data?.length > 0) {
        runInAction(() => {
          this.countries = result.data;
          this.state = 'success';
        });
      }
    } catch (error) {
      runInAction(() => {
        this.error = error;
        this.state = 'error';
      });
    }
  }

  dataGridColumns() {
    return [
      {
        field: 'name',
        headerName: 'Name',
        sortable: true,
        width: 200,
        valueGetter: (params) => params.row.name.official
      },
      {
        field: 'region',
        headerName: 'Region',
        sortable: true,
        width: 200
      },
      {
        field: 'link',
        headerName: 'Link',
        sortable: true,
        width: 200,
        renderCell: (params) => <a href={this.generateLink(params.row.name.common)}>{params.row.name.common}</a>
      }
    ];
  }
  generateLink(name) {
    return `/countries-home/countries/${name}`;
  }
}

export { Countries };
