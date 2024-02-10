const label = ({ text }) => {
    return (
        <label htmlFor={text} className='text-gray-custom text-base'>{text}</label>
    )
}

const input = ({ type = 'text', placeholder, className, refProp, error = false, messageError, ...props }) => {

    return (
        <>
            <input {...props} ref={refProp} type={type} className={`block text-gray-600 bg-gray-200 p-3 rounded focus:outline-none ${className}`} placeholder={placeholder} />
            {error ? (
                <span className="text-xs text-green-500">{messageError}</span>
            ) : (
                <>
                    <span className="text-xs text-red-500">{messageError}</span>
                </>
            )}
        </>
    )
}

export default {
    label,
    input
}
