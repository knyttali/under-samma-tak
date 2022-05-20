import Link from "next/dist/client/link";

const IntroButton = () => {
    return (
      <Link href={"/FormPage"}>
        <button className="introBtn" >Anmäl ditt intresse</button>
      </Link>
      
    )
  }
  
  export default IntroButton
  