
import Buttons from "./buttons"

const Header = () => {
  return (
    <div className='flex justify-between px-[50px] py-[20px] bg-amber-400'>

      <div >
        <img src="" alt="" />
        <ul className='flex gap-8'>
            <li><a href="">Save </a></li>
            <li><a href="">Invest</a></li>
            <li><a href="">stories</a></li>
            <li><a href="">FAQs </a></li>
            <li><a href="">Resourses</a></li>
        </ul>
      </div>

      <div className="flex gap-[20px]">
      <Buttons  button="Sign in" /> 
      <Buttons  button="Create free account"/> 
      </div>
    </div>
  )
}

export default Header
