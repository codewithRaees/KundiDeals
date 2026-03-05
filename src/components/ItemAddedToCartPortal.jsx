


const ItemAddedToCartPortal = ({ message }) => {
 
  
   
  return (
   
     <div className={`absolute bottom-16 left-1/2 -translate-x-1/2 
                     text-white px-3 py-1 rounded-lg 
                    text-sm shadow-lg animate-bounce ${message?.toLowerCase().trim().includes("added") ? "bg-green-600" : "bg-red-600"}`}>
     {message}
    </div>
  )
}

export default ItemAddedToCartPortal