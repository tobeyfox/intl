const I = new Proxy((() => {
    let obj = {
        dict: {},
        lang: 'en',
        get: function (key) {
            if (this.dict.hasOwnProperty(key)) {
                return this.dict[key][this.lang];
            }
            else {
                console.log('Missing translation: ' + key);
                return '***' + key + '***';
            }
        }
    };
    return obj;
})(),
    {
        get: function (obj, name) {
            if (name === '_lang') {
                return obj.lang;
            }
            else if (name === 'setLanguage')
            {
                return (lang) => { obj.lang = lang; };
            }
            return obj.get(name);

        },
        set: function (obj, name, value) {
            if (name === '_lang') {
                obj.lang = value;
            } else {
                obj.dict[name] = value;
            }
            return true;
        }
    });

export { I };