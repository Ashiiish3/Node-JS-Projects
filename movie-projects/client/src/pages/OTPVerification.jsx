import React from 'react'

export default function OTPVerification() {
    return (
        <div class="flex items-center justify-center h-[85vh]">
            <div class="bg-gray-900 p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
                <h2 class="text-2xl font-semibold text-white mb-4">OTP Verification</h2>
                <p class="text-gray-400 mb-4">We have sent a verification code to your email. Please enter the OTP below.</p>
                <div class="flex justify-center gap-2 mb-4">
                    <input type="text" maxlength="1" class="w-12 h-12 text-center text-white bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#adfc03bb]" />
                    <input type="text" maxlength="1" class="w-12 h-12 text-center text-white bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#adfc03bb]" />
                    <input type="text" maxlength="1" class="w-12 h-12 text-center text-white bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#adfc03bb]" />
                    <input type="text" maxlength="1" class="w-12 h-12 text-center text-white bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#adfc03bb]" />
                    <input type="text" maxlength="1" class="w-12 h-12 text-center text-white bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#adfc03bb]" />
                    <input type="text" maxlength="1" class="w-12 h-12 text-center text-white bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#adfc03bb]" />
                </div>
                <button class="w-full bg-[#ACFC03] hover:bg-[#adfc03e1] font-semibold py-2 rounded-lg transition text-black mt-3">
                    Verify OTP
                </button>
                <p class="text-gray-400 text-sm mt-2">
                    Didn’t receive the OTP?
                    <a href="#" class="text-[#ACFC03] font-semibold underline">Resend</a>
                </p>
            </div>
        </div>
    )
}