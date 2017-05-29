exports.loaded = function (args) {


    var list = [];

    for (var i = 0; i < 10; i++) {

        list.push({
            data: {
                image: 'http://images.huffingtonpost.com/2016-10-27-1477586294-6421376-children.jpg',
                date: '10 Ocak 2017 Pazartesi',
                user: 'Kerem YAVUZ',
                content: 'This sequence is made up of poses that will improve your core strength and help flatten your abs. While doing yoga is not the best way to get a six-pack, you can expect to significantly tone and strengthen your belly'
            }
        });

        list.push({
            data: {
                image: 'https://fthmb.tqn.com/BVIgYRgBijJitMS6u6ZgUS-vKA4=/960x0/filters:no_upscale()/about/Final31-586d3e5c5f9b584db3d35648.jpg',
                date: '10 Ocak 2017 Pazartesi',
                user: 'Kerem YAVUZ',
                content: 'This sequence is made up of poses that will improve your core strength and help flatten your abs. While doing yoga is not the best way to get a six-pack, you can expect to significantly tone and strengthen your belly'
            }
        });

        list.push({
            data: {
                image: 'https://fthmb.tqn.com/3ovLHm7XWP09m7c8kCazYOTnKlQ=/768x0/filters:no_upscale()/about/no-maps-data-578cc9c63df78c09e9e38fc3.jpg',
                date: '10 Ocak 2017 Pazartesi',
                user: 'Kerem YAVUZ',
                content: 'This sequence is made up of poses that will improve your core strength and help flatten your abs. While doing yoga is not the best way to get a six-pack, you can expect to significantly tone and strengthen your belly'
            }
        });

        list.push({
            data: {
                image: 'https://fthmb.tqn.com/gz5HqWFtyT6ICs3k1Vksaf3SffE=/960x0/filters:no_upscale()/about/GlacierBayNationalParkDaveBartuff-Getty-571138833df78c3fa2a43ea4-5902593b5f9b5810dcbbcfff.jpg',
                date: '10 Ocak 2017 Pazartesi',
                user: 'Kerem YAVUZ',
                content: 'This sequence is made up of poses that will improve your core strength and help flatten your abs. While doing yoga is not the best way to get a six-pack, you can expect to significantly tone and strengthen your belly'
            }
        });

        list.push({
            data: {
                image: 'https://fthmb.tqn.com/uo6JtQcb1WaAQ-pk4fgBKw0pjF4=/960x0/filters:no_upscale()/about/MtRainier-OnestMistic-Getty-571140393df78c3fa2afe2bd-590259d23df78c5456cbe28d.jpg',
                date: '10 Ocak 2017 Pazartesi',
                user: 'Kerem YAVUZ',
                content: 'This sequence is made up of poses that will improve your core strength and help flatten your abs. While doing yoga is not the best way to get a six-pack, you can expect to significantly tone and strengthen your belly'
            }
        });

        list.push({
            data: {
                image: 'https://fthmb.tqn.com/YYzCGAdruTPb7j9yD1kKgJNFobE=/960x0/filters:no_upscale()/about/OlympicNationalParkPhotoAlto-JeromeGorin-Getty-57113b735f9b588cc2df34a0-5902597b3df78c5456caf304.jpg',
                date: '10 Ocak 2017 Pazartesi',
                user: 'Kerem YAVUZ',
                content: 'This sequence is made up of poses that will improve your core strength and help flatten your abs. While doing yoga is not the best way to get a six-pack, you can expect to significantly tone and strengthen your belly'
            }
        });

        list.push({
            data: {
                image: 'https://fthmb.tqn.com/Vt8fh9Tytb7PmjmBM1RjatlcHHo=/960x0/filters:no_upscale()/about/Denali-590258f45f9b5810dcbb01b4.jpg',
                date: '10 Ocak 2017 Pazartesi',
                user: 'Kerem YAVUZ',
                content: 'This sequence is made up of poses that will improve your core strength and help flatten your abs. While doing yoga is not the best way to get a six-pack, you can expect to significantly tone and strengthen your belly'
            }
        });

    }

    args.object.bindingContext = { tablo: list };

}