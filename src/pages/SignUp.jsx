import React from 'react'
import Heyrazzi from '../assets/logo.png'
import side from '../assets/side.png'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { ArrowCircleUpRight } from '@untitled-ui/icons-react'
import Footer from '@/components/Footer'

const SignUp = () => {
    return (
        <div>
            <div className="flex">
                <img src={Heyrazzi} alt="Heyrazzi" className="w-1/2" />
            </div>
            <div className="flex justify-center items-center h-screen mt-10">
                <div>
                    <h1 className="text-2xl font-bold">Join <br />HeyRazzi</h1>
                    <p className='text-gray-400'>Sign up for free!</p>
                    <form>
                        <div className='flex mt-2'>
                            <Input placeholder='Name' className='mr-2 rounded-3xl bg-[#D1D1D1] w-20' />
                            <Input placeholder='Email' className='mr-2 rounded-3xl bg-[#D1D1D1] w-20' />
                        </div>
                        <div className='flex mt-2'>
                            <Input placeholder='Enter your username' className='rounded-3xl bg-[#D1D1D1] w-40' />
                            <Input placeholder='Password' className='mt-2 rounded-3xl bg-[#D1D1D1] w-40' />
                            <Button className='mt-2 w-40 p-5'>Create Account <ArrowCircleUpRight stroke='1' color='white' /></Button>
                        </div>
                    </form>
                    <div className='mt-5'>
                        <p>Already have an account? <a href='/login' className='text-orange-500'>Login</a></p>
                    </div>
                </div>
            </div>
            <div className="flex ml-10">
                <img
                    src={side}
                    alt="Side Image"
                    className="max-w-full h-auto"
                />
            </div>
            <div className='mt-10'>
                <Footer/>
                </div>
        </div>
    )
}
export default SignUp