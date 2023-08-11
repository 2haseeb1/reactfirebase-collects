import React from 'react'
import { GoogleAuthProvider, getAuth } from 'firebase/auth'
import { Link } from 'react-router-dom'
const Login58 = () => {
    const auth = getAuth()
    const provider = new GoogleAuthProvider()
    const handleGoogleSignIn = () => {
        console.log("google added")
    }
  return (
    <div>
      <Link onClick={handleGoogleSignIn} className='btn btn-neutral'>Google login</Link>
    </div>
  )
}
/*<button className="btn">Button</button>
<button className="btn btn-neutral">Neutral</button>
<button className="btn btn-primary">Primary</button>
<button className="btn btn-secondary">Secondary</button>
<button className="btn btn-accent">Accent</button>
<button className="btn btn-ghost">Ghost</button>
<button className="btn btn-link">Link</button> */
export default Login58
