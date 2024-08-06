
const Filter = ({handelFilter}) => {
    return (
        <div className="px-6 py-3">
            <h1 className="text-xl my-1">filter</h1>
            <select

                onChange={(e) => handelFilter(e.target.value)}

                className="border w-28 p-1"
            >
                <option value="">All</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>

            </select>  
        </div >
    )
}

export default Filter