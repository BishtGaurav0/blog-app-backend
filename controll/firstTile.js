const get = (req,res)=>{
   res.send([
    {
        id:"1",
        title: 'Aashiqui-2',
        category: 'Bollywood',
        publishedDate: 'Apr 13 2013',
        imageAsset: 'https://stat1.bollywoodhungama.in/wp-content/uploads/2016/03/63983807.jpg',
        blogContent:
          'Aashiqui 2 is a musical love story of these lovers who goes through love and hate, fame and failure in their lives. However will they stay together accepting their success, or will they breakup due to their ego? Rahul Jaiker (Aditya Rao Kapoor) is a successful singer but is a drug addict and has alcohol problems.',
        likes: '200',
      },
      {
        id:"2",
        title: 'Avenger ',
        category: 'Hollywood',
        publishedDate: 'April 26 2019',
        imageAsset: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKNpPem5BNyZAba3nwhHatYlk_M_duVSae5w&usqp=CAU',
        blogContent:
          'After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. ... Along the way, the Avengers realize that sacrifices must be made as they prepare for the ultimate final showdown with Thanos, which will result in the heroes fighting the biggest battle they have ever faced.',
        likes: '200',
      },
      {
        id:"3",
        title: ' I-phone',
        category: 'Apple Product',
        publishedDate: ' Aug 12 1976',
        imageAsset: 'https://pngimg.com/uploads/iphone_11/iphone_11_PNG30.png',
        blogContent:
          'The iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device with a touchscreen interface. The iPhone runs the iOS operating system, and in 2021 when the iPhone 13 was introduced, it offered up to 1 TB of storage and a 12-megapixel camera.',
        likes: '200',
      },

   ])
}
module.exports.firstget = get