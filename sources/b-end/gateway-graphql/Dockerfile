# Pilih image yang ingin digunakan sebagai base imagenya
# Karena kita ingin menggunakan nodejs, jadi kita pilih image nodejs
# Baca dari https://hub.docker.com/_/node
# Tag yang akan digunakan adalah lts-hydrogen
FROM node:lts-hydrogen

# Copy file package.json ke dalam image node:lts-hydrogen yang digunakan
COPY package.json .

# Install package untuk production yang akan digunakan oleh si nodejs itu
# Ingat image itu akan "membengkak"
# Dan mungkin kita bisa memanfaatkan "cache" dari Docker
# Untuk menghemat layer / space yang digunakan
# --production = hanya install "dependencies" saja (skip "devDependencies")
# RUN npm install --production

# Apabila menggunakan pnpm perintah di atas diabaikan dan gunakan perintah di bawah ini saja
RUN corepack enable
RUN corepack prepare pnpm@latest --activate
RUN pnpm install --production

# ASUMSI:
# Pada production kita tidak melakukan migration / seeding
# Sehingga kita tidak melakukan migration dan seeding di sini
# Cukup COPY file yang dibutuhkan ke dalam dan jalankan nodejs nya saja
COPY . .

# Buka port default yang digunakan oleh nodejs (Pada kode gateway-graphql = 4000)
EXPOSE 4000

# Jalankan nodejs
CMD ["node", "app.js"]