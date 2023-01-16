import React from 'react';

export default function Layout(props: any) {
  return (
    <div className={`flex flex-col justify-center items-center bg-[#fefef2] `}>
      {props.children}
    </div>
  );
}
