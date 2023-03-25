const fs= require('fs')

fs.readFileSync('./hsjdks/hjbsk.txt', 'utf8')
//this will read the text file

fs.writeFileSync('./hsjdks/hjbsk.txt', 'new replaced text')

fs.readFile('./hjss/file.txt','utf8', (err, result)=>{
    if(err){
        console.log(err)
    }
    console.log(result)
})