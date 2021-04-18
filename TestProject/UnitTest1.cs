using ConsoleApp;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace TestProject
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public void TestMethod1()
        {
            var calc = new Calculator();
            Assert.AreEqual(4, calc.Sum(2, 2));
        }
    }
}