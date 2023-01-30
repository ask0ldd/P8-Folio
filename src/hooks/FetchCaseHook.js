import { useState, useEffect } from 'react'

export function useJSONFetch(url, setCodeUrl) {

    const [JSONObject, setJSONObject] = useState()
    const [isJSONLoading, setLoading] = useState(true)
    const [isJSONError, setError] = useState(false)

    useEffect(() => {

        if (!url) return

        async function fetchData() {
            setError(false)
            setLoading(true)

            try{
                const response = await fetch(url)
                const obj = await response.json()
                setJSONObject(obj)
                setCodeUrl(obj.highlights[0].file)
            }catch(error){
                console.log(error)
                setError(true)
            }finally{
                setLoading(false)
            }

        }
            
        fetchData()

    }, [url]) // url to avoid infinite loop triggered by useState uses.

return [isJSONLoading, JSONObject, setJSONObject, isJSONError]
}