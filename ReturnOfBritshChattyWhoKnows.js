  document.addEventListener('DOMContentLoaded', function() {
            fetch('https://cdn.jsdelivr.net/gh/IlovetocodeBFG/BIGFISHGAMING@refs/heads/main/gamelist.txt')
                .then(response => response.text())
                .then(data => {
                    let gameGrid = document.getElementById('games');
                    if (!gameGrid) {
                        gameGrid = document.createElement('div');
                        gameGrid.id = 'games';
                        document.body.appendChild(gameGrid);
                    }

                    gameGrid.innerHTML = data;

                    const games = document.querySelectorAll('#games a');

                    games.forEach(game => {
                        game.addEventListener('click', (e) => {
                            e.preventDefault();
                            const url = game.getAttribute('data-url');

                            const win = window.open('about:blank', '_blank');

                            win.document.write(`
                                <!DOCTYPE html>
                                <html>
                                <head>
                                    <title>BritishChatty</title>
                                    <link rel="icon" href="https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://clever.com&size=64" type="image/x-icon">
                                    <style>
                                        body, html {
                                            margin: 0;
                                            padding: 0;
                                            width: 100%;
                                            height: 100%;
                                            overflow: hidden;
                                            background: #000;
                                        }
                                        iframe {
                                            width: 100%;
                                            height: 100%;
                                            border: none;
                                        }
                                    </style>
                                </head>
                                <body>
                                    <iframe src="${url}" allowfullscreen></iframe>
                                </body>
                                </html>
                            `);
                            win.document.close();
                        });
                    });
                })
                .catch(error => {
                    console.error('Error loading games:', error);
                });
        });
