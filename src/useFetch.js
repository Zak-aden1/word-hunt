import React from 'react'
import { useState, useEffect } from 'react'

const useFetch = (url) => {
    const [data, setData] =useState([])
    const [pending, setPending] = useState(true)
    const [error, setError] =useState(false)
    useEffect(() => {
        fetch(url)
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
            console.log(data);
        })
        .catch(err => {
            setError(err.message)
            setPending(false)
        })
  }, [])
    return {data, pending, error, setData}
}

export default useFetch
