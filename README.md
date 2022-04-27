# intl
Minimalistic internationalization library

## Installation

```
npm install tobeyfox/intl
```

## Usage

```
import { I } from 'intl';

// -- 1 --
I.Back = { de: 'Zurück', en: 'Back' };
I.Print = { de: 'Drucken', en: 'Print' };

// -- 2 --
I.setLanguages(['en', 'de']);

// -- 3 --
render() {
    return (
        <div>
            <button>{I.Back}</button>
        </div>
    );
}
```

1. Define strings in as many languages as needed
2. Tell the library wich languages are ready to be served. The first entry will be used as default if none of them matches to the users browser preferences.
3. Language is selected based on the users preferences in his browser.