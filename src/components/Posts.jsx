import React from 'react'
import PostItem from './PostItem'
import { getPosts } from '../slices/postSlice'
import { useDispatch, useSelector } from 'react-redux'
import { BarLoader } from 'react-spinners'

const Posts = () => {
    const dispatch = useDispatch()
    const { posts, process, error }= useSelector((state) => state.posts)
    return (
        <div>
            <button
                type='submit'
                className='bg-lime-300  hover:bg-lime-400 transition-all p-2 text-sm'
                onClick={() => dispatch(getPosts())}
                disabled={process === 'loading'}
            >
                Get posts
            </button>
            <div>
            {process === 'loading' && <div className="flex items-center justify-center">
                <BarLoader
                    color={"#71f125"} 
                    loading={true} 
                    width={180}
                />
            </div>}
            {process === 'loaded' && posts.map((post) => (
                <PostItem key={post.id} post={post} />
            ))}
            {process === 'error' && <div  className="flex items-center justify-center">
                <p className="text-red-500">ERROR:</p>
                <p>{error}</p>
            </div>}
            </div>
        </div>
    )
}

export default Posts
