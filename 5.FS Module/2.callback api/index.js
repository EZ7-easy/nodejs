import * as fs from "fs"

//Create Folder

// fs.mkdir('c:\\nodejs',(err)=>{
// 	if(err) throw err
// 	console.log("nodejs folder created")
// })


//Read Files from Folder

// fs.readdir('c:\\nodejs', (err, files) => {
// 	for (const file of files) {
// 		console.log(file)
//      }
// 	if (err) {
// 		console.log(err)
// 	}
// })


//Remove Folder

// fs.rmdir('c:\\nodejs\\home', (err) => {
// 	if (!err) {
// 		console.log("nodejs folder was deleted")
// 	}else {
// 		console.log(err)
//
// 	}
// })


//Create File and write smth in File

// fs.writeFile('c:\\nodejs\\hello.txt', 'Hello NodeJS', (err) => {
// 	if (!err) {
// 		console.log("File created")
// 	} else {
// 		console.log(err)
// 	}
// })


//Read data in File

// fs.readFile('c:\\nodejs\\hello.txt', (err, data) => {
// 	if (!err) {
// 		console.log(data.toString())
// 	} else {
// 		console.log(err)
// 	}
// })


//Add data to File

// fs.appendFile('c:\\nodejs\\hello.txt', 'M1les and マイル', (err) => {
// 	if (!err) {
// 		console.log("Data was added to File")
// 	} else {
// 		console.log(err)
// 	}
// })


//Copy file

// fs.copyFile('c:\\nodejs\\hello.txt', 'c:\\nodejs\\clonedHello.txt', (err) => {
// 	if (!err) {
// 		console.log("Copied file")
// 	} else {
// 		console.log(err)
// 	}
// })


//Get information about file

// fs.stat('c:\\nodejs\\hello.txt', (err, stats) => {
// 	if (!err) {
// 		console.log(stats.isFile())
// 		console.log(stats.isDirectory())
// 	} else {
// 		console.log(err)
// 	}
// })
