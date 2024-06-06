import * as fs from "fs/promises"
import { access, constants } from 'node:fs/promises';
import { open } from 'node:fs/promises';

//Papka yaratish or Folder yaratish

// try {
//     await fs.mkdir('c:\\nodejs\\home',{recursive: true})
//     console.log("nodejs papka yaratildi")
// }
// catch (error) {
//     console.log(error)
// }

//Papka ichidagi fileni oqish

// try {
//     const files = await fs.readdir('c:\\nodejs')
//     for (const file of files) {
//         console.log(file)
//     }
// }
// catch (error) {
//     console.log(error)
// }

//Papka ochirish or Remove Folder

// try {
//     await fs.rmdir('c:\\nodejs\\home');
//     console.log("nodejs papka ochirildi")
// }
// catch (error) {
//     console.log(error)
// }

//File yaratish va ichiga yozish

// try {
//     await fs.writeFile('c:\\nodejs\\hello.txt', 'Hello World')
//     console.log("File yaratildi")
// }
// catch (error) {
//     console.log(error)
// }

//File ichidagi datani oqish

// try {
//     const data = await fs.readFile('c:\\nodejs\\hello.txt', 'utf8')
//     console.log(data)
// }
// catch (error) {
//     console.log(error)
// }

//File ichiga data qoshish

// try {
//     await fs.appendFile('c:\\nodejs\\hello.txt', 'Hello Shuxa.de Baburello ASK250 va Blaze')
//     console.log("File ichiga data qoshildi")
// }
// catch (error) {
//     console.log(error)
// }

//Nusxa olish or Copy file

// try {
//     await fs.copyFile('c:\\nodejs\\hello.txt', 'c:\\nodejs\\copiedHello.txt')
//     console.log("File nusxa olindi")
// }
// catch (error) {
//     console.log(error)
// }

//Malumot olish or Get information about file

// try {
//     const stats = await fs.stat('c:\\nodejs\\hello.txt')
//     // console.log(stats)
//     console.log(stats.isFile())
//     console.log(stats.isDirectory())
// }
//
// catch (error) {
//     console.log(error)
// }

//Access

// try {
//     await access('c:\\nodejs\\hello.txt', constants.R_OK | constants.W_OK);
//     console.log('can access');
// } catch {
//     console.error('cannot access');
// }

//Truncate the File

// let filehandle = null;
// try {
//     filehandle = await open('hello.txt', 'r+');
//     await filehandle.truncate(4);
// } finally {
//     await filehandle?.close();
// }

//Open

// try {
// 	const stats = await fs.open('c:\\nodejs\\hello.txt')
// 	console.log('File opened')
// } catch (error) {
// 	console.log(error)
// }

// Close the file

// let filehandle;
// try {
//     filehandle = await open('hello.txt', 'r');
// } finally {
//     await filehandle?.close();
//     console.log('File closed succesfully!')
// }