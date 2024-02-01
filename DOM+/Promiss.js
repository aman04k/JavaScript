let meraPromiss=new Promiss(function(resolve, reject)
{
    setTimeout(function()
    {
        console.log('I am inside');
    }, 5000);
    //resolve(2022);
    reject(new Error('kucch error aaya hai'))
});
console.log('Pehla');