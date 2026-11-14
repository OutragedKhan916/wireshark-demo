# Operation: Packet Hunt

An interactive cybersecurity training game about Wireshark and Nmap, made for the Society of Cybersecurity high school bootcamp.

## Missions
1. **Security Bootcamp**: CIA triad, threats/vulnerabilities/defenses/attacks, security tools, IPs and ports
2. **Packet Detective**: a simulated Wireshark capture with packet inspection and display filters
3. **Nmap Terminal Ops**: a simulated terminal for practising real Nmap commands (all output is fake; nothing is scanned)
4. **Read the Scan**: reading Nmap results and closing an unnecessary service
5. **Intrusion Showdown**: a timed boss round, followed by a certificate

## Deploy on GitHub Pages
1. Create a new public repository and upload `index.html`, `.nojekyll` and this README to the root.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, set the source to **Deploy from a branch**, choose `main` and `/ (root)`, then save.
4. After a minute or so the game is live at `https://<your-username>.github.io/<repo-name>/`.

It's a single self-contained HTML file with no build step. Progress is saved in each player's browser (localStorage).
