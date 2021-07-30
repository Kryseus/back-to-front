import React, { useState, useEffect } from 'react'
//import { client } from '../client'
import MyCard from './Cards'

//import React from 'react'

function GetRecipes() {

    const [loading, setLoading] = useState(true)
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        setLoading(true)
        fetch("http://localhost:8000/recipes")
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setRecipes(data.recipes)
                setLoading(false)
            })
            .catch(error => {
                console.log(error.message)
            })


    }, [])
    if (loading) return <>Loading</>
    return (
        <>
            {
                recipes.map((recipe, index) =>
                    <MyCard key={index} recipe={recipe} />
                )}
        </>
    )
}

export default GetRecipes;