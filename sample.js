var fs = require('fs');

try{
    fs.mkdirSync('Website');
    console.log('Directory created!');
} catch(err){

    if(err.code == 'Error')
    {
        console.log('The directory already exist');
    }
    else{
        console.log(err);
    }
}
