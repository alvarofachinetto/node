const async_hooks = require('async_hooks');

const create = async_hooks.createHook({init});

create.enable();