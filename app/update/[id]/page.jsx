'use client'

import UpdateForm from "@/app/components/UpdateForm";


const page = ({params}) => {
    console.log(params);
  return (
    <div className="max-w-md mx-auto mt-10">
        <h1 className="text-2xl font-semibold text-gray-800 my-5">Update Item: {params.id}</h1>
        <UpdateForm id={params.id}/>
    </div>
  )
}

export default page;