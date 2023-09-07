document.addEventListener('mousemove', ev => {
    Object.assign(document.documentElement, {
        style: `
        --move-x: ${(ev.clientX - innerWidth / 2) * -.005}deg;
        --move-y: ${(ev.clientY - innerHeight / 2) * -.01}deg;
        `
    })
})