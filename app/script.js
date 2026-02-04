function showCompletionNotification() {
    const msg = "Task completed! Notification sent.";
    alert(msg);

    const messageDiv = document.getElementById("message");
    if (messageDiv) {
        messageDiv.textContent = msg;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("completeBtn");
    if (btn) {
        btn.addEventListener("click", showCompletionNotification);
    }
});
