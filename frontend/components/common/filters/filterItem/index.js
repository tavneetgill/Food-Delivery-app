import ToggleButton from '@material-ui/lab/ToggleButton'
import React from 'react'
import './filterItem.css'
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    justifyContent: 'space-between',
  },
  toggle: {
    padding: '8px',
    margin: '10px 10px 10px 0px',
    display: 'flex',
    fontSize: '14px',
    border: '1px solid var(--site-gray)',
    borderRadius: '8px',
    '&.MuiToggleButtonGroup-groupedHorizontal:not(:last-child)': {
      borderRadius: '8px',
    },
    '&.MuiToggleButtonGroup-groupedHorizontal:not(:first-child)': {
      borderRadius: '8px',
      border: '1px solid var(--site-gray)',
    },
    '&.Mui-selected': {
      borderRadius: '8px',
      background: 'var(--primary-bg)',
      color: 'var(--filter-text)',
    },
    '&.MuiToggleButton-root': {
      '&:hover': {
        background: 'var(--primary-bg)',
        color: 'var(--filter-text)',
      },
    },
  },
});

const FilterItem = ({ options, value, selectToggle}) => {
  const classes = useStyles();
  return (
    <ToggleButtonGroup orientation="horizontal" value={value} onChange={selectToggle} exclusive className='filters'>
        {options && options.map(({title, id, value})=>{
            return (<ToggleButton className={classes.toggle} key={id} value={value}>
            <div className='filter-name'>{title}</div>
        </ToggleButton>)
        })}
    </ToggleButtonGroup>
  )
}

export default FilterItem 