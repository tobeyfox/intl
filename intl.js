const I = new Proxy((() =>
{
    let obj = {        
        dict: {},
        lang: 'en',
        get: function(key)
        {
            if (this.dict.hasOwnProperty(key))
            {
                return this.dict[key][this.lang];
            }
            else
            {
                console.log('Missing translation: ' + key);
                return '***' + key +  '***';
            }
        }
    };
    return obj;
})(),
{
    get: function(obj, name)
    {
        return obj.get(name);
    
    },
    set: function(obj, name, value)
    {
        obj.dict[name] = value;
        return true;
    },
    setLanguage(lang)
    {
        obj.lang = lang;
    }
});

export { I };