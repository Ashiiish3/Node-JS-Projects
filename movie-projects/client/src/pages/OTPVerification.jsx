import React, { useState } from 'react'

export default function OTPVerification() {
    const [otp, setOtp] = useState("")
    console.log(otp)
    const InputChange = (e) => {
        console.log(e.target.value)
    }
    const postOTP = ()=> {

    }
    return (
        <div className="flex items-center justify-center h-[85vh]">
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
                <h2 className="text-2xl font-semibold text-white mb-4">OTP Verification</h2>
                <p className="text-gray-400 mb-4">We have sent a verification code to your email. Please enter the OTP below.</p>
                <div className="flex justify-center gap-2 mb-4">
                    <input type="text" maxLength="1" onChange={(e)=>InputChange(e)} className="w-12 h-12 text-center text-white bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#adfc03bb]" />
                    <input type="text" maxLength="1" onChange={(e)=>InputChange(e)} className="w-12 h-12 text-center text-white bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#adfc03bb]" />
                    <input type="text" maxLength="1" onChange={(e)=>InputChange(e)} className="w-12 h-12 text-center text-white bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#adfc03bb]" />
                    <input type="text" maxLength="1" onChange={(e)=>InputChange(e)} className="w-12 h-12 text-center text-white bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#adfc03bb]" />
                    <input type="text" maxLength="1" onChange={(e)=>InputChange(e)} className="w-12 h-12 text-center text-white bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#adfc03bb]" />
                    <input type="text" maxLength="1" onChange={(e)=>InputChange(e)} className="w-12 h-12 text-center text-white bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#adfc03bb]" />
                </div>
                <button className="w-full bg-[#ACFC03] hover:bg-[#adfc03e1] font-semibold py-2 rounded-lg transition text-black mt-3">
                    Verify OTP
                </button>
                <p className="text-gray-400 text-sm mt-2">
                    Didn’t receive the OTP?
                    <a href="#" className="text-[#ACFC03] font-semibold underline">Resend</a>
                </p>
            </div>
        </div>
    )
}