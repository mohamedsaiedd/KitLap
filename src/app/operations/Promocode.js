
import React, { useEffect, useState } from "react"


const Promocode = ({ sum }) => {

    const [kitpromocode, setPromocode] = useState([])
    const [userPromocode, setPromocodeuser] = useState({})

    // setPromocodeuser(userPromocode);

    let finalPrice = 0;
    const checkPromocode = () => {

        for (let promocodeKey of Object.keys(kitpromocode)) {
            if (promocodeKey == userPromocode) {
                finalPrice = sum * kitpromocode[promocodeKey] / 100
                console.log(kitpromocode[promocodeKey]);
                return finalPrice
            }
            else {
                return "invalid promocode"
            }
        }

    }




    useEffect(() => {

        const url = "https://api.npoint.io/936050ffe8d488fcad58/promocode"

        const fetchData = async () => {

            const response = await fetch(url);
            const data = await response.json();

            // const data = JSON.parse(data1)
            setPromocode(data);

        };
        fetchData();

    }, []);

    return (
        <div className="promocode">
            {/* promocode */}
            <form>
                <input type="text" placeholder="Promocode" onChange={(e) => setPromocodeuser(e.target.value)} />
                <button type="button" onClick={checkPromocode} className="Promocodebtn"> Apply</button>
            </form>
            <p>{checkPromocode()}</p>

        </div>
    );
}
export default Promocode