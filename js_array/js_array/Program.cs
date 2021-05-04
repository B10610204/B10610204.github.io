using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace js_array
{
    class Program
    {
        static void Main(string[] args)
        {
            var list = new List<ItemObj>() {
                new ItemObj(){ Item = "啤酒",Type="喝的"},
                new ItemObj(){ Item = "汽水",Type="喝的"},
                new ItemObj(){ Item = "火鍋",Type="吃的"},
                new ItemObj(){ Item = "燒烤",Type="吃的"},
                new ItemObj(){ Item = "冰淇淋",Type="吃的"}
            };


            //找第一個吃的
            var r1 = list.FirstOrDefault(x => x.Type == "吃的");
            var r1_1 = list.Find(x => x.Type == "吃的");

            //找所有吃的
            var r1_all = list.Where(x => x.Type == "吃的");
            Console.WriteLine(string.Join(",",r1_all.Select(x => $"{x.Item}")));

            //冰淇淋在第幾的位置
            var ice = list.Find(x => x.Item == "冰淇淋");
            var r3 = list.IndexOf(ice);
            //var ice1 = list.Where(x => x.Item == "冰淇淋").Select(x => x);
            //var r31 = list.IndexOf(ice);
            Console.WriteLine($"冰淇淋在{r3+1}個位置");

            //用list生成新的集合
            var r4 = list.Select(x => x.Item);
            Console.WriteLine(string.Join(",",r4));

           

            //用list生成新的集合2
            var r5 = list.Select((x, index) => new { id = list.Count - index, name = x.Item });
            Console.WriteLine(string.Join(",", r5.Select(x => $"{x.id}:{x.name}")));

            //排序
            var num = new int[] { 6, 9, 4, 2, 1 };
            var r6 = num.OrderBy(x => x);
            Console.WriteLine(string.Join(",",r6));

            //排序2
            var num2 = new int[] { 10000, 10, 100, 1, 101 };
            var r7 = num2.OrderBy(x => x);
            Console.WriteLine(string.Join(",", r7));

            //排序3 用r5的ID排序
            var r8 = r5.OrderBy(x => x.id);
            Console.WriteLine(string.Join(",", r8.Select(x => $"{x.id}:{x.name}")));




            //var list = new List<ItemObj>() {
            //    new ItemObj(){ Item = "啤酒",Type="喝的"},
            //    new ItemObj(){ Item = "汽水",Type="喝的"},
            //    new ItemObj(){ Item = "火鍋",Type="吃的"},
            //    new ItemObj(){ Item = "燒烤",Type="吃的"},
            //    new ItemObj(){ Item = "冰淇淋",Type="吃的"}
            //};
            //用TYPE做分群
            var r9 = list.GroupBy(x => x.Type);
            foreach (var item in r9)
            {
                Console.WriteLine(item.Key+":");
                foreach (var result in item)
                {
                    Console.WriteLine(string.Join(",",$"item:{result.Item}"));
                }
            }
            

            Console.ReadLine();
        }
    }


    class ItemObj
    {
        public string Item { get; set; }
        public string Type { get; set; }
    }
}
