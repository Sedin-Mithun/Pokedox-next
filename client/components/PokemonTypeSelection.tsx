import { useCallback } from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { PokemonTypeSelectionProps } from '@/app/interface/types';

const POKEMON_TYPES = [
  { value: 'grass', label: 'Grass' },
  { value: 'fire', label: 'Fire' },
  { value: 'water', label: 'Water' },
  { value: 'electric', label: 'Electric' },
  { value: 'poison', label: 'Poison' },
];

const PokemonTypeSelection = ({ selectedType, selectType }: PokemonTypeSelectionProps) => {
  const handleChange = useCallback((e: any) => {
    selectType(e.target.value);
  }, [selectType]);

  return (
    <Box mt={2}>
      <FormControl variant="outlined" fullWidth={false} style={{ width: 200 }}>
        <InputLabel id="pokemon-type-label">Pokemon Type</InputLabel>
        <Select
          labelId="pokemon-type-label"
          id="pokemon-type"
          value={selectedType ?? ""}
          onChange={handleChange}
          label="Pokemon Type"
        >
          {POKEMON_TYPES.map((type) => (
            <MenuItem key={type.value} value={type.value}>
              {type.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default PokemonTypeSelection;
