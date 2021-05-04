let cityArray = [
    {
        name: 'taipei',
        ch_name: '台北',
        districts: [
            { id: 'taipei01', district: '中正區' },
            { id: 'taipei02', district: '萬華區' },
            { id: 'taipei03', district: '信義區' }]
    },

    {
        name: 'taoyuan',
        ch_name: '桃園',
        districts: [
            { id: 'taoyuan01', district: '桃園市' },
            { id: 'taoyuan02', district: '八德市' },
            { id: 'taoyuan03', district: '中壢市' }]
    },

];

// cityArray.forEach((item,index) => {
//     let keys = Object.keys(item);
//     keys.forEach((key,index2) => {
//         if(index2 == 2)
//         {
//             item[key].forEach((dt,index3)=>{
//                 console.log("id:" + dt.id + "district" + dt.districts) ;
//             })
//         }
//         else
//             console.log(item[key]);
//     });
// });



let cityObject = {
    taipei: [
        { id: 'taipei01', district: '中正區' },
        { id: 'taipei02', district: '萬華區' },
        { id: 'taipei03', district: '信義區' }],
    taoyuan: [
        { id: 'taoyuan01', district: '桃園市' },
        { id: 'taoyuan02', district: '八德市' },
        { id: 'taoyuan03', district: '中壢市' }],
    taichung: [
        { id: 'taichung01', district: '台中市' },
        { id: 'taichung02', district: '⼤⾥市' },
        { id: 'taichung03', district: '清⽔市' }]
};
//    cityObject.taipei;可以這樣就選到台北



cityArray.forEach((city, index)=>{
    console.log(city.name);
    console.log(city.ch_name);
    // console.log(city.district);
    city.districts.forEach((dt,index)=>{
        console.log(`${dt.id},${dt.district}`);
    });
    console.log("=".repeat(60));
});


// console.log(cityArray[0].districts[0].id)
console.log("..".repeat(60));
let citykeys = Object.keys(cityObject);
citykeys.forEach((item,index) => {
    cityObject[item].forEach((dt,index) =>{
        console.log(dt.id+","+dt.district);
    });
});