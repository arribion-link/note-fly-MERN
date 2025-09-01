// import { Thunder } from 'lucide-react'

const RateLimitUI = () => {
  return (
      <div className='rate-limit-card'>
          <div className='rate-limit-icon'>
              {/* <Thunder/> */}
          </div>
          <div className='rate-limit-text'>
            <h1>Rate Limit Reached</h1>
            <p>You've made too many request in a short period. Please wait a moment!!</p>
            <p>Try again in a few second for the best experience.</p>
          </div>
    </div>
  )
}

export default RateLimitUI
