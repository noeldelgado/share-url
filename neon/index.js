Module('ShareUrl')({
    prototype : {
        ENDPOINTS : {
            facebook    : 'https://www.facebook.com/sharer/sharer.php?',
            twitter     : 'https://twitter.com/share?',
            googlePlus  : 'https://plus.google.com/share?',
            pinterest   : 'https://pinterest.com/pin/create/button/?',
            reddit      : 'http://www.reddit.com/submit?',
            delicious   : 'https://delicious.com/save?',
            linkedin    : 'https://linkedin.com/sharing/share-offsite/?'
        },

        _generateUrlParams : function _generateUrlParams(data) {
            return Object.keys(data || {}).map(function(propertyName) {
                return propertyName + '=' + encodeURIComponent(data[propertyName]);
            }).join('&');
        },

        facebook : function facebook(data) {
            return this.ENDPOINTS.facebook + this._generateUrlParams(data);
        },

        twitter : function twitter(data) {
            return this.ENDPOINTS.twitter + this._generateUrlParams(data);
        },

        googlePlus : function googlePlus(data) {
            return this.ENDPOINTS.googlePlus + this._generateUrlParams(data);
        },

        pinterest : function pinterest(data) {
            return this.ENDPOINTS.pinterest + this._generateUrlParams(data);
        },

        reddit : function reddit(data) {
            return this.ENDPOINTS.reddit + this._generateUrlParams(data);
        },

        delicious : function delicious(data) {
            return this.ENDPOINTS.delicious + this._generateUrlParams(data);
        },

        linkedin : function linkedin(data) {
            return this.ENDPOINTS.linkedin + this._generateUrlParams(data);
        },

        email : function email(data) {
            var to = data.to;
            delete data.to;
            var params = this._generateUrlParams(data);
            return 'mailto:' + (params.length ? (to + '?' + params) : to);
        }
    }
});
