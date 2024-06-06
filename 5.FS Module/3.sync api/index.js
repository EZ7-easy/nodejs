import * as fs from "fs"

//Create Folder

// fs.mkdirSync('c:\\nodejs\\hello', {recursive: true})


//Read File from Folder

// try {
//     const files = await fs.readdirSync('c:\\nodejs')
//     for (const file of files) {
//         console.log(file)
//     }
// }
// catch (error) {
//     console.log(error)
// }


//Remove Folder

// try {
//     await fs.rmdirSync('c:\\nodejs\\home');
//     console.log("nodejs folder removed")
// }
// catch (error) {
//     console.log(error)
// }


//Create File and write smth in File

// try {
//     await fs.writeFileSync('c:\\nodejs\\hello.txt', 'Hello World')
//     console.log("File created")
// }
// catch (error) {
//     console.log(error)
// }


//Read data from File

// try {
//     const data = await fs.readFileSync('c:\\nodejs\\hello.txt', 'utf8')
//     console.log(data)
// }
// catch (error) {
//     console.log(error)
// }


//Add data to File

// try {
//     await fs.appendFileSync('c:\\nodejs\\hello.txt', 'Hello マイル')
//     console.log("Data was added to File")
// }
// catch (error) {
//     console.log(error)
// }


//Copy file
// try {
//     await fs.copyFileSync('c:\\nodejs\\hello.txt', 'c:\\nodejs\\copiedHello.txt')
//     console.log("File was copied")
// }
// catch (error) {
//     console.log(error)
// }


//Get information about file

// try {
// 	const stats = await fs.stat('c:\\nodejs\\hello.txt')
// 	// console.log(stats)
// 	console.log(stats.isFile())
// 	console.log(stats.isDirectory())
// }
//
// catch (error) {
// 	console.log(error)
// }