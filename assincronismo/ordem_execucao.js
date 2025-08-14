console.log(1);

queueMicrotask(() => {
    console.log(2);
});

