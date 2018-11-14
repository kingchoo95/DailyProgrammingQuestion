/*
This problem was asked by Amazon.
Run-length encoding is a fast and simple method of encoding strings. 
The basic idea is to represent repeated successive characters as a single count and character. 
For example, the string "AAAABBBCCDAA" would be encoded as "4A3B2C1D2A".
Implement run-length encoding and decoding. 
You can assume the string to be encoded have no digits and consists solely of alphabetic characters. 
You can assume the string to be decoded is valid.
*/

using System;
using System.Collections.Generic;
					
public class Program
{
	public static void Main()
	{
		
		int countSeq = 0;
		int countSame = 0;
		char currentAlpha = ' ';
		string alpha = "AAAABBBCCDAA";
		string[] convertToArray = new string[]{""};
		List<string> convertToArrayFinal = new List<string>();
		
		convertToArray= alpha.Split(' ');
		
		for(int x = 0; x < alpha.Length ; x++){
			if(alpha[countSeq] == alpha[x]){
				currentAlpha = alpha[x];
				countSame++;
			}else{
				convertToArrayFinal.Add(countSame.ToString() + currentAlpha);
				countSeq = x;
				x= x-1;
				countSame=0;
			}
		}
		convertToArrayFinal.Add(countSame.ToString() + currentAlpha);
		
		foreach(string result in convertToArrayFinal){
			Console.WriteLine(result);
		}
	}
}
