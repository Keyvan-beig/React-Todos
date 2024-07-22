const Input = ({ type, placeHolder, className, refValue, state }) => {

    return (
        <input
            onChange={e => state && state(e.target.value)}
            ref={refValue}
            type={type}
            placeholder={placeHolder}
            className={
                `${className}
                p-3
                bg-gray-100
                shadow-lg
                w-full
                rounded-lg
                border`
            } />
    )
}

export default Input``