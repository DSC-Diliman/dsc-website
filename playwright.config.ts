import path from "path";

const PORT = process.env.PORT || 3000;

const baseURL = `http://localhost:${PORT}`;

module.exports = {
  timeout: 30 * 1000,
  testDir: path.join(__dirname, "e2e"),
  retries: 2,
  webServer: {
    command: "npm run dev",
    url: baseURL,
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },
  use: {
    baseURL,
  },
};
