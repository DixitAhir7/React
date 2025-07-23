import { useEffect, useState } from "react";
import Select from "react-select/base";

export default function Apidata() {

    const [data2, setData] = useState([]);

    useEffect(() => {
        fetch(`https://dog.ceo/api/breeds/list/all`).then((response) => {
            return response.json()
        }).then(data => {
            const breedlist = []
            const convertarr = Object.entries(data)
            setData(convertarr)
            const options = breedlist.map((dogs) => (
                {
                    value : dogs,
                    label : dogs
                }
            ))
            breedlist.push(options)
        }).catch((err) => {
            console.warn(err)
        })
    }, [])

    console.log(data2[0])

    return (
        <>
            <Select options={data2[0]}/>
        </>
    )
};