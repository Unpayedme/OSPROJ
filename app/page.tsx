import Image from "next/image";
import { Button } from "@/components/ui/button"
import { Facebook,Discord,Linkedin,Twitter } from "@deemlol/next-icons";

export default function Home() {
  return (
    <div className="w-full h-[90%] flex flex-row items-center justify-center bg-[#0a0d12]">
      <div className=" w-[50%] h-full flex flex-row items-center justify-center pl-100">
        <img className="border-4 rounded-full border-red-500 w-100 h-100 bg-white" src="/b.jpg" alt="profile pic" width={100} height={100}/>

      </div>
      <div className=" w-[55%] h-full flex items-center ">
        <div className="w-[80%] h-[40%]">
          <p className="text-white text-[40px]">Hi I'm John Vincent Sefuesca</p>
          <br />
          <p className="text-white text-xl">I’m a web developer with a passion for turning ideas into interactive, user-friendly digital experiences. I specialize in building responsive, efficient, and visually appealing websites using technologies like HTML, CSS, JavaScript, and modern frameworks such as React and Node.js.</p>
          <br />
          <Button variant="link" className="border-1 border-white text-white text-xl mr-10">CONTACT</Button>
          <Button variant="link" className="border-1 border-white text-white text-xl">ABOUT ME</Button>
          <br />
          <br />
          <div className="flex flex-row gap-5"> 
            <Facebook size={35} color="#FFFFFF" />
            <Discord size={35} color="#FFFFFF" />
            <Linkedin size={35} color="#FFFFFF" />
            <Twitter size={35} color="#FFFFFF" />
          </div>
        </div>
      </div>
    </div>
  );
}
