import React, { useContext, useEffect, useState } from 'react'
import { FinJuego } from './FinJuego'
import { HarryPotterContext } from '../context/HarryPotterProvider'
import { Juego } from './Juego'
import { InicioJuego } from './InicioJuego'

export const Wpm = () => {

    const { personajes, libros, hechizos, objetoHechizos} = useContext(HarryPotterContext)

    const [tema, setTema] = useState('')
    const [name, setName] = useState([])
    const [characters, setCharacters] = useState(0)
    const [buffer, setBuffer] = useState('')
    const [counterWords, setCounterWords] = useState(0)
    const [time, setTime] = useState(61)
    const [usoHechizo, setUsoHechizo] = useState('')
    const [showGame, setShowGame] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (buffer === name) {
            setCharacters((characters) => characters + name.length)
            switch (tema) {
                case 'personajes':
                    setName(personajes[(Math.random() * personajes.length) | 0])
                    break;
                case 'hechizos':
                    let randomHechizo = hechizos[(Math.random() * hechizos.length) | 0]
                        setName(randomHechizo)
                        let objetoDevuelto = objetoHechizos.find((elem)=> elem.hechizo === randomHechizo)
                        let usoDelHechizo = objetoDevuelto['uso']
                        setUsoHechizo(usoDelHechizo)
                        break;
                case 'libros':
                    setName(libros[(Math.random() * libros.length) | 0])
                    break;
                default:
                    break;
            }
            setCounterWords((counterWords) => counterWords + 1)
        }
        setBuffer('')
    }
    const handleStart = (e) => {
        setTime(60)
        switch (e.target.id) {
            case 'personajes':
                setName(personajes[(Math.random() * personajes.length) | 0])
                alert('¡Elegiste personajes!')
                setTema('personajes')
                break;

            case 'hechizos':
                let randomName = hechizos[(Math.random() * hechizos.length) | 0] 
                setName(randomName)
                setTema('hechizos')
                let objetoDevuelto = objetoHechizos.find((elem)=> elem.hechizo === randomName)
                let usoDelHechizo = objetoDevuelto['uso']
                setUsoHechizo(usoDelHechizo)
                alert('¡Elegiste hechizos!')
                break;
                
            case 'libros':
                setName(libros[(Math.random() * libros.length) | 0])
                alert('¡Elegiste libros!')
                setTema('libros')
                break;
            default:
                break;
        }
        setShowGame(true);
    }
    const handleRestart = () => {
        setCharacters(0)
        setCounterWords(0)
        setName(personajes[(Math.random() * personajes.length) | 0])
        setShowGame(false)
        setBuffer('')

    }
    useEffect(() => {
        
        if (time !== 0) {
            const timeOut = setTimeout(() => setTime(time - 1), 1000);
            return () => clearTimeout(timeOut)
        }
        
    }, [time])

    if (!showGame) {
        return (<InicioJuego handleStart={handleStart} />)
    }
    return (
        <>
            {time !== 0 ? (
                <Juego name={name}
                    usoHechizo={usoHechizo}
                    time={time}
                    tema={tema}
                    buffer={buffer}
                    characters={characters}
                    counterWords={counterWords}
                    setBuffer={setBuffer}
                    handleSubmit={handleSubmit} />
            ) : (<>
                <FinJuego caracteresTipeados={characters}
                    setShowGame={setShowGame}
                    palabrasAcertadas={counterWords}
                    handleRestart={handleRestart} />
            </>
            )
            }
        </>
    )
}
