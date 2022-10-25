const express = require('express');
const Twit = require('twit');

const app = express();

const server = app.listen(1111, () => console.log('listening @ 1111 --> http://localhost:1111'));
app.use(express.json({
    limit: '10mb'
}));

app.post('/tweet', (request, response) => {

    console.log('data incoming...');
    const td_data = request.body;

    response.json(td_data)

    tweetArtwork(td_data);
});


function tweetArtwork(td_data) {

    const T = new Twit({
        consumer_key: td_data.API_KEY,
        consumer_secret: td_data.API_SECRET_KEY,
        access_token: td_data.ACCESS_TOKEN,
        access_token_secret: td_data.ACCESS_TOKEN_SECRET
    });

    console.log('ready to tweet');

    T.post('media/upload', {
        media_data: td_data.img
    }, function(err, data, response) {
        var mediaIdStr = data.media_id_string
        var meta_params = {
            media_id: mediaIdStr,
        };

        console.log('posting...');

        T.post('media/metadata/create', meta_params, function(err, data, response) {
            if (!err) {
                var params = {
                    status: td_data.text,
                    media_ids: [mediaIdStr]
                }

                console.log('updating...');
                T.post('statuses/update', params, function(err, data, response) {});

                console.log('successfully posted');
                console.log(params.status);
            }
        })
    })
};