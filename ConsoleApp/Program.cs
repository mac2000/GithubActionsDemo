using System;

namespace ConsoleApp
{
    class Program
    {
        static void Main(string[] args)
        {
            var calc = new Calculator();
            Console.WriteLine($"2 + 2 = {calc.Sum(2, 2)}");
        }
    }
}