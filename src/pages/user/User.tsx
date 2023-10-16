import { Single } from "../../components/single/Single"
import { singleUser } from "../../data"
import "./user.scss"

export const User = () => {

     // Fetch Data and send to the single component
  return (
    <div className="user">
        <Single {...singleUser}/>
    </div>
  )
}
