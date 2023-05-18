import Image from "next/image"
import { useState } from "react"

export default function RandomImages(props: any) {
    const search = props.text
    const searchs = props.searchs
    const index = searchs.indexOf(search)
    console.log(index)

    const url = 'https://source.unsplash.com/featured/'
    
    function randomNumber() {
        return Math.floor(Math.random() * 101) + 200
    }

    const [size, setSize] = useState<number>(randomNumber())

    function renderButton() {
        return (
            <div className="flex gap-[10px]">

                <button className={`
                    bg-blue-500 px-4 py-2 rounded-md w-[240px]
                `} onClick={() => {
                    setSize(randomNumber())
                }}>
                    {search}
                </button>

                <button className={`
                    bg-red-500 px-4 py-2 rounded-md w-[50px] font-bold
                `} onClick={deleteButton}>
                    X
                </button>

            </div>

        )
    }

    function deleteButton() {
        props.setSearchs((prevSearchs: Array<string>) => {
            const newSearchs = [...prevSearchs]
            newSearchs.splice(index, 1)
            console.log(search, index, newSearchs)
            return newSearchs
        })
    }
    
    return (
        <div className="flex flex-col gap-3 border border-zinc-500 p-7 rounded-md ">
            <Image src={`${url}${size}x${size}?${search}`} height={300} width={300} alt={`Image of ${search}`}/>
            {renderButton()}
        </div>
    )
}