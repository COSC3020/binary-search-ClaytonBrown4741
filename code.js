function splitAndSearch(list, element, begin, end)
{
	//console.log(list)
	if (begin > end){
	//	if (list[begin]==element)
	//		return begin
//		else
        	return -1;
	}
        var mid = Math.floor((begin+end)/2)
	//console.log(element)
	if (list[mid] == element){
		if (mid==0)
	//		console.log(mid)
			return mid;
		while (list[mid-1]==list[mid]){
                	mid = mid - 1
			if (mid==0)
	//			console.log(mid)
				return mid;
		}
	//	console.log(mid)
		return mid;
	}
	else{
		if (element > list[mid]){
			return splitAndSearch(list,element, mid+1, end);
		}
		else{
			return splitAndSearch(list,element, begin, mid-1);
		}
	}
}   

function binarySearch(list, element) {
	var a = splitAndSearch(list, element, 0, list.length-1)
	return a
}

var a = binarySearch([1,0,0], 1)
console.log(a)
