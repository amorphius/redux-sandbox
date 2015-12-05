
export default function reducer1(state, action) {
    switch (action.type) {
        case 'TEST':
            console.log('#################### TEST handler from reducer 1 ###########################')
            state = state.updateIn(['log'], log => log.push(`New log from reducer 1 at ${new Date()}`))

    }
    return state
}