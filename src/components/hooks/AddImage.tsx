import { useState } from "react"

export default function AddImage (props:any) {

    const [imageName, setImageName] = useState('')

    function handleInputChange (event: any) {
        setImageName(event.target.value)

    }

    function handleAddImage () {
        if (imageName.trim() !== '') {
            props.setSearchs((prevSearchs: any) => [...prevSearchs, imageName])
            props.setShowAddImage(false)
            setImageName('')
        }
    }

    return (
        <div className="flex flex-col justify-center items-center h-[300px] w-[300px] gap-5">
            <input className={`
            appearance-none bg-gray-800 rounded-md p-4 border-blue-500 text-lg font-bold w-[200px]
            `} type="text" value={imageName} onChange={handleInputChange} placeholder="Pesquisar" />
            <button  className={`
                bg-blue-500 px-4 py-2 rounded-md
            `} onClick={handleAddImage}>Adicionar</button>
        </div>
    )
}