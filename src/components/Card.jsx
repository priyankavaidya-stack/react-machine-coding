import React ,{useContext} from 'react'
import { Context } from '../App.jsx'

const Card = () => {
    const { data } = useContext(Context);

    return (
    <div className='grid grid-cols-4 gap-4 mt-4 max-[650px]:grid-cols-2 max-[320px]:grid-cols-1'>
        { data?.map(({ street_address, street_name, city, state, id}) => (
                <div key={id} className='bg-emerald-400 p-3 rounded-md'>
                    <h3>
                            <span className='font-bold'>Street Address:</span>
                            {street_address}
                    </h3>
                    <h3>
                            <span className='font-bold'>Street Name: </span>
                            {street_name}
                    </h3>
                    <h3>
                            <span className='font-bold'>City: </span>
                            {city}
                    </h3>
                    <h3>
                            <span className='font-bold'>State: </span>
                            {state}
                    </h3>
                </div>
            )
        )}
    </div>
  )
}

export default Card
