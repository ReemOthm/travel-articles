'use client'

const error = (reset: () => void )=>{

    return (
        <div className="flex flex-col gap-4 justify-center items-center min-h-[80vh]">
            <h2 className="text-2xl">Something went wrong!</h2>
            <button className="p-2 bg-gray-300 hover:bg-gray-400 rounded-md"
                onClick={() => reset()}
            >
                Try again
            </button>
        </div>
    )
}

export default error;