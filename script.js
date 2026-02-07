// Replace with your Google Apps Script web app URL after deployment
const GOOGLE_SHEETS_WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbzRHEr2BmNZ3PR3JGUUtMdPuzJVR00jtdwUlMKyrew8dyMweD_Hkx98lBqC_LklZqE8/exec';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('waitlist-form');
    const message = document.getElementById('form-message');
    const emailInput = document.getElementById('email');
    const submitBtn = form.querySelector('button');

    const showSuccess = () => {
        form.style.display = 'none';
        message.classList.remove('hidden');
        message.classList.add('success-msg');
        message.innerHTML = `Your interest is recorded.<br>We will summon you when the gate opens.`;
    };

    const showError = (text) => {
        message.classList.remove('hidden');
        message.classList.add('error-msg');
        message.innerHTML = text || 'Something went wrong. Please try again.';
    };

    const resetButton = () => {
        submitBtn.innerText = 'Request Allocation';
        submitBtn.style.opacity = '1';
        submitBtn.disabled = false;
    };

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const email = emailInput.value.trim();
        if (!email) return;

        submitBtn.innerText = 'Inscription...';
        submitBtn.style.opacity = '0.7';
        submitBtn.disabled = true;
        message.classList.remove('error-msg', 'success-msg');

        if (GOOGLE_SHEETS_WEB_APP_URL === 'YOUR_GOOGLE_APPS_SCRIPT_URL') {
            // Fallback when URL not configured (dev mode)
            console.log(`New Lead (not sent - configure URL): ${email}`);
            setTimeout(() => {
                showSuccess();
                resetButton();
            }, 800);
            return;
        }

        try {
            const res = await fetch(GOOGLE_SHEETS_WEB_APP_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email })
            });
            // no-cors returns opaque response - assume success if no exception
            showSuccess();
        } catch (err) {
            console.error(err);
            showError();
        } finally {
            resetButton();
        }
    });
});