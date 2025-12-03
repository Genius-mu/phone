import {
  Apple,
  ArrowLeft,
  BatteryFull,
  Facebook,
  LucideVolleyball,
  Wifi,
} from "lucide-react";

const Calculus = () => {
  return (
    <>
      <section className="w-[19em] h-[33em] rounded-4xl bg-[url(/img/img1.jpg)] bg-[rgba(0,0,0,.9)] bg-blend-darken shadow-2xl flex flex-col justify-between p-2 border-5 border-black items-center gap-3 text-white">
        <div className="flex justify-between items-center h-[2em] w-[80%] px-3">
          <span>
            <h3 className="text-sm font-bold">9:20</h3>
          </span>
          <span className="flex gap-x-2">
            <Wifi className="w-4 h-4 text-white" />
            <BatteryFull
              fill="white"
              className="w-6 h-5 text-white"
              strokeWidth={3}
            />
          </span>
        </div>
        <div className="h-full items-center w-full flex flex-col px-2 justify-between">
          <span className="w-full">
            <ArrowLeft className="w-6 h-5 text-white" strokeWidth={2} />
          </span>
          <div className="flex flex-col justify-center w-full items-center gap-4">
            <div className="flex flex-col justify-center w-full items-center gap-10">
              <div className="w-full flex flex-col justify-center gap-2 items-center">
                <h2 className="font-bold text-5xl">Calculus</h2>
                <p className="text-[15px] text-white/80">
                  The anything app for calculus
                </p>
              </div>

              <span className="w-full flex flex-col gap-2">
                <button className="flex justify-center gap-2 bg-white/5 border border-white/10 cursor-pointer py-2 items-center w-full rounded-3xl">
                  <Apple className="w-6 h-5" fill="white" />
                  Continue with Apple
                </button>
                <button className="flex justify-center gap-2 bg-white/5 border border-white/10 cursor-pointer py-2 items-center w-full rounded-3xl">
                  <LucideVolleyball className="w-6 h-5" />
                  Continue with Google
                </button>
                <button className="flex justify-center gap-2 bg-white/5 border border-white/10 cursor-pointer py-2 items-center w-full rounded-3xl">
                  <span className="py-1 px-1 bg-blue-600 rounded-[50%]">
                    <Facebook
                      className="w-4 h-4"
                      strokeWidth={0}
                      fill="white"
                    />
                  </span>
                  Continue with Facebook
                </button>
              </span>
            </div>
            <p className="text-white/80 text-center text-[11px] max-w-[200px]">
              By continuing you agree to the{" "}
              <a href="" className="underline">
                Terms and Service
              </a>{" "}
              and{" "}
              <a href="" className="underline">
                Privacy Policy
              </a>
            </p>
          </div>
          <span className="bg-white h-[5px] w-[5em] rounded-2xl"></span>
        </div>
      </section>
    </>
  );
};

export default Calculus;
