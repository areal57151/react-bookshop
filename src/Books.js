import { data } from "./data";


function Books ({itemsForSale}) {
   return( <div>
    {itemsForSale.map((element => {
        const {id,image, name, genre, price} = element;
        return(
         <div>
          <p>{id}</p>
           <img src={`${data.image}.jpg`} alt="foto"/>
           <p>{name}</p>
           <p>{genre}</p>
           <p>{price} </p>

         </div>
        )
      }))}
    </div>)  
}
export default Books;