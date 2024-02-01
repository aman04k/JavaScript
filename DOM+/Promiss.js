let meraPromiss=new Promiss(function(resolve, reject)
{
    setTimeout(function()
    {
        console.log('I am inside');
    }, 5000);
    resolve(2022);
});
console.log('Pehla');