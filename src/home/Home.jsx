import React from 'react'
import { useState, useEffect } from 'react'
import useFetch from '../useFetch'

import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import Header from '../components/Header'
import Definition from '../components/Definition'


const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        justifyContent: 'space-evenly'
    }
})





const Home = ({light}) => {
    const [word, setWord] =useState('')
    const [category, setCategory] =useState('en')

     const [data, setData] =useState([])
    const [pending, setPending] = useState(true)
    const [error, setError] =useState(false)

    const classes = useStyles()
    


  useEffect(() => {
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`)
            .then(res => {
            if(!res.ok) {
            throw Error('problem with fetch')
            } else {
            return res.json()
         }
  })
        .then(data => {
            setData(data)
            setPending(false)
        })
        .catch(err => {
            setError(err.message)
            setPending(false)
        })
  }, [word, category])

    return (
        <Container maxWidth='md' className={classes.container} >
        <Header light={light} word={word} setWord={setWord} category={category} setCategory={setCategory} />
                { data && <Definition light={light} word={word} data={data} category={category} /> }
        </Container>
    )
}

export default Home
