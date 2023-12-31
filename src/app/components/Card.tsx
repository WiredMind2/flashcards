import React from 'react';

export default function Card(data: any) {
    return (
        <div className='outline outline-offset-2 outline-blue-500 rounded-xl text-center divide-y p-4 m-5'>
            <p>{data.front}</p>
            <p>{data.back}</p>
        </div>
    )
}