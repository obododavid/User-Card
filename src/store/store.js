import {createStore} from 'redux'
import reducer from '../reducers/reducer'

const initialState ={
	name: "Obodo David",
    description: "Software Engineer, Speaker, Bass Guitarist and Fitness Coach",
    likes: "Cats, Wine, and Black dresses",
    location: "localhost"
}

export const store = createStore(reducer, initialState)