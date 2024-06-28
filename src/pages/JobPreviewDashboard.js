import React from "react";
import Header from "../components/Header";
import JobInsights from "../components/JobInsights";
import { FaCircle, FaCoins } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";

const JobPreviewDashboard = () => {
  return (
    <>
      <div className="relative">
      <div>

        <div>
          <div className="w-full py-2 border-b-[1px] border-[#D9D9D9]">
            <div className="w-[623px] mx-20 my-5 pl-2 space-y-1">
              <div className="flex flex-col md:flex-row md:items-center justify-between space-y-2 md:space-y-0 mb-5">
                <div className="flex space-x-3 md:flex-col lg:flex-row">
                  <div className="flex-shrink-0">
                    <h1 className="text-[#3D3D3D] font-semibold md:text-[27px] lg:text-[30px] generalSans">
                      Senior Product Designer
                    </h1>
                  </div>
                  <div className="flex items-center space-x-2 md:pt-1 lg:pt-0 md:self-start lg:self-center ">
                  <span class="hidden lg:block self-center rounded-full h-1 w-1 bg-[#D1D1D1]"></span>
                    <h4 className="text-[13px] text-[#888888] generalSans font-medium">posted 2 days ago</h4>
                    <div className="flex items-center space-x-1 bg-[#ECFDF3] rounded-full border-[1px] border-[#ABEFC6] px-2 py-1">
                    <span class="self-center rounded-full h-1.5 w-1.5 bg-green-600"></span>
                      <h4 className="text-[#067647] text-[10px] generalSans font-medium">Open</h4>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:space-x-4 text-center md:text-left items-center md:items-start lg:text-[18px] md:text-[14px]">
                <div className="flex items-center space-x-1">
                  <FiMapPin className="text-[#5D5D5D] mr-1" size={19}/>
                  <h2 className="generalSans font-medium text-[#5D5D5D] ">Delaware, USA</h2>
                </div>
                <span class="self-center rounded-full h-1 w-1 bg-[#D1D1D1]"></span>
                <div className="flex items-center space-x-1">
                  <FaCoins className="text-[#5D5D5D] mr-1" size={19} />
                  <h2 className=" generalSans font-medium text-[#5D5D5D]">$300k-$400k</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

      <div className="pl-[88px] mr-72 pr-10 min-[1100px]:pr-40 min-[1300px]:pr-96 py-7 flex generalSans border-b border-b-1 border-[#D9D9D9]">
      <div className="mr-20">
        <div>
          <h1 className="text-[#6E6D6D] text-[12px] font-medium">Skills Required</h1>
        </div>
        <div className="py-1 space-y-2">
          <div className="flex items-center border-[1px] border-[#D0D5DD] rounded-md w-fit px-1">
            <img
              src="https://www.pngall.com/wp-content/uploads/13/Figma-Logo-PNG-Image.png"
              alt=""
              className="w-[20px] h-[20px]"
            />
            <h1 className="text-[#344054] text-[11px] font-medium">Figma</h1>
          </div>
          <div className="p-1 h-[24px] flex items-center border-[1px] border-[#D0D5DD] rounded-md">
            <img
              src="https://th.bing.com/th/id/OIP.4YvSN4vCvED1popDk_WQEgHaHO?rs=1&pid=ImgDetMain"
              alt=""
              className="w-[15px] h-[15px] pl-[2px]"
            />
            <h1 className="text-[#344054] text-[11px] font-medium ml-1 min-w-24">Adobe Illustrator</h1>
          </div>
          <div className="p-1 h-[24px] flex border-[1px] border-[#D0D5DD] rounded-md w-fit">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Adobe_XD_CC_icon.svg/1200px-Adobe_XD_CC_icon.svg.png"
              alt=""
              className="w-[15px] h-[15px] pl-[2px]"
            />
            <h1 className="text-[#344054] text-[11px] font-medium ml-1">Adobe XD</h1>
          </div>
        </div>
      </div>

      <div className="grid min-[1300px]:grid-cols-3 md:grid-cols-2 justify-between md:gap-8 w-[2000px] md:ml-7">
      <div className=" flex flex-col items-start">
        <h1 className="text-[12px] text-[#6E6D6D] font-medium mb-1 min-w-28">Preferred Language</h1>
        <h2 className="text-[14px] text-[#3D3D3D] font-semibold">English</h2>
      </div>

      <div className=" flex flex-col items-start">
        <h1 className="text-[12px] text-[#6E6D6D] font-medium mb-1 min-w-28">Type</h1>
        <h2 className="text-[14px] text-[#3D3D3D] font-semibold">Full time</h2>
      </div>

      <div className="flex flex-col items-start ">
        <h1 className="text-[12px] text-[#6E6D6D] font-medium mb-1 min-w-28">Years of Experience</h1>
        <h2 className="text-[14px] text-[#3D3D3D] font-semibold min-w-40">3+ Years of Experience</h2>
      </div>
      </div>

    </div>

    {/* ---------------------------JOB DESCRIPTION-------------------- */}
    <div className=" md:pl-[88px] mt-6 pb-10 flex flex-col justify-between generalSans border-b border-b-1 border-[#D9D9D9]">
      <div className="w-full text-[12px] lg:text-[15px] ">
        <h2 className="text-[13px] text-[#6E6D6D] font-medium mb-2">About the job</h2>
        <ol className="list-decimal list-inside  text-[#3D3D3D]  font-medium leading-6">
          <li className="">Handle the UI/UX research design</li>
          <li>Work on researching on latest web applications designs & trends</li>
          <li>Work on conceptualizing and visualizing</li>
          <li>Work on creating graphics content and other graphic related works</li>
        </ol>

        <div className="mt-1 text-[#3D3D3D] font-medium">
          <h3 className="font-medium">Benefits:</h3>
          <ul className="list-disc pl-7 leading-6">
            <li>Health insurance</li>
            <li>Provident Fund</li>
          </ul>
        </div>

        <div className="mt-1 text-[#3D3D3D] font-medium">
          <h3 className="font-medium">Schedule:</h3>
          <ul className="list-disc pl-7 leading-6">
            <li>Day shift</li>
          </ul>
        </div>

        <div className="mt-1 text-[#3D3D3D] font-medium">
          <h3 className="font-medium">Supplemental pay types:</h3>
          <ul className="list-disc pl-7 leading-6">
            <li>Performance bonus</li>
            <li>Yearly bonus</li>
          </ul>
        </div>

        <div className="flex justify-start text-[#3D3D3D]  font-medium">
          <h3 className="font-medium mr-1">Work Location: </h3>
          <p>In person</p>
        </div>
      </div>
    </div>

    {/* --------------------COMPANY DESCRIPTION-------------------- */}
    
    <div className="w-[850px] h-[271px] grid grid-cols-1 gap-y-4 md:pl-[88px] mt-10 generalSans">
      <div className="">
        <div className="w-[138px] h-[40px] flex justify-between">
          <img
            src="https://static.workventure.com/uploads/images/company/thumb/logo-atlassian-408-145.png"
            alt=""
            className="w-[40px] h-[40px] rounded-[5px]"
          />
          <div className="w-[86px] h-[27px]">
            <h1 className="text-[#4F4F4F] text-[18px] pt-1 font-medium">
              Atlassian
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full h-[195px] grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-3">
        <div className="">
          <h1 className="text-[12px] text-[#6E6D6D] font-medium">
            Company size
          </h1>
          <h1 className="text-[14px] text-[#3D3D3D] font-medium">
            1k-2k Employees
          </h1>
        </div>
        <div>
          <h1 className="text-[12px] text-[#6E6D6D] font-medium">Type</h1>
          <h1 className="text-[14px] text-[#3D3D3D] font-medium">Private</h1>
        </div>

        <div>
          <h1 className="text-[12px] text-[#6E6D6D] font-medium">Sector</h1>
          <h1 className="text-[14px] text-[#3D3D3D] font-medium">
            Information Technology, Infrastructure
          </h1>
        </div>
        <div>
          <h1 className="text-[12px] text-[#6E6D6D] font-medium">Funding</h1>
          <h1 className="text-[14px] text-[#3D3D3D] font-medium">
            Bootstrapped
          </h1>
        </div>

        <div>
          <h1 className="text-[12px] text-[#6E6D6D] font-medium">Founded In</h1>
          <h1 className="text-[14px] text-[#3D3D3D] font-medium">2019</h1>
        </div>
        <div>
          <h1 className="text-[12px] text-[#6E6D6D] font-medium">Founded By</h1>
          <span>          <a
            className="text-[14px] text-[#3D3D3D] font-medium"
            href="https://www.google.com/search?sca_esv=2e8a42a989b18c72&sca_upv=1&sxsrf=ADLYWIJfOan6Il30oG_UZfuOgWJJQyy6jw:1718807486320&q=Scott+Farquhar&si=ACC90nwLLwns5sISZcdzuISy7t-NHozt8Cbt6G3WNQfC9ekAgGn2U5_lv-iJKoEW9GGV3oQ_U1KzHM3grBvdDJw8AP9jrnXyCRK6qNSYCb3jHdJP2aGUh_HIEtaCjacARkKoOWECb-5Ob0Mv9e_MI4c_vMY8PVDZWA6-OO6yqvbV1TIRgm4P4FtNTbK6rHh3ojk0CXz_ZgaKdVf6VpRiXhZ7YUAy8LzI5HMyryDEBGhju5Ama_FvECG7_qGa4tSKw7XIbHa99s9btrbgRBy-6z85_2p6BPYPhA%3D%3D&sa=X&sqi=2&ved=2ahUKEwip7KLt8OeGAxVBRmwGHTGjBGsQmxMoAXoECDYQAw"
          >
            Scott Farquhar
          </a></span>
          <span>
          <a
            className="text-[14px] text-[#3D3D3D] font-medium"
            href="https://www.google.com/search?sca_esv=2e8a42a989b18c72&sca_upv=1&sxsrf=ADLYWIJfOan6Il30oG_UZfuOgWJJQyy6jw:1718807486320&q=Mike+Cannon-Brookes&si=ACC90nwLLwns5sISZcdzuISy7t-NHozt8Cbt6G3WNQfC9ekAgJsvrQUWPOKZ8iETJQdvnbU2UFD7BVWUbHmvxqkn_X6fnbX-LLuIjmm9FYDOCdLoN8dDFvHE1HsZUhT6XIGTrbZRGGDIDstquY_yluK6YQX1NkHtmo0wsp8wVD7ouAbjfDvaQHjO4Iyd2AKnCQbPH8-Ah5otgNPwHcJ39HScqiWv6SVxYRXUiznwfdbns6uKnydurua8JyyTlcxFT3lPFMTAfAAzqy-x0DxflUh6aHFtCEgFOChGuNdxmDlND1wruAK7SbM%3D&sa=X&sqi=2&ved=2ahUKEwip7KLt8OeGAxVBRmwGHTGjBGsQmxMoAnoECDYQBA"
          >
            , Mike Cannon-Brookes
          </a> 
          </span>

        </div>
      </div>
    </div>
    </div>

        {/*-----------------------SIDE PANEL----------------------------------------- */}

        <div className="absolute right-0 top-0 py-8 w-[300px] lg:w-[360px] h-full border-l border-l-2 boder-gray-200  bg-white">
          <JobInsights />
        </div>
      </div>
    </>
  );
};

export default JobPreviewDashboard;
