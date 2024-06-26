const apiUrl = "https://rickandmortyapi.com/api"

export const getCharacters = async () => {
    return await fetch(`${apiUrl}/character`)
}