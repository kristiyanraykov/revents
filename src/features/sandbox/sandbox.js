import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'semantic-ui-react'
import { decrement, increment} from './testReducer'

function Sandbox() {
    const dispatch = useDispatch()
    const data = useSelector(state => state.test.data)
    return (
        <div>
            <h1>Testing 1,2,3</h1>
            <h3>The data is : {data}</h3>
            <Button  onClick={() => dispatch(increment(20))} content='increment' color='green' />
            <Button  onClick={() => dispatch(decrement(10))} content='decrement' color='red' />
        </div>
    )
}

export default Sandbox