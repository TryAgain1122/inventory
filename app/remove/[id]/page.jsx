'use client'

import removeAction from '../../actions/removeAction';

const RemovePage = ({ params }) => {

    const handleRemove = async() => {
        await removeAction(params.id)
    }
    return (
        <div className="flex justify-center items-center max-w-md mx-auto min-h-screen">
            <div className="bg-gray-300 w-full h-[300px] flex justify-center items-center rounded-lg">
                <div className="flex flex-col my-5">

                <h1 className="flex items-center text-lg font-extrabold dark:text-white">Are you sure to Delete ?</h1>

                <div className="flex flex-row justify-between items-center py-4">
                    <button className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    onClick={handleRemove}
                    >Yes</button>
                    <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">No</button>

                </div>
                </div>
            </div>
        </div>
    )
}

export default RemovePage