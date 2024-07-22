
const Button = ({ name, className, sendData }) => {
    return (
        <button
            onClick={sendData}
            className={`
            ${className}
            py-2
            px-5 
            text-white
            `}
        >
            {name}
        </button>
    )
}

export default Button