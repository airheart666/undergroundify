document.getElementById('login-button').addEventListener('click', function() {
    loginWithSpotify();
});

function loginWithSpotify() {
    const clientId = 'ae3422e92ee84fc39e64181f8c17cb7f'; // Replace with your client ID
    const redirectUri = encodeURIComponent('https://airheart666.github.io/undergroundify/'); // Replace with your redirect URI
    const scopes = [
        'playlist-modify-public',
        'user-follow-read',
        'user-top-read',
        'user-library-read'
    ];
    const url = `https://accounts.spotify.com/authorize?response_type=code&client_id=${clientId}&scope=${encodeURIComponent(scopes.join(' '))}&redirect_uri=${redirectUri}`;

    window.location.href = url;
}
