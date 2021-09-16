import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import top100Films from '../cards/category/test'


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const filter = createFilterOptions();

export default function SearchList() {
  const [value, setValue] = React.useState(null);
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  var test = top100Films.slice(1,12)
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
 
 
  return (
    <div>
        <Autocomplete
        value={value}
        onChange={(event, newValue) => {
            if (typeof newValue === 'string') {
            setValue({
                title: newValue,
            });
            } else if (newValue && newValue.inputValue) {
            // Create a new value from the user input
            setValue({
                title: newValue.inputValue,
            });
            } else {
            setValue(newValue);
            }
        }}
        filterOptions={(options, params) => {
            const filtered = filter(options, params);

            // Suggest the creation of a new value
            if (params.inputValue !== '') {
            filtered.push({
                inputValue: params.inputValue,
                title: `Add "${params.inputValue}"`,
            });
            }

            return filtered;
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        id="search"
        options={top100Films}
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
            return option.title;
        }}
        renderOption={(option) => option.title}
        style={{ width: '100%'}}
        freeSolo
        renderInput={(params) => (
            <TextField {...params} label="Tìm kiếm chủ đề" variant="outlined" />
        )}
        />
        <div className={classes.root}>
            <Divider />
            <List component="nav" aria-label="secondary mailbox folder">
            {test.map((item,index) => (
             
                <ListItem
                  button
                  selected={selectedIndex === index}
                  onClick={(event) => handleListItemClick(event, index)}
                  key={index}
                >
                  <ListItemText primary={item.title} />
                </ListItem>))
              }
            </List>
        </div>
    </div>
  
  );
}
