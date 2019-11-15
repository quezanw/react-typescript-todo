export const generateString = (): string => {
  let alphabet = "abcdefghijklmnopqrstuvxyz";
  let nums = "0123456789";
  let result = "";
  for(let i = 0; i < 5; i++) {
    let rand1 = Math.floor(Math.random() * 26)
    let rand2 = Math.floor(Math.random() * 8)
    result += alphabet[rand1] + nums[rand2];
  }
  return result;
}