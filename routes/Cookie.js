/**
 * Created by ekozi on 5/19/2016.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    cookie_schema = new Schema({
        cookie_name:String,
        // cookie_description:String,
        coolie_img_url:String
    });
var Cookie = mongoose.model('Cookie',cookie_schema);
module.exports = Cookie;
