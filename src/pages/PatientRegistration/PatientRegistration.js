import * as React from "react";

const PatientInfo = ({ name, gender, dob, email, phone }) => (
    <div className="flex gap-4 pt-2 pr-1.5 pb-4 pl-4 mt-6 text-base rounded-md border-sky-800 border-solid border-[3px] text-slate-900">
        <img src="{{ext_18}}" alt="Patient avatar" className="shrink-0 my-auto aspect-[1.02] w-[49px]" />
        <div className="flex flex-col grow shrink-0 basis-0 w-fit">
            <div className="flex gap-5 justify-between items-start">
                <div className="flex flex-col mt-3">
                    <div className="whitespace-nowrap">{`${name} - ${gender}`}</div>
                    <div className="mt-1.5">{dob}</div>
                </div>
                <img src="{{ext_19}}" alt="Edit icon" className="shrink-0 w-6 aspect-square" />
            </div>
            <div className="mt-2">{email}</div>
            <div className="mt-2">{phone}</div>
        </div>
    </div>
);

const StepIndicator = ({ steps }) => (
    <div className="flex gap-0 self-center mt-3">
    {steps.map((active, index) => (
      <React.Fragment key={index}>
        <div className="flex flex-col justify-center basis-0">
          <div className={`flex flex-col justify-center items-center px-2.5 w-8 h-8 rounded-full ${active ? 'bg-blue-400' : 'bg-gray-400'}`}>
            <div className={`shrink-0 ${active ? 'w-3.5 h-3.5' : 'h-3.5'} rounded-full bg-blue-950`} />
          </div>
        </div>
        {index < steps.length - 1 && (
          <div className="shrink-0 my-auto h-px border border-solid bg-slate-900 border-slate-900 w-[65px]" />
        )}
      </React.Fragment>
    ))}
  </div>
);

const PatientRegistration = () => {
    const steps = [true, true, false, false];
  
    return (
      <div className="flex flex-col mx-auto w-full bg-white max-w-[480px]">
        <header className="flex gap-5 justify-between px-5 py-6 w-full bg-sky-600">
          <div className="flex flex-1 gap-3">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/143d32b04086a23672ad5ad586e703f16d99d0474ce35294e9205f2e744cbf5d?apiKey=72ddffbbca3c46ef89dd86c4ca9b4252&" alt="Logo 1" className="shrink-0 my-auto aspect-[1.03] w-[31px]" />
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d0e7abc52d06db81b02c7cbc461542f9e533752e4bfba4a5dd323ad5fb23ee2f?apiKey=72ddffbbca3c46ef89dd86c4ca9b4252&" alt="Logo 2" className="shrink-0 aspect-[1.05] w-[42px]" />
          </div>
          <div className="flex flex-1 gap-5 my-auto">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/06fad8648f9cb112ff246d6ae0a67b97ecabf577b353c55d1f1086dd3036e3de?apiKey=72ddffbbca3c46ef89dd86c4ca9b4252&" alt="Icon 1" className="shrink-0 aspect-[1.11] w-[29px]" />
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/b0a56cde1d2d9af54a4b874cd72a5c35a4b0bc013db628ac9be4993fe839f45d?apiKey=72ddffbbca3c46ef89dd86c4ca9b4252&" alt="Icon 2" className="shrink-0 self-start aspect-square w-[25px]" />
          </div>
        </header>
        <main className="flex flex-col px-5 mt-14 w-full">
          <div className="flex gap-5 justify-between text-sm font-medium tracking-wide text-center uppercase whitespace-nowrap text-slate-900">
            <div className="grow">Patient</div>
            <div>Reason</div>
            <div>Timeslot</div>
            <div className="grow">Confirm</div>
          </div>
          <StepIndicator steps={steps} />
          <h1 className="self-center mt-9 text-2xl font-semibold text-center text-slate-900">
            What patient is seeking treatment today?
          </h1>
          <PatientInfo
            name="Ashley Williamson"
            gender="F"
            dob="January 1, 1985"
            email="ashleywilliamson@m.com"
            phone="555-555-5555"
          />
          <div className="flex gap-1.5 items-center mt-3.5 text-base whitespace-nowrap text-slate-900">
            <div className="shrink-0 self-stretch my-auto h-px bg-gray-500 border border-gray-500 border-solid w-[156px]" />
            <div className="self-stretch">OR</div>
            <div className="shrink-0 self-stretch my-auto h-px bg-gray-500 border border-gray-500 border-solid w-[162px]" />
          </div>
          <button className="flex gap-2 mt-3.5 text-base font-medium text-slate-900">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/1dba75a4e1fdf09c4f6e0afad5d05a43e815d8009d398bfb7cfe1942fca4888d?apiKey=72ddffbbca3c46ef89dd86c4ca9b4252&" alt="Add icon" className="shrink-0 w-6 aspect-square" />
            <span className="flex-auto">Register a Dependent</span>
          </button>
          <button className="justify-center items-center px-16 py-4 mt-14 text-sm font-medium tracking-wide text-white uppercase whitespace-nowrap bg-sky-800 rounded-md">
            next
          </button>
          <button className="justify-center items-center px-16 py-4 mt-5 text-sm font-medium tracking-wide text-sky-800 uppercase whitespace-nowrap rounded-md border border-sky-800 border-solid">
            back
          </button>
        </main>
        <footer className="flex justify-center items-center px-16 py-6 mt-24 w-full bg-slate-900">
          <div className="flex gap-2.5">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef0234a9086fba730d6af3bc3af4577c2bb0ff2bb711dbb4c5992842beff5a52?apiKey=72ddffbbca3c46ef89dd86c4ca9b4252&" alt="Footer logo 1" className="shrink-0 self-start w-9 aspect-[1.03]" />
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/a1bc7125ed76b4e136bab63ad7879a8c2743a4763d7add0199896233d8aca047?apiKey=72ddffbbca3c46ef89dd86c4ca9b4252&" alt="Footer logo 2" className="shrink-0 w-9 aspect-square" />
          </div>
        </footer>
      </div>
    );
  };

export default PatientRegistration;