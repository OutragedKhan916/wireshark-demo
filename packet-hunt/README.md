# Operation: Packet Hunt

An interactive cybersecurity training game about Wireshark and Nmap, made for the Society of Cybersecurity high school bootcamp.

## Missions
1. **Security Bootcamp**: CIA triad, threats/vulnerabilities/defenses/attacks, security tools, IPs and ports
2. **Packet Detective**: a simulated Wireshark capture with packet inspection and display filters
3. **Nmap Terminal Ops**: a simulated terminal for practising real Nmap commands (all output is fake; nothing is scanned)
4. **Read the Scan**: reading Nmap results and closing an unnecessary service
5. **Intrusion Showdown**: a timed boss round, followed by a certificate 

## Deploy on GitHub Pages
Deployment is automated with Node.js and GitHub Actions.

1. Push to `main`.
2. In the repo go to **Settings → Pages** and set **Source** to **GitHub Actions** (one-time).
3. The workflow in `.github/workflows/pages.yml` runs `npm run build` (`scripts/build.js`) and publishes `dist/`.
4. The game goes live at `https://<your-username>.github.io/<repo-name>/`.

Preview locally (Node 18+): `npm run build && npm start`, then open http://localhost:3000.

The game is a single self-contained HTML file. Progress is saved in each player's browser (localStorage).
