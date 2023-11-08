import { useNavigate } from "react-router-dom"

function DemoBtn() {
	
	const navigate = useNavigate()

  return (
    <button
			role="button"
			className='self-center border py-2 md:mt-2 px-6 rounded text-black font-semibold bg-gradient-to-r from-william-300 to-william-500 hover:text-white hover:cursor-pointer'
			onClick={ ()=>{ navigate("/script/demo") }}
		>
			Check the Demo
		</button>
  )
}

export default DemoBtn
