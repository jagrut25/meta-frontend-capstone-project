import React from 'react';
import recipes from '../recipes';
import Swal from 'sweetalert2';


const Menu = () => {

    const handleOrder = (id) => {
        console.log(id,"id is clicked");
        Swal.fire({
            title: "Are You Sure?",
            text:"You won't be able to revert this!",
            icon:'warning',
            showDenyButton: true,
            confirmButtonText: "Yes, Order it!",
            denyButtonText: `Cancel`
          }).then((result) => {
            
            if (result.isConfirmed) {
              Swal.fire("Order Placed Successfully!", "", "success");
            } else if (result.isDenied) {
              Swal.fire("Order canceled!", "", "info");
            }
          });

    }   

    return (
        
        <div className='menu-container'>
            <div className='menu-header'>
                <h2> This weeks specials!</h2>
                
            </div>
            <div className='cards'>
                {
                    recipes.map(recipe => <div key={recipe.id} className='menu-itmes'>
                        <img src={recipe.image} alt=''  />
                        <div className='menu-content'>
                            <div className='heading '>
                                <h5>{recipe.title}</h5>
                                <p>{recipe.price}</p>
                            </div>
                            <p>{recipe.description}</p>
                            <button className='orderBtn' onClick={() => handleOrder(recipe.id)}>Order Now</button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    
)
}

export default Menu;