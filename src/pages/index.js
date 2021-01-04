import React, {useState} from 'react'
import Footer from '../components/Footer';
import InfoSection from '../components/InfoSection';
import { HomeObjOne,HomeObjTwo} from '../components/InfoSection/Data';
import Navbar from '../components/Navbar'
import Services from '../components/Services';
import Sidebar from '../components/Sidebar'

const Home = () => {
    const [isOpen,setIsOpen] = useState(false);
    const toggle = () =>{
        setIsOpen(!isOpen)
    }
    return (
        <div>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <InfoSection {...HomeObjOne} />
            <Services />
            <InfoSection {...HomeObjTwo} />
            <Footer />
        </div>
    )
}

export default Home
