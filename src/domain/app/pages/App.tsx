import './App.scss';
import FormPage from '../../dynamic-forms/pages/FormPage';
import { Container } from '@mui/material';
import Header from '../components/header/Header';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../../theme';
import CountriesHome from '../../countries/pages/CountriesHome';
import Countries from '../../countries/components/Countries';
import CountryDetails from '../../countries/components/CountryDetails';
import { NotFoundPage } from '../../../infrastructure/not-found/pages/404';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Header></Header>
        <Container maxWidth="xl" sx={{ paddingTop: '20px' }}>
          <Routes>
            <Route index element={<FormPage />} />
            <Route path="/form" element={<FormPage />} />
            <Route path="/countries-home" element={<CountriesHome />}>
              <Route index element={<Countries />} />
              <Route path="/countries-home/countries" element={<Countries />} />
              <Route path="/countries-home/countries/:name" element={<CountryDetails />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
