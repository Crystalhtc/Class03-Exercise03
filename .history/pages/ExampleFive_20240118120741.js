import { useEffect, useState } from 'react'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

// we want to setup a counter
// after every one second the number increases by 1
// we want to display that number on screen as it increases
// no button needed it will update number automatically

export default function ExampleFive() {
    
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(())
    })
    
    return(
        <>
            <Header/>
            <main>

            </main>
            <Footer/>
        </>
    )
}