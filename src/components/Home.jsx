import React, { useState } from "react";
import { IoDocument } from "react-icons/io5";


function Home() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (

        <div>
            <div className="mt-[8rem] pt-3 pb-14 bg-white absolute rounded-t-3xl h-auto px-8" >
            <img 
  src="/user.jpg" 
  className="w-44 h-44 mx-auto mt-[-4rem] rounded-full hover:w-64 hover:h-64 transition-all duration-500 ease-in-out"
/>
                <h1 class="mt-8 mb-4 text-3xl font-bold leading-none tracking-tight text-center text-gray-500">Sithara Pramodini</h1>
                <p class="text-lg my-2 font-semibold bg-red-00 rounded-full text-gray-400 lg:text-xl text-center ">200189761010</p>
                <p class="text-lg my-2 font-semibold text-gray-400 lg:text-xl text-center ">0701223456</p>

                <div className="rounded-3xl mt-10 w-full bg-white my-2 overflow-hidden shadow-md">
                    <div
                        className="flex justify-between items-center px-4 py-3 cursor-pointer"
                        onClick={toggleAccordion}
                    >
                        <p className="text-gray-500 text-lg font-bold flex items-center gap-6"><IoDocument className="text-xl text-gray-500" />
                            Terms and conditions</p>
                        {/* <span>{isOpen ? '' : '>'}</span> */}
                    </div>
                    <div
                        className={`transition-all px-4 duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 p-4 bg-white text-gray-600' : 'max-h-0 p-0'
                            }`}
                    >
                        <p>
                            Please be informed that this branch records photographs for security, customer verification, and fraud prevention purposes. This is done in compliance with the Data Protection Act of Sri Lanka, ensuring that your personal data is handled securely and used only for legitimate purposes.
                        </p>
                        <br></br>
                        <p>
                            If you have any concerns or require further information, please contact our customer service team.
                        </p>
                    </div>
                </div>


                <div class="flex items-start mt-10 mx-1 gap-4">
                    <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-white " />
                    <label for="link-checkbox" class="ms-2 mt-[-6px] text-sm font-medium text-gray-900 ">I agree to the storage and use of my photograph as described in terms and conditions</label>
                </div>

            </div>
        </div>
    );
}

export default Home;
