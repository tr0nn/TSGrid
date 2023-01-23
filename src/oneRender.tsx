import React from 'react';
import { useEffect, useRef } from 'react';

// ამ შემთხვევაში useEffect  გაეშვება მხოლოდ ერთხელ რადგან :
// useRef არის true და render მას ვერ შეცვლის, სანამ ხელით
// არ მივანიშებთ false მნიშვენლობას.
// ეს კარგი მაგალითია api ზე რექუესთების გასაგზავნათ
export default function OneRender() {
  const conosleRef = useRef(true);

  useEffect(() => {
    if (conosleRef.current) {
      console.log('გაეშვა რექვესთი API ზე ერთხელ');
      conosleRef.current = false;
    }
  }, []);
  return <></>;
}
