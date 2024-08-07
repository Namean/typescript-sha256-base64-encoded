//const crypto = require('crypto');
import crypto from 'crypto';


const randomStr = (len: number) => {
  const arr = new Uint8Array(len);
  const hash = crypto.createHash('sha256');
  hash.update(arr);
  // window.crypto.getRandomValues(arr);
  return String.fromCharCode(...toCharCodes(arr));
};

const toCharCodes = (arr: Uint8Array) => {
  const validChars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  return arr.map((x) => validChars.charCodeAt(x % validChars.length));
};

const sha256 = (message: string) => {
  const encoder = new TextEncoder();
  const data = encoder.encode(message);
  //return window.crypto.subtle.digest('SHA-256', data);
  const hash = crypto.createHash('sha256');
  hash.update(message);
  return hash;
  return String.fromCharCode(...toCharCodes(hash))
};

const bufferToBase64UrlEncoded = (input: ArrayBuffer) => {
  //const bytes = new Uint8Array(input);
  const bytes = input
  return urlEncodeBase64(window.btoa(String.fromCharCode(...bytes)));
};

const bufferToBase64UrlDecoded = (input: ArrayBuffer) => {
  const decoder = new TextDecoder();
  const data = decoder.decode(input);
  // return data;

  const bytes = new Uint8Array(input);
  // return urlEncodeBase64(window.btoa(String.fromCharCode(...bytes)));
  return data;
  // console.log(data);
};

const urlEncodeBase64 = (input: string) => {
  const chars = { '+': '-', '/': '_', '=': '' };
  return input.replace(/[\+\/=]/g, (m) => chars[m]);
};

(async () => {
  // const shaBuffer = await sha256(randomStr(32));
  // const decoded = bufferToBase64UrlDecoded(shaBuffer);

  // const input_text = 'Hello, my name is Desmond';
  const input_text = 'factory pattern';
  const shaBuffer = sha256(input_text);
  console.log(`shaBuffer: ${shaBuffer}`)
  const encoded = bufferToBase64UrlEncoded(shaBuffer);
  const encoded_input_text = bufferToBase64UrlEncoded(await sha256(input_text));

})();


export { };
