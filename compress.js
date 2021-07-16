/* 
    author: Aman Kharbanda
    Youtube : https://www.youtube.com/amankharbanda14
    
    Thanks for visiting my channel and Subscribe for more upcoming videos. :D
*/
var fs = require("fs"),
    zlib = require("zlib"),
    filename= "./db2.csv.gz",
    compress = zlib.createGzip(), // compress
    decompress = zlib.createGunzip(), // decompress
    readstream = fs.createReadStream(filename);
function compressfile(filename){
    var newfilename = filename+".gz",
        writestream = fs.createWriteStream(newfilename);
    readstream.pipe(compress).pipe(writestream);
}
function decompressfile(filename){
    var newfilename = filename.replace(".gz",""),
        writestream = fs.createWriteStream(newfilename);
    readstream.pipe(decompress).pipe(writestream);
    
}
if(/.gz$/i.test(filename)==true){
    decompressfile(filename)
}
else {
    compressfile(filename);
}