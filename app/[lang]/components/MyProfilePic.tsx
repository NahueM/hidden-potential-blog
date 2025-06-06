import Image from "next/image";

function MyProfilePic() {
  return (
   <section className="w-full mx-auto">
    <Image 
    className="border-4 border-black border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
        src="/images/mario.jpeg" 
        width={200} 
        height={200} 
        alt="mario" 
        priority={true}
    />
   </section>
  )
}

export default MyProfilePic