document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('waitlist-form');
    const message = document.getElementById('form-message');
    const emailInput = document.getElementById('email');
    const submitBtn = form.querySelector('button');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Stop page reload

        const email = emailInput.value;

        if(email) {
            // Simulate API call delay
            submitBtn.innerText = "Inscription...";
            submitBtn.style.opacity = "0.7";
            
            setTimeout(() => {
                form.style.display = 'none';
                message.classList.remove('hidden');
                message.classList.add('success-msg');
                message.innerHTML = `Your interest is recorded.<br>We will summon you when the gate opens.`;
            }, 1500);

            console.log(`New Lead: ${email}`);
            // TODO: Connect this to Google Sheets or Mailchimp later
        }
    });
});