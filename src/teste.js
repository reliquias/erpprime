const fs = require("fs");


var path = 'C:\\Users\\u0180507\\Downloads\\lixo\\xfrade01\\';

fs.readdir(path, (err, files) => {
  files.forEach((file, index) => {
    var extension = ".jpg";
    console.log(path + `${file}`)


    fs.copyFile(path + `${file}`, path + `${index}.${extension}`, function (err, result) {
      if (err) console.log('error', err);
    });


  })
})
