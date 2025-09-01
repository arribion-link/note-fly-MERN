import toast from "react-hot-toast"
const Details = () => {
  return (
    <div>
      <h1>details</h1>
      <button onClick={()=>{toast.success('hello')}}></button>
    </div>
  )
}

export default Details
