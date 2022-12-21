import React from 'react';
import Footer from './Footer';

export default function Layout(props: any) {
  return (
    <div
      className={`flex flex-col justify-center items-center bg-[#fefef2] ${props.teste}`}
    >
      {props.children}
    </div>
  );
}
