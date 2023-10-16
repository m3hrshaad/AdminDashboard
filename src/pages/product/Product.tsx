import { Single } from "../../components/single/Single"
import { singleProduct } from "../../data"
import "./product.scss"


export const Product = () => {

    // Fetch Data and send to the single component
  return (
    <div className="product">
        <Single {...singleProduct}/>
    </div>
  )
}
