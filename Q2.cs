/*
 this problem was asked by Uber.
Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.
For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].
I don't understand this question? Someone explain to me. I'm sorry for having to bother with something simple. 
*/

using System;
					
public class Program
{
	public static void Main()
	{
		int count = 0;
		int result = 1;
		int[] finalResult = new int[400];
		int[] numbers = new int[] {1,2,3,4,5};
		foreach(int number in numbers){
			for(int x = 0 ; x < numbers.Length ; x++){
				if(number != numbers[x]){
					result = result * numbers[x];
				}
			}	
			Console.WriteLine(result);
			finalResult[count] = result;
			result = 1;
			count++;
		}	
	}
}
