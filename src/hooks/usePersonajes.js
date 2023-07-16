import { useEffect, useState } from "react"


 const useData = () => {

     //const [usoHechizo, setusoHechizo] = useState([])
    const [personajes, setPersonajes] = useState([])
    const [hechizos, setHechizos] = useState([])
    const [objetoHechizos, setObjetoHechizos] = useState([])
    const [libros, setLibros] = useState([])

    const getPersonajes = async ()=> {
        try {
            let res = await fetch('https://harry-potter-api.onrender.com/personajes')
            let data = await res.json()
            const nombresPersonajes = data.map((p)=> p.personaje)
            setPersonajes(nombresPersonajes)
        } catch (error) {
            alert('Intenta otra vez')
        }
    }
    const getHechizos = async ()=> {
        try {
            let res = await fetch('https://harry-potter-api.onrender.com/hechizos')
            let data = await res.json()
            const nombresHechizos = data.map((h)=> h.hechizo)
            setHechizos(nombresHechizos)
            setObjetoHechizos(data)

        } catch (error) {
            alert('hubo un error')
        }
    }
    const getLibros = async ()=> {
        try {
            let res = await fetch('https://harry-potter-api.onrender.com/libros')
            let data = await res.json()
            const nombresLibros = data.map((l)=> l.libro)
            setLibros(nombresLibros)
        } catch (error) {
            console.log('hubo un error')
        }
    }
    

    useEffect(() => {
        getPersonajes()
        getHechizos()
        getLibros()
    }, [])

    return {
        personajes,
        hechizos,
        objetoHechizos,
        libros
    }
    
}
export default useData;