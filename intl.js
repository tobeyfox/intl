const I = new Proxy((() => {
    let obj = {
        dict: {},
        availableLanguages: ['en'],
        selectedLanguage: 'en',
        get: function (key) {
            if (this.dict.hasOwnProperty(key)) {
                return this.dict[key][this.selectedLanguage];
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
            if (name === 'setLanguages') {
                return (available, requested) => {
                    if (!Array.isArray(available) || !available.length) return;
                    obj.availableLanguages = available;
                    obj.selectedLanguage = available[0];

                    let requestedLanguages = [];
                    if (Array.isArray(requested))
                    {
                        requestedLanguages = requested.map(l => l.toLocaleLowerCase().substring(0,2));
                    }
                    else if (navigator && Array.isArray(navigator.languages))
                    {
                        requestedLanguages = navigator.languages.map(l => l.toLocaleLowerCase().substring(0,2));
                    }
                    for (let rl of requestedLanguages) {
                        if (obj.availableLanguages.indexOf(rl) >= 0) {
                            obj.selectedLanguage = rl;
                            break;
                        }
                    }

                };
            }
            return obj.get(name);
        },
        set: function (obj, name, value) {
            obj.dict[name] = value;
            return true;
        }
    }
);

export { I };