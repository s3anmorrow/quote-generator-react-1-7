import React from 'react';

const Content = ({ message, author, link }:{ message:string, author:string, link:string }) => {

    return (
        <div className="py-4">
            <div className="italic">{message}</div>
            <div className="font-bold">{author}</div>
            <div className="text-sky-600 text-xs hover:underline pt-1"><a href="{link}">{link}</a></div>
        </div>
    );
}

export default Content;