import crypto, { BinaryToTextEncoding } from 'crypto';



export function encodeToSHA256Base64(inputString: string): any {
  const algorithm = 'sha256';
  const hash = crypto.createHash(algorithm);

  hash.update(inputString);


  const digest = hash.digest('hex'); // hash.digest(encoding: 'base64' || 'hex')
  return digest
}


const hash = encodeToSHA256Base64('some data');
const hashString = String(hash);
console.log(hash.length);

