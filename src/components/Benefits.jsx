import React from 'react'

function Benefits() {
	const size = 80
  return (
    <section className='w-full p-10	font-mono'>
			<h3 className='text-william-800 font-bold'>Benefits</h3>
			<ul className='w-full flex flex-col items-center '>
				<li className='w-3/4 flex justify-center items-center gap-5 py-5'>
					<svg className='fill-william-500' xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"><path d="M13 3h4v2h-4zM3 8h4v2H3zm0 8h4v2H3zm-1-4h3.99v2H2zm19.707-5.293-1.414-1.414L18.586 7A6.937 6.937 0 0 0 15 6c-3.859 0-7 3.141-7 7s3.141 7 7 7 7-3.141 7-7a6.968 6.968 0 0 0-1.855-4.73l1.562-1.563zM16 14h-2V8.958h2V14z"></path></svg>
					<p><strong className='text-william-700'>Time-saving</strong>: Automatic note generation and predefined templates allow sales representatives to quickly take notes and reduce time spent on administrative tasks.</p>
				</li>
					
				<li className='w-3/4 flex justify-center items-center gap-5 py-5'>
					<p><strong className='text-william-700'>Improved efficiency</strong>: By minimizing wrap-time, salespeople can make more calls and have more interactions with potential customers, increasing sales opportunities.</p>
					<svg className='fill-william-500' xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"><path d="M20 12a2 2 0 0 0-.703.133l-2.398-1.963c.059-.214.101-.436.101-.67C17 8.114 15.886 7 14.5 7S12 8.114 12 9.5c0 .396.1.765.262 1.097l-2.909 3.438A2.06 2.06 0 0 0 9 14c-.179 0-.348.03-.512.074l-2.563-2.563C5.97 11.348 6 11.179 6 11c0-1.108-.892-2-2-2s-2 .892-2 2 .892 2 2 2c.179 0 .348-.03.512-.074l2.563 2.563A1.906 1.906 0 0 0 7 16c0 1.108.892 2 2 2s2-.892 2-2c0-.237-.048-.46-.123-.671l2.913-3.442c.227.066.462.113.71.113a2.48 2.48 0 0 0 1.133-.281l2.399 1.963A2.077 2.077 0 0 0 18 14c0 1.108.892 2 2 2s2-.892 2-2-.892-2-2-2z"></path></svg>
				</li>
					
				<li className='w-3/4 flex justify-center items-center gap-5 py-5'>
					<svg className='fill-william-500' xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"><path d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm10 0h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM10 13H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm8 1h-2v2h-2v2h2v2h2v-2h2v-2h-2z"></path></svg>
					<p><strong className='text-william-700'>Personalization and consistency</strong>: Predefined templates help salespeople maintain a consistent message and ensure that all important aspects are covered during the call.</p>
				</li>
			</ul>
		</section>
  )
}

export default Benefits
