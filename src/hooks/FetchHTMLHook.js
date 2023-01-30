import { useState, useEffect } from 'react'

export function useHTMLFetch(url, dependancy) {

    const [fetchedData, setFetchedData] = useState()
    const [isLoading, setLoading] = useState(true)
    const [isError, setError] = useState(false)

    useEffect(() => {

        // CHECK IF THE POST SUBDIR PART OF THE URL DOESN'T CONTAIN UNDEFINED : url = window.location.origin + subDir + url
        if (!url || url.indexOf("undefined")!==-1) return

        async function fetchData() {
            setError(false)
            setLoading(true)

            try{
                const response = await fetch(url)
                const data = await response.text()
                setFetchedData(data)
            }catch(error){
                console.log(error)
                setError(true)
            }finally{
                setLoading(false)
            }

        }
            
        fetchData()

    }, [url]) // url to avoid infinite loop triggered by useState uses.

return [isLoading, fetchedData, setFetchedData, isError]
}