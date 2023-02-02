// useMount არის Costum Hook, სადაც შეიძლება ნებიმსიერი სახელი მიენიჭოს
// ამ შეთხვევაში useMount hook გამოიყენება useEffec ის ჩასანაცვლებლად, რათა 
// გვერდის პირველი ჩატვირთვის დროს მხოლოდ ერთხელ გაეშვას render();
import {useRef, useEffect,EffectCallback} from 'react'

export default function useMount(effect: EffectCallback){
    const firstRender = useRef(true)

    useEffect(() =>{
        if(firstRender.current){
            effect();
            firstRender.current = false
        }
    }, []);
}