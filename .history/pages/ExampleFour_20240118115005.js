import { useEffect, useState } from 'react'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default function ExampleFour() {

    const [number, setNumber] = useState(0);
    const [color, setColor] = useState('gray');

    const[trigger, setTrigger] = useState(false);

    const HandlerChange = () => {
        if(number > 2) {
            setColor
        }
        console.log(number);
    }

    return(
        <>
            
        </>
    )
}