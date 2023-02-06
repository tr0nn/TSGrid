import React from 'react';
import { useEffect, useRef } from 'react';
import useMount from './hooks/useMount';

// ამ შემთხვევაში useEffect  გაეშვება მხოლოდ ერთხელ რადგან :
// useRef არის true და render მას ვერ შეცვლის, სანამ ხელით
// არ მივანიშებთ false მნიშვენლობას.
// ეს კარგი მაგალითია api ზე რექუესთების გასაგზავნათ
export default function OneRender() {
  const conosleRef = useRef(true);

  useEffect(() => {
    if (conosleRef.current) {
      console.log('გაეშვა რექვესთი API ზე ერთხელ');
      alert('გაეშვა რექვესთი API ზე ერთხელ');
      conosleRef.current = false;
    }
  }, []);

  // useMount არის იმპორტირებული Costum Hook რომელიც გააკეთებს იგივე საქმეს რაც მაღლა კეთდება.
  useMount(() => {
    console.log('console გაეშვა useMount დან მხოლოდ 1x');
  });
  return <></>;
}
