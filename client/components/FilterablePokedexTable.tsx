import { useState } from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import PokemonTypeSelection from './PokemonTypeSelection';
import PokedexTable from './PokedexTable';
import { trpc } from '../utils/trpc';

const FilterablePokedexTable = () => {
  const [selectedType, setSelectedType] = useState<string | undefined>(undefined);
  const { data: pokemons } = trpc.getPokemonByType.useQuery(selectedType ?? '');

  return (
    <Box>
      <PokemonTypeSelection
        selectedType={selectedType}
        selectType={setSelectedType}
      />
      {pokemons && pokemons.length > 0 ? (
        <PokedexTable pokemons={pokemons} />
      ) : (
        selectedType && (
          <Card>
            <CardContent>
              <Typography variant="h6" align="center">
                No Pokemon available for the selected type
              </Typography>
            </CardContent>
          </Card>
        )
      )}
    </Box>
  );
};

export default FilterablePokedexTable;
