import { MenuItem, TextField, ThemeProvider } from '@material-ui/core'
import React from 'react'
import styles from './Header.module.scss'
import { createTheme } from '@material-ui/core'

const Header = ({category, setCategory}) => {

    const darkTheme = createTheme({
    palette: {
        type: 'dark',
        primary:  {
            main: '#fff'
        }
    },
    });

    const languages = [
        {
            value: 'English',
            label: 'en'
        },
        {
            value: 'Spanish',
            label: 'es'
        },
        {
            value: 'French',
            label: 'fr'
        },
        {
            value: 'Japanese',
            label: 'ja'
        }
    ]

    return (
        <div className={styles.header}>
            <span className={styles.title}>Word Hunt</span>
            <div className={styles.input}>
                <ThemeProvider theme={darkTheme}>
                    <TextField  variant='outlined' label='outlined' />
                    <TextField
                        select
                        label=" Search a word"
                        helperText="Please select your Language"
                            value={category}
                            onChange={(e) => {setCategory(e.target.value)}}
                        >
                        {languages.map((option) => (
                            <MenuItem key={option.label} value={option.label}>
                            {option.value}
                            </MenuItem>
                        ))}
                    </TextField>
                </ThemeProvider>
            </div>
        </div>
    )
}

export default Header
