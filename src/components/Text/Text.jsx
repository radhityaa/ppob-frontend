const Title = ({ text, className, size = 'text-2xl' }) => {
    return (
        <p className={`text-primary font-bold ${size} ${className}`}>
            {text}
        </p>
    )
}

const Description = ({ children, size = 'text-base', mt = 'mt-5', textCenter = 'text-justify' }) => {
    return (
        <div className={`${mt} text-gray-custom dark:text-white ${textCenter} space-y-5 ${size}`}>
            {children}
        </div>
    )
}

export default {
    Title,
    Description
}
