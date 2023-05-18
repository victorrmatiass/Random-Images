import AddButton from "@/components/hooks/AddButton";
import AddImage from "@/components/hooks/AddImage";
import RandomImages from "@/components/hooks/RandomImage";
import { useState } from "react";

export default function RandomImagesPage() {

    const [searchs, setSearchs] = useState<Array<string>>(['Cachorro', 'Gato'])
    const [showAddImage, setShowAddImage] = useState(false)

    function handleAddButtonClick() {
        setShowAddImage(true)
    }

    function handleAddImageClick() {
        setShowAddImage(false)
    }

    return (
        <div className={`flex-col justify-center items-center`}>
            <h1 className="flex justify-center items-center p-3 font-bold text-3xl">Imagens Aleatórias</h1>

            <div className={`
            flex justify-center items-center flex-wrap gap-5 p-7
            `}>
                {searchs.map((search) => (
                <RandomImages text={search} searchs={searchs} setSearchs={setSearchs}/>
                ))}

            {(showAddImage || (searchs.length == 0)) ? (<AddImage searchs={searchs} setSearchs={setSearchs} setShowAddImage={setShowAddImage}/>) : (<AddButton onClick={handleAddButtonClick} />)}
            </div>

        </div>
    )
}