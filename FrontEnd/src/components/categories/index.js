import React from 'react';
import { Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/action/category';
import { categoriesState$ } from '../../redux/selectors';
import Category from './category';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import ListCategory from '../listCategory';

const filter = createFilterOptions();


export default function Categories() {
  const dispatch = useDispatch();
  const categories = useSelector(categoriesState$);
  React.useEffect(() => {
    dispatch(actions.getCategories.getCategoriesRequest());
  }, [dispatch]);
  const [value, setValue] = React.useState(null);

  return (
    <div style={{width: '100%'}}>
      <Grid container style={{ alignItems: 'center'}}>
        <Grid item md={6} lg={4} xs={9} >
          <div>
            <Stack spacing={2} sx={{ width: 'calc( 100% - 10px )'}}>
              <Autocomplete
                style={{marginLeft:'10px'}}
                value={value}
                onChange={(event, newValue) => {
                  if (typeof newValue === 'string') {
                    setValue({
                      name: newValue,
                    });
                  } else if (newValue && newValue.inputValue) {
                    // Create a new value from the user input
                    setValue({
                      name: newValue.inputValue,
                    });
                  } else {
                    setValue(newValue);
                  }
                }}
                filterOptions={(options, params) => {
                  const filtered = filter(options, params);

                  const { inputValue } = params;
                  // Suggest the creation of a new value
                  const isExisting = options.some((option) => inputValue === option.name);
                  if (inputValue !== '' && !isExisting) {
                    filtered.push({
                      inputValue,
                      name: `Add "${inputValue}"`,
                    });
                  }

                  return filtered;
                }}
                selectOnFocus
                clearOnBlur
                handleHomeEndKeys
                options={categories.map((option) => option)}
                getOptionLabel={(option) => {
                  // Value selected with enter, right from the input
                  if (typeof option === 'string') {
                    return option;
                  }
                  // Add "xxx" option created dynamically
                  if (option.inputValue) {
                    return option.inputValue;
                  }
                  // Regular option
                  return option.name;
                }}
                renderOption={(props, option) => <li {...props}>{option.name}</li>}
                freeSolo
                renderInput={(params) => (
                  <TextField fullWidth {...params} label="Tìm kiếm chủ đề"  />   
                )}
              /> 
            </Stack>
          </div>
        </Grid>
        <Grid lg={8} style={{display: 'flex', justifyContent: 'flex-end'}}>
          <ListCategory/>
        </Grid>
      </Grid>
      <Grid container >
        {value ? 
          <Grid item lg={4} md={11} style={{padding: '10px'}} >
            <Category category={value} />
          </Grid>
          : categories.map((category) => (<Grid item style={{padding: '10px'}} lg={4} md={6} key={category._id}>
            <Category category={category} />
          </Grid>))} 
      </Grid>
    </div>
  )
}