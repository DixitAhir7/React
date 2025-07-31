import { useState } from "react"
import Select from 'react-select'
import createInstance from "../Apis/axios";

export default function Dogapi() {

    const [breeds, setBreeds] = useState();
    const [dogImg, setImg] = useState(null);

    const handleApi = async () => {
        const response = await createInstance.get('/breeds/list/all');
        const data = response.data.message;
        if (data) {
            const breedList = [];
            Object.entries(data).forEach((dogData) => {
                if (dogData[1].length > 0) {
                    dogData[1].forEach((innerData) => {
                        const obj = {}
                        obj['value'] = `${dogData[0]} ${innerData}`
                        obj['label'] = `${dogData[0]} ${innerData}`
                        breedList.push(obj)
                    })
                } else {
                    breedList.push({
                        value: dogData[0],
                        label: dogData[1]
                    })
                }
                setBreeds(breedList)
            })
        } else {
            console.log('api error')
        }
    };

    const handleChange = async ({ value }) => {
        const imgResponse = await createInstance.get(`/breed/${value}/images/random`);
        if (imgResponse.status === 200) {
            setImg(imgResponse.data.message)
        } else {
            console.log('image fetching error')
        }
    }

    handleApi();

    return (
        <div>
            <Select options={breeds} onChange={handleChange} />
            {dogImg ? <img src={dogImg} width={300} height={260} /> : null}
        </div>
    )
};