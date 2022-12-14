import React from 'react';

export default function Layout(props: any) {
  return (
    <div className={`flex flex-col justify-center items-center ${props.teste}`}>
      {props.children}
    </div>
  );
}
