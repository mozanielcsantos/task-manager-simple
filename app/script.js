function showCompletionNotification() {
    alert("Task completed! Notification sent.");
}

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("completeBtn");
    if (btn) {
        btn.addEventListener("click", showCompletionNotification);
    }
});
