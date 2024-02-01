let meraPromise=new Promise(function(resolve, reject)
{
    setTimeout(function()
    {
        console.log('I am inside');
    }, 5000);
    resolve(2022);
    //reject(new Error('kucch error aaya hai'))
});

meraPromise.then((value) => {console.log(value)});
console.log('Pehla');