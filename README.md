
# WhatsApp Bot dengan API Chat GPT Open AI

Dikembangkan dengan [Node JS](https://nodejs.org/en/download/)

## Installasi

- Buka CMD atau Terminal

- Clone aplikasi dari github
    ```bash
    git clone https://github.com/Bangik/chatgpt-wa-bot.git
    ```

- Masuk ke directory
    ```bash
    cd chatgpt-wa-bot
    ```

- Install package
    ```bash
    npm install
    ```

- Copy file .env.example dan rename menjadi .env
    ```bash
    cp .env.example .env
    ```

- Sesuaikan API KEY dari [OpenAI](https://beta.openai.com/account/api-keys)

  `OPENAI_API_KEY=PASTE_API_KEY_DISINI`
    
## Cara Menggunakan

- Masuk ke directory atau folder aplikasi
- Buka CMD atau terminal pada directory atau folder tersebut
- Run aplikasi
    ```bash
    npm run start
    ```
- Buka WhatsApp dan buka menu linked devices lalu scan barcode yang muncul pada CMD atau terminal
- Test bot dengan cara kirim pesan "ping" pada nomor WhatsApp yang digunakan sebagai bot
- Untuk generate image, gunakan keyword "generate image" lalu diikuti dengan pesan
## Contributing

Silakan Fork Repository lalu lakukan update kode

Jika telah selesai update kode, lakukan Open Pull Request

Jika ada error silakan buat issue baru pada repository