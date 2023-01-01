# Education Docker

## Table of Contents

- [Why Docker](#why-docker)
- [What is Docker](#what-is-docker)
- [Special File in Docker](#special-file-in-docker)
  - Dockerfile
  - .dockerignore
- Build a Docker Image
- Docker Compose
- Let's Demo
- References

### Why Docker

Pada suatu kala di dunia deployment, programmer sering kali memiliki permasalahan ini:

![it-works-on-mine.jpg](assets/it-works-on-mine.jpg)

![it-works-on-my-machine.jpg](assets/it-works-on-my-machine.jpg)

Apakah bila bertemu masalah seperti ini artinya kita harus deploy di komputer programmer tersebut? tentu tidak bukan?

Nah hal inilah yang ingin kita selesaikan dengan menggunakan Docker !

### What is Docker

Docker adalah sebuah program yang bisa kita gunakan untuk membuat sebuah lingkungan yang kita sebut "container". Container ini mirip dengan sebuah kotak kecil yang berisi semua yang kita perlukan untuk menjalankan sebuah program komputer.

Dengan container, kita bisa membuat sebuah lingkungan yang terisolasi di dalam komputer kita, dan kita bisa memasukkan program komputer ke dalam container tersebut. Ini sangat membantu kita untuk membuat program komputer yang bisa berjalan dengan lancar di komputer apapun, karena kita sudah membawa lingkungan yang dibutuhkan oleh program tersebut di dalam container.

Jadi, secara sederhana, docker bisa kita gunakan untuk membuat sebuah "kotak" yang berisi semua yang kita butuhkan untuk menjalankan sebuah program komputer, sehingga program tersebut bisa berjalan dengan lancar di komputer apapun.

### Special File in Docker

Dalam Docker ini sendiri akan ada banyak file dan perintah yang akan dipelajari, namun untuk saat ini kita akan fokus pada 2 file yang sangat penting dalam Docker, yaitu:

- Dockerfile, yang digunakan untuk membuat sebuah image
- .dockerignore, yang digunakan untuk mengabaikan file yang tidak perlu di include dalam image

#### Dockerfile

#### .dockerignore

#### Build a Docker Image

#### Docker Compose

### Let's Demo

### References

- https://docs.docker.com/get-started/
- https://docs.docker.com/get-started/02_our_app/
- https://docs.docker.com/get-started/07_multi_container/
- https://docs.docker.com/get-started/08_using_compose/
- [BONUS] https://docs.docker.com/get-started/05_persisting_data/
