console.log("module works")

async function start () {
   return  await Promise.resolve('async1');
};

start().then(console.log);