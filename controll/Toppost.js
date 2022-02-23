const get= (req,res)=>{
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
          {
            id:"4",
            title: ' Gym',
            category: 'Fitness',
            publishedDate: 'Aug 21 2021',
            imageAsset: 'data:image/png;base64,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',
            blogContent:
              'A gym session or brisk walk can help. Physical activity stimulates various brain chemicals that may leave you feeling happier, more relaxed and less anxious. You may also feel better about your appearance and yourself when you exercise regularly, which can boost your confidence and improve your self-esteem.',
            likes: '200',
          },
          {
            id:"5",
            title: 'Panipuri',
            category: 'Food',
            publishedDate: 'Aug 21 2021',
            imageAsset: 'https://images.all-free-download.com/images/graphicwebp/panipuri_gupchup_indian_food_222006.webp',
            blogContent:
              'Gol gappa (also known as pani puri) is a popular bite-size chaat consisting of a hollow, crispy-fried puffed ball that is filled with potato, chickpeas, onions, spices, and flavoured water, usually tamarind or mint, and popped into ones mouth whole. ... Kulle, a type of chaat.',
            likes: '200',
          },
    ])
}
module.exports.toppostget= get;