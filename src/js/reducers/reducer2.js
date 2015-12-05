
export default function reducer2(state = {}, action) {
    switch (action.type) {
        case 'TEST':
            console.log('#################### TEST handler from reducer 2 ###########################')
            state = state.updateIn(['log'], log => log.push(`New log from reducer 2 at ${new Date()}`))
    }
    return state
}