import React from "react";

const Shopping = () => {
    return ( 
        <nav>
            <div className="nav_box">
                <span className="my_shop"> My Shoping</span>
                <div className="cart">
                    <span>
                    <i class="fa-solid fa-cart-plus"></i>
                    </span>
                    <span>0</span>
                </div>
            </div>
        </nav>
     );
}
 
export default Shopping;