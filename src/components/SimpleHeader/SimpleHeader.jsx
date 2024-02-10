export default function SimpleHeader({title}) {
    return (
        <div className='bg-base w-full px-3 py-2'>
            <div className="flex items-center justify-between">
                <div>
                    <h3 className='text-white font-semibold'>{title}</h3>
                </div>
            </div>
        </div>
    )
}