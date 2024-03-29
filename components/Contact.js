import React from "react";
import userData from "@constants/data";

export default function Contact() {
  // const [data, setData] = useState({ email: 'aanchal@gamil.com' })

  // const saveOnClick = async (event) => {
  //  const {email}=data
  //   const res = fetch('https://aanchal-5c460-default-rtdb.firebaseio.com/userDataRecord.json',
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //       body:JSON.stringify({email})
  //     }
  //   )
  //   if(res){
  //     alert('saved')
  //   }else{
  //     alert('not saved')
  //   }
  //   // console.log('gft', res);
  // };

  return (
    <section >
      <div className="max-w-6xl mx-auto h-20 md:h-32  dark:bg-gray-800 antialiased">
        <h1 className=" text-5xl md:text-9xl font-bold  text-center md:text-left">
          Contact
        </h1>
      </div>
      {/* // shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] */}
      <div className="relative z-10 rounded-md py-2 shadow-2xl bg-[#e5cbf0] md:bg-[#caad7f6b] p-4 md:p-10 lg:p-4 max-w-6xl mx-auto mb-10 -mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:ml-4">
            <header className="">
              <h1 className="text-gray-80 font-semibold text-xl md:text-3xl ">
                Want to know more?
              </h1>
              <p className="font-light text-xl text-gray-700 mt-1">
                {/* Fill in the details and I'll get back to you as soon as I can. */}
                Here's how you can reach me!
              </p>
            </header>
            <div className="icons-container inline-flex flex-col my-10">
              <div className="flex flex-row items-center space-x-6 rounded-md 
               hover:border hover:border-blue-500 p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-telephone-fill h-4 w-4 text-blue-500"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                  />
                </svg>
                <p className="text-gray-80 font-light text-xl">
                  {userData.phone}
                </p>
              </div>
              <div className="flex flex-row items-center space-x-6 rounded-md 
                hover:border hover:border-blue-500 p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-envelope-fill h-4 w-4 text-blue-500"
                  viewBox="0 0 16 16"
                >
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                </svg>
                <p className="text-gray-80 font-light text-xl">
                  {userData.email}
                </p>
              </div>
              <div className="flex flex-row items-center space-x-6 rounded-md 
              hover:border hover:border-blue-500 p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-pin-fill h-4 w-4 text-blue-500"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.146.146A.5.5 0 0 1 4.5 0h7a.5.5 0 0 1 .5.5c0 .68-.342 1.174-.646 1.479-.126.125-.25.224-.354.298v4.431l.078.048c.203.127.476.314.751.555C12.36 7.775 13 8.527 13 9.5a.5.5 0 0 1-.5.5h-4v4.5c0 .276-.224 1.5-.5 1.5s-.5-1.224-.5-1.5V10h-4a.5.5 0 0 1-.5-.5c0-.973.64-1.725 1.17-2.189A5.921 5.921 0 0 1 5 6.708V2.277a2.77 2.77 0 0 1-.354-.298C4.342 1.674 4 1.179 4 .5a.5.5 0 0 1 .146-.354z" />
                </svg>
                <p className="text-gray-80 font-light text-xl">
                  {userData.address}
                </p>
              </div>
            </div>
          </div>
          <><img src={userData.contactUrl} alt="avatar"
            className="hidden md:max-w-sm md:block" />
          </>
        </div>
        {/* <button onClick={() => { saveOnClick() }}>save</button> */}
      </div>
    </section>
  );
}
