//import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
import registryFunctions from './services/registry.functions';

registryFunctions.forEach(f => {
    exports[f.key] = f.Fun;
});
