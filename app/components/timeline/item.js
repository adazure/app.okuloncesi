exports.loaded = function(args){
    
    var context = args.object;
    var data = context.data;


    //Component içerisindeki nesneler
    const image = context.getViewById('_image');
    const date = context.getViewById('_date');
    const user = context.getViewById('_user');
    const content = context.getViewById('_text');

    //Nesneler içerisine dataları aktaralım
    image.src = data.image;
    date.text = data.date;
    user.text = data.user;
    content.text = data.content;


}