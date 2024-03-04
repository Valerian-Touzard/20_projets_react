const dummyApiResponse = {
    showLightDarkMode : false,
    showTicTacToeBoard: true,
    showRandomColorGenerator: true,
    showAccordian: false,
    showTreeView: true
}

const featureFlagsDataServiceCall = () =>{
    return new Promise((resolve, reject) =>{
        if(dummyApiResponse) setTimeout(() => resolve(dummyApiResponse),500);
        else reject('Some error occured! Please try again');
    })
}

export default featureFlagsDataServiceCall;