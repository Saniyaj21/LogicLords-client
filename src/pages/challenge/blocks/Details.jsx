import './Details.scss'

export default function Details({item}) {
  return (
    <div className='details_conatiner nunito-4'>
      <div className='description_text nunito-8'>
        Description
      </div>
      <div className='description_details nunito-4'>
     <p>{item.detsilsDes}</p>
      </div>

      <div className='resource_text nunito-8'>
        Resources
      </div>

      <div className='design nunito-6'>
        Design: <img src={item.design} alt=" logo"  className='design_logo'/>
      </div>
      <div className='live_url nunito-6'>
        Live Url: {item.liveUrl}
      </div>
    </div>
  )
}
