/* TOGGLE SHARE */
const shareBtn = document.getElementById("shareBtn");
const shareLinks = document.getElementById("shareLinks");

shareBtn.onclick = () => {
    shareLinks.style.display =
        shareLinks.style.display === "flex" ? "none" : "flex";
};

/* SHARE */
function copyLink() {
    navigator.clipboard.writeText(window.location.href);
    alert("Link disalin");
}

function shareWhatsApp() {
    window.open("https://wa.me/?text=" + encodeURIComponent(location.href));
}

function shareTelegram() {
    window.open("https://t.me/share/url?url=" + encodeURIComponent(location.href));
}

/* UNDANGAN */
function joinWhatsAppGroup() {
    window.open("https://chat.whatsapp.com/XXXXXXXX");
}

function openFacebookPage() {
    window.open("https://facebook.com/");
}

/* REDIRECT */
const video = document.getElementById("video");
video.addEventListener("play", () => {
    setTimeout(() => {
        window.location.href = "https://s.shopee.co.id/1qUwqITvOR";
    }, 5000);
});
