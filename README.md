# intl
Minimalistic internationalization library

## Installation

```
npm install tobeyfox/intl
```

## Usage

```
import { I } from 'intl';

//define strings in as many languages as needed
I.Back = { de: 'Zurück', en: 'Back' };
I.Print = { de: 'Drucken', en: 'Print' };

//set the language to be used base on user preferences or browser settings.
I.setLanguage('de');

//Use just like normal strings
render() {
    return (
        <div>
            <button>{I.Back}</button>
        </div>
    );
}
```