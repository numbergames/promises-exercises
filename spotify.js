const getFromApi = function(endpoint, query) {
    let url = 'https://api.spotify.com/v1/' + endpoint;

    let queryString = Qs.stringify(query);
    if (queryString) {
        url += '?' + queryString;
    };

    return fetch(url).then(function(response) {
        if (response.status < 200 || response.status >= 300) {
            return Promise.reject(response.statusText);
        }
        return response.json();
    });
};


let artist;

const getArtist = function(name) {
    let endpoint = "search";
    let query = {
        q: name,
        limit: 1,
        type: 'artist'
    };


    return getFromApi(endpoint, query).then(function (item) {
            console.log(arguments);
            
            artist = item.artists.items[0]

            return artist;

        }).catch(function (err) {
            
            throw Error(err);
        
        });
};

