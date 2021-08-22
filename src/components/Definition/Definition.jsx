import React from 'react'
import styles from './Definition.module.scss'
import { makeStyles, withStyles } from '@material-ui/styles'
import { grey } from '@material-ui/core/colors';
import { Switch } from '@material-ui/core';


    const useStyles = makeStyles({
        audio: {
            backgroundColor: '#fff',
            borderRadius: 10
        },
        word: {
            backgroundColor: 'white',
            color: 'black'
        },
        hr: {
            backgroundColor: 'black',
             width: '100%'
        },
        lightAudio: {
            backgroundColor: '#000',
            borderRadius: 10
        },
        Lightword: {
            backgroundColor: 'black',
            color: 'black'
        },
        lightHr: {
            backgroundColor: 'white',
            color: 'white',
             width: '100%'
        },
    })


const Definition = ({word, category, data, light}) => {
    const classes = useStyles()
    return (
        <div className={styles.definition}>

            {
                data[0] && word  && category === 'en' && (
                    <audio controls src={ data[0].phonetics[0].audio} className={classes.audio}>
                        audio not supported
                    </audio>
                )
            }

            {word ==='' ? <span className={styles.title}>Start by typing a word!!</span>: (
                data.map((word) => (word.meanings.map((item) => (
                        item.definitions.map((def) => (
                            <div className={styles.singleMeaning}>
                                <b>{def.definition}</b>
                                <hr className={light? classes.lightHr: classes.hr} />
                                {def.example&& (
                                    <span>
                                    <b>Example: </b> 
                                    {def.example}
                                    </span>
                                )}
                                {def.synonyms && (
                                    <span>
                                    <b> Synonyms: </b> 
                                    {def.synonyms.map((i) => `${i}, `)}
                                    </span>
                                )}
                            </div>
                        ))
                    ))
                ))
            )}
        </div>
    )
}

export default Definition
