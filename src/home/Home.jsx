import React from 'react'
import { useState } from 'react'
import useFetch from '../useFetch'

import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import Header from '../components/Header'

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        justifyContent: 'center'
    }
})

const Home = () => {
    const [word, setWord] =useState('')
    const [category, setCategory] =useState('en')

    const classes = useStyles()


  const {data, pending, error} = useFetch('https://api.dictionaryapi.dev/api/v2/entries/en/hello')  

    return (
        <Container maxWidth='md' className={classes.container} >
            {pending && <div>loading... </div>}
            {error && <div> {error} </div>}
                <Header word={word} setWord={setWord} category={category} setCategory={setCategory} />
        </Container>
    )
}

export default Home
