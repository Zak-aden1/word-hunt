import { MenuItem, TextField, ThemeProvider } from '@material-ui/core'
import React from 'react'
import styles from './Header.module.scss'
import { createTheme } from '@material-ui/core'

const Header = ({category, setCategory, word, setWord, light}) => {

    const darkTheme = createTheme({
    palette: {
        type:light? 'light': 'dark',
        primary:  {
            main:light ?'#000': '#fff'
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

    const handleChange = (e) => {
        setCategory(e)
        setWord('')
    }

    return (
        <div className={styles.header}>
            <span className={styles.title}>{word ? word: 'Word Hunt'}</span>
            <div className={styles.input}>
                <ThemeProvider theme={darkTheme}>
                    <TextField  
                    className={styles.search}
                    variant='outlined' 
                    label='Search a word' 
                        value={word}
                        onChange={(e) => setWord(e.target.value)}
                    />
                    <TextField
                    className={styles.select}
                        select
                        label="Language"
                        helperText="Please select your Language"
                            value={category}
                            onChange={(e) => {handleChange(e.target.value)}}
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
