import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

export default function OTPVerification() {
    const [otp, setOtp] = useState(Array(6).fill(""))
    const navigate = useNavigate()
    const InputChange = (e, index) => {
        let newOTP = [...otp]
        if (!/^[0-9]?$/.test(e.target.value)) return;
        newOTP[index] = e.target.value
        setOtp(newOTP)
        if (e.target.value && index < 5) {
            document.getElementById(`otp-${index + 1}`).focus()
        }
    }
    const postOTP = async (e) => {
        e.preventDefault()
        const otpValue = otp.join("")
        const token = Cookies.get('verificationToken')
        try {
            const res = await axios.post("http://localhost:4000/auth/verifyotp", { "otp": otpValue }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                withCredentials: true
            })
            toast.success(res?.data.message, { theme: "dark", autoClose: 3000 })
            navigate("/movielist")
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.message || "Account has not been created. Please try again.", { theme: "dark", autoClose: 3000 })
        }
    }
    return (
        <div className="flex items-center justify-center h-[85vh]">
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
                <h2 className="text-2xl font-semibold text-white mb-4">OTP Verification</h2>
                <p className="text-gray-400 mb-4">We have sent a verification code to your email. Please enter the OTP below.</p>
                <form onSubmit={(e) => postOTP(e)}>
                    <div className="flex justify-center gap-2 mb-4">
                        {otp.map((digit, ind) => (
                            <input key={ind} type="text" required value={digit} maxLength="1" id={`otp-${ind}`} className="w-12 h-12 text-center text-white bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#adfc03bb]" onChange={(e) => InputChange(e, ind)} />
                        ))}
                    </div>
                    <button className="w-full bg-[#ACFC03] hover:bg-[#adfc03e1] font-semibold py-2 rounded-lg transition text-black mt-3">
                        Verify OTP
                    </button>
                </form>
                <p className="text-gray-400 text-sm mt-2">
                    Didn’t receive the OTP?
                    <a href="#" className="text-[#ACFC03] font-semibold underline">Resend</a>
                </p>
            </div>
        </div>
    )
}