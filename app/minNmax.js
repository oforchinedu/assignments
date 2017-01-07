module.exports = {
	function findMinMax(num){
		var Min = Math.min.apply(null, num);
		var Max = Math.max.apply(null, num);
		var MinNMax = [Min,Max]
		var	equal = []
		
		for(i= 0; i < num.length; i++){
			if(num[i] == num[i+1]){
				 equal.push(num[i])
				return equal
			}
			else return MinNMax
		}
	}
}