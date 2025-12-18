'use client';

import Image from "next/image";
import type { RootState, AppDispatch } from "@/store/store";
import { useDispatch, useSelector } from 'react-redux';
import { useGetPostsQuery, useAddPostMutation } from "@/store/api/api";
import { title } from "process";

export default function Home() {
  const {data, isLoading, error} = useGetPostsQuery();
  
  const [addPost] = useAddPostMutation();

  return (
    <>
      <ul>
        {data?.slice(0,5).map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>

      <button onClick={() => addPost({ title: 'New Post' })}>
        Add Post
      </button>
   </>
  );
}
