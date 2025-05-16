

function twoSum(number, target)
{
	for (let i = 0;  i < number.length; i++)
	{
		for (let j = i + 1; j < number.length; j++)
		{
			if ((number[i] + number[j]) == target)
			{
				return [i, j]
			}
		}
	}
	return ("pas de combinaison possible avec ces valeurs")
}

const numbers = [2, 7, 11, 15];
const target = 9;

const numbers2 = [3, 2, 4]
const target2 = 6

const numbers3 = [3, 3]
const target3 = 6

const numbers4 = [3, 2]
const target4 = 4

console.log(twoSum(numbers, target));
console.log(twoSum(numbers2, target2));
console.log(twoSum(numbers3, target3));
console.log(twoSum(numbers4, target4));