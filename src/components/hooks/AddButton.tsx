export default function AddButton({onClick}:any) {
    return (
        <div className="flex justify-center items-center h-[300px] w-[300px]">
            <button className="h-[100px] w-[100px] rounded-full flex items-center justify-center" onClick={onClick}>
                <span className="text-blue-500 text-7xl font-bold ">+</span>
            </button>
        </div>
    )
}