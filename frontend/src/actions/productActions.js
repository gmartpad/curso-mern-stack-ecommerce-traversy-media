import axios from 'axios'

import { 
    PRODUCT_LIST_REQUEST, 
    PRODUCT_LIST_SUCCESS, 
    PRODUCT_LIST_FAIL 
} from '../constants/productConstants';

// esse async (dispatch) =>  é possivel por causa do middleware thunk sendo 
// configurado la no store.js
export const listProducts = () => async (dispatch) => {
    try {
        // envia um action de request pra actionReducer correspondente
        dispatch({ type: PRODUCT_LIST_REQUEST })

        const { data } = await axios.get('/api/products')

        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({ 
            type: PRODUCT_LIST_FAIL,
            payload: error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}