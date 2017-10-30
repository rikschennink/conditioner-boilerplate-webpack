import * as conditioner from 'conditioner-core';

conditioner.addPlugin({

    // converts module aliases to paths
    moduleSetName: (name) => `./ui/${ name }.js`,
    
    // override the import (this makes webpack bundle all the dynamically included files as well)
    moduleImport: (name) => import(`${ name }`)

});

// lets go!
conditioner.hydrate( document.documentElement );