window.addEventListener("load", function() {
    const form = document.getElementById('leads-form');
     const phone = document.getElementById('phone');
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        const data = new FormData(form);
        const action = e.target.action;
        fetch(action, {
                method: 'POST',
                body: data,
            })
            .then(() => {
                console.log("data",phone.value)
                window.location.replace(`/landing/thank-you?m=${phone.value}`);
            })
    });
});

window.addEventListener("load", function() {
    const form = document.getElementById('lead-form');
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        const data = new FormData(form);
        const action = e.target.action;
        fetch(action, {
                method: 'POST',
                body: data,
            })
            .then(() => {
                window.location.replace(`/landing/thank-you?m=${data.Phone}`);
            })
    });
});