using System;

namespace _012
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] valores = Console.ReadLine().Split();

            double a = double.Parse(valores[0]);
            double b = double.Parse(valores[1]);
            double c = double.Parse(valores[2]);

            double triangulo = (a * c) / 2;
            double circulo = (3.14159 * Math.Pow(c, 2));
            double trapezio = ((a + b) * c) / 2;
            double quadrado = Math.Pow(b, 2);
            double retangulo = (a * b);

            Console.WriteLine($"TRIANGULO: {triangulo:0.000}");
            Console.WriteLine($"CIRCULO: {circulo:0.000}");
            Console.WriteLine($"TRAPEZIO: {trapezio:0.000}");
            Console.WriteLine($"QUADRADO: {quadrado:0.000}");
            Console.WriteLine($"RETANGULO: {retangulo:0.000}");
        }
    }
}