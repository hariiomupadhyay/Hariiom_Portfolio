import { defineConfig, Plugin } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { Resend } from 'resend';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Dev API plugin so POST /api/contact works seamlessly during npm run dev
const localApiPlugin = (): Plugin => ({
  name: 'local-api-contact-handler',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      if (req.url === '/api/contact' && req.method === 'POST') {
        let body = '';
        req.on('data', (chunk) => {
          body += chunk;
        });
        req.on('end', async () => {
          try {
            const data = JSON.parse(body || '{}');
            const apiKey = process.env.RESEND_API_KEY || process.env.VITE_RESEND_API_KEY;

            if (apiKey) {
              const resend = new Resend(apiKey);
              const resendResult = await resend.emails.send({
                from: "Portfolio Contact <onboarding@resend.dev>",
                to: ["hariiom.dev@outlook.com"],
                replyTo: data.email,
                subject: `New Inquiry from ${data.name || "Visitor"} — ${data.serviceType || "Portfolio Contact"}`,
                html: `
                  <div style="font-family: Arial, sans-serif; padding: 20px; color: #111;">
                    <h2 style="color: #10b981;">New Portfolio Project Inquiry</h2>
                    <p><strong>Name:</strong> ${data.name}</p>
                    <p><strong>Email:</strong> ${data.email}</p>
                    <p><strong>Phone:</strong> ${data.phone || "N/A"}</p>
                    <p><strong>Service:</strong> ${data.serviceType}</p>
                    <p><strong>Message:</strong> ${data.message}</p>
                  </div>
                `,
              });

              if (resendResult.error) {
                console.error("[Resend Error]:", resendResult.error);
              } else {
                console.log("[Resend Success]: Email sent successfully!", resendResult.data);
              }
            } else {
              console.log("[Dev API] Received form submission locally:", data);
            }

            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ success: true, message: "Local dev inquiry processed" }));
          } catch (err: any) {
            console.error("[Dev API Error]:", err);
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ error: err.message || "Dev API Error" }));
          }
        });
        return;
      }
      next();
    });
  },
});

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    localApiPlugin(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});