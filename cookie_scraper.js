var request = require('request'),
    mongoose = require('mongoose'),
    cheerio = require('cheerio'),
    Cookie = require('./Cookie');
var mongodbURI = "mongodb://ek5442:NokiaLumia920@ds033875.mongolab.com:33875/movies";
mongoose.connect(mongodbURI);
var db=mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));

var DEFAULT_URL = 'http://www.girlscouts.org/en/cookies/all-about-cookies/Meet-the-Cookies.html';

request(DEFAULT_URL,function (err,response,html) {
    if(err)
        throw err;
    else
    {

        var img_arr = [],
            cookie_name_arr = [];
        var $ = cheerio.load(html);
        $('.meet-the-cookies').each(function(){
            var data = $(this);
            data.children().each(function(){
                var cookie_data = $(this);
                var cookie=cookie_data.children().each(function(){
                    var data = $(this);
                   img_url="http://www.girlscouts.org"+data.children().attr('src');

                    img_arr.push(img_url);


                });

            });

           $('.wrapper').each(function(){


                var data = $(this);

                var cookie_name=data.children('h4').text();
               if(cookie_name==='' || cookie_name==='Thanks-A-Lot®'){

               }else{
                   cookie_name_arr.push(cookie_name.split("/").join(' '));
               }
                //
            });
        });
        cookie_name_arr.filter(function(name,index){
            var cookie = new Cookie({
                cookie_name:name,
                coolie_img_url:img_arr[index],
                liked:0
            })
            cookie.save(function(err,data){
                if(err)
                    throw err;
                else
                    console.log(data);
            })
        })
    }
});
