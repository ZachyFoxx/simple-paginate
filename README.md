# Simple Paginate
A very simple paginator built in TypeScript

## Usage
```typescript
import { Paginator } from 'simple-paginate';

let list = ["1","2","3","4","5","6","7","8","9","10"];

let paginator = new Paginator<string>(list, 2);

while (paginator.next()) {
    console.log(paginator.getPage());
}
```

output:

```javascript
[ '1', '2' ]
[ '3', '4' ]
[ '5', '6' ]
[ '7', '8' ]
[ '9', '10' ]
```