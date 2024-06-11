## Steps to reproduce

1. Clone the repository
2. Run the following commands:
```bash
pnpm install
pnpm dev
```
3. Open your browser and go to `http://localhost:3000`
4. Click on the "Go to repro page" link or go to `http://localhost:3000/repro`
5. You will see the "login" button
6. Terminate the server
7. Run the following command:
```bash
pnpm build
pnpm start
```
8. Repeat steps 3 and 4
9. You will not see the "login" button and the page is unprotected.
