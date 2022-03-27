import { Box, CircularProgress, Tooltip, Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCountriesContext } from '../state/context/countries.context';
import { RegionDialog } from './RegionDialog';

const CountryDetails = observer(() => {
  const params = useParams();
  const context = useCountriesContext();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    if (context.countries.length === 0) {
      context.fetchCountries();
    }
  }, [context]);

  const handleDialogClose = () => setIsDialogOpen(false);

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        height: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexFlow: 'column'
      }}
    >
      <Typography variant="h3" component="div">
        Country info
      </Typography>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          height: '100%',
          justifyContent: 'space-evenly',
          alignItems: 'flex-start',
          flexFlow: 'column'
        }}
      >
        <Typography variant="h4" component="div">
          Name: {params.name}
        </Typography>
        <Tooltip placement="top" title="Clickable">
          <Typography
            variant="h4"
            component="div"
            sx={{ cursor: 'pointer', display: 'flex', flexFlow: 'row' }}
            onClick={() => setIsDialogOpen(true)}
          >
            Region:&nbsp;
            <Box sx={{ display: 'flex' }}>
              {context.countries.find((country) => country.name.common === params.name)?.region || (
                <Box sx={{ display: 'flex' }}>
                  <CircularProgress />
                </Box>
              )}
            </Box>
          </Typography>
        </Tooltip>
        <RegionDialog open={isDialogOpen} onClose={handleDialogClose} countries={context.getRegionInfo(params.name!)} />
      </Box>
    </Box>
  );
});

export default CountryDetails;
