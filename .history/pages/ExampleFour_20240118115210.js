import { useEffect, useState } from 'react'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default function ExampleFour() {

    const [number, setNumber] = useState(0);
    const [color, setColor] = useState('gray');

    const[trigger, setTrigger] = useState(false);

    const HandlerChange = () => {
        if(number > 2) {
            setColor('orange');
        }
        console.log(number);
    }

    useEffect(() => {
        var interval;

        if(trigger) {
            interval = setInterval(() => {
                HandlerChange()
                setTrigger(false);
            }, 3000) // after 3 seconds then it will do the console log below
        }
        console.log(number);
        console.log(trigger);

        return () => clearInterval(interval);
    })

    return(
        <>
            
        </>
    )
}