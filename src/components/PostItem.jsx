import React from 'react'
import { removePostById } from '../slices/postSlice'
import { useDispatch } from 'react-redux'
import { PulseLoader } from 'react-spinners'

const PostItem = ({ post }) => {
    const dispatch = useDispatch();
    return (
        <div 
            className='flex w-full bg-indigo-500 hover:bg-indigo-300 transition-all py-1 px-2 text-white rounded-sm cursor-pointer mt-4 min-w-fit min-h-fit'
            id={post.id}
            onClick={() => dispatch(removePostById(post.id))}
            disabled={post.process === 'deleting'}
        >
            {!post.process && post.body}
            {post.process === 'deleting' && <div className="flex items-center justify-center">
                <PulseLoader
                    color={"#71f125"} 
                    loading={true} 
                    width={180}
                />
            </div>}
            {post.process === 'error' && alert('Error')}
        </div>
    )
}

export default PostItem
