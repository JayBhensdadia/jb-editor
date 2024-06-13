'use client';

import React from 'react';
import { Editor, Tiptap } from '@repo/jb-editor/components';


const page = () => {
  return (
    <div className='w-full h-screen bg-white text-slate-950'>page

      {/* <Editor /> */}
      <div className='w-[500px] h-[200px]'>
        <Tiptap className='bg-yellow-100 w-[500px] h-[200px]' />
      </div>

    </div>
  );
};

export default page;