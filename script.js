// function decimalToBinary(num){
//     let binaryStr = ""
//     while(num>0){
//         let rem = num%2;
//         binaryStr = binaryStr + rem.toString()
 
//         num = Math.floor(num/2)
//     }
  
//     return binaryStr.split("").reverse().join("")
// }
 
// module.exports = decimalToBinary;
function threeSum(arr, target) {
// write your code here
	let diff = Number.MAX_SAFE_INTEGER;
	let ans;
	for(let i=0; i<arr.length-2; i++) {
		for(let j=i+1; j<arr.length-1; j++) {
			for (let k = j+1; k <arr.length; k++) {
				let sum = arr[i]+arr[j]+arr[k];
				if(Math.abs(target-sum)<diff) {
					ans = sum;
					diff = Math.abs(target-sum);
				}
			}
		}
	}
	return ans;
}

module.exports = threeSum;
