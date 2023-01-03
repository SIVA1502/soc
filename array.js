const friends=[
    {
        name:'barry',species:'bear'
    },
    {
        name:'anthony',species:'anteater'
    }
];

const myBest=friends.find(function(friend){
    return friend.name=='barry';
});

console.log('the data of given name is:',myBest);
const myBestInd=friends.findIndex(function(friend){
    return friend.name=='barry'
});

console.log('the index of given name is:',myBestInd);