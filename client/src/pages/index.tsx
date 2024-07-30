import { Container, Box, Typography } from '@mui/material';
import PokeForm from '../components/PokeForm';
import FilterablePokedexTable from '../components/FilterablePokedexTable';

const Index = () => (
      <Container>
        <Box sx={{ my: 4 }}>
          <Typography variant="h5" gutterBottom>
            Find Pokemon by Name
          </Typography>
          <PokeForm />
        </Box>
        <Box>
          <Typography variant="h5" gutterBottom>
            Find Pokemon by Type
          </Typography>
          <FilterablePokedexTable />
        </Box>
      </Container>
);

export default Index;
