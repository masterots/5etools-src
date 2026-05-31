# Docker Setup for 5etools

This guide covers running 5etools locally with Docker and configuring it with Cloudflare ZeroTrust for secure remote access.

## Local Docker Setup

### Prerequisites
- Docker and Docker Compose installed
- At least 2GB of available disk space
- Port 5050 available on your machine

### Quick Start

1. **Build and start the container:**
   ```bash
   docker-compose up -d
   ```

2. **Access locally:**
   - Open your browser and navigate to: `http://localhost:5050`

3. **View logs:**
   ```bash
   docker-compose logs -f 5etools
   ```

4. **Stop the container:**
   ```bash
   docker-compose down
   ```

### Manual Docker Commands (without compose)

**Build the image:**
```bash
docker build -t 5etools:latest .
```

**Run the container:**
```bash
docker run -d \
  --name 5etools \
  -p 5050:80 \
  --restart unless-stopped \
  5etools:latest
```

**Check status:**
```bash
docker ps -a | grep 5etools
```

**View logs:**
```bash
docker logs -f 5etools
```

## Cloudflare ZeroTrust Configuration

This setup allows you to securely access 5etools from anywhere without exposing it to the public internet, similar to your Plex and other applications.

### Prerequisites
- Cloudflare account with a domain
- Cloudflare ZeroTrust subscription (or free tier)
- Cloudflare Tunnel agent (cloudflared) installed on your local machine

### Setup Steps

1. **Install Cloudflare Tunnel:**
   - Download from: https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/install-and-setup/tunnel-guide/
   - Follow the installation guide for Windows

2. **Authenticate with Cloudflare:**
   ```bash
   cloudflared tunnel login
   ```
   This opens a browser window to authenticate and authorize the tunnel.

3. **Create a tunnel:**
   ```bash
   cloudflared tunnel create 5etools
   ```
   Note the tunnel ID that's displayed.

4. **Configure the tunnel:**
   Create a `~/.cloudflared/config.yml` file (or `%USERPROFILE%\.cloudflared\config.yml` on Windows):
   
   ```yaml
   tunnel: 5etools
   credentials-file: /path/to/credentials.json
   
   ingress:
     - hostname: 5etools.yourdomain.com
       service: http://localhost:5050
     - service: http_status:404
   ```
   
   Replace `yourdomain.com` with your actual Cloudflare domain.

5. **Route the domain to the tunnel:**
   ```bash
   cloudflared tunnel route dns 5etools 5etools.yourdomain.com
   ```

6. **Run the tunnel:**
   ```bash
   cloudflared tunnel run 5etools
   ```
   
   Or run as a Windows service (see Cloudflare docs).

7. **Set up Access policies (optional but recommended):**
   - Go to Cloudflare Dashboard → Zero Trust
   - Navigate to Access → Applications
   - Add a new application
   - Configure authentication (Okta, Google, email, etc.)
   - Set access policies to control who can use 5etools

### Verification

Once configured, you should be able to access:
- **Locally:** `http://localhost:5050`
- **Remotely:** `https://5etools.yourdomain.com` (via Cloudflare ZeroTrust)

### Troubleshooting

**Container won't start:**
```bash
docker logs 5etools
```

**Port 5050 already in use:**
- Change the port in `docker-compose.yml` (e.g., `5051:80`)

**Cloudflare tunnel not connecting:**
- Ensure Docker container is running: `docker ps | grep 5etools`
- Check tunnel status: `cloudflared tunnel info 5etools`
- Verify tunnel route: `cloudflared tunnel route list`

**Slow build:**
- Building from source takes a few minutes. First build may take longer.
- Subsequent builds use Docker cache, so they're faster.

## Resource Management

The docker-compose.yml includes commented-out resource limits. To limit CPU/memory:

```yaml
deploy:
  resources:
    limits:
      cpus: '1'
      memory: 512M
```

Uncomment and adjust values as needed for your system.

## Updating

To update to the latest version:

```bash
# Rebuild the image
docker-compose up -d --build

# Or manually
docker build -t 5etools:latest .
docker-compose up -d
```

## Additional Notes

- The container runs nginx as a reverse proxy with gzip compression
- Static assets are cached for 1 year in browsers
- HTML files are cached for 1 hour
- Security headers are configured (X-Frame-Options, X-Content-Type-Options, etc.)
- Health checks ensure the container is running properly
