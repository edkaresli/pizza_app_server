import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const books = {
    id: 1,
    title: "Foundation",
    author: "Isaac Asimov"
}

const next = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {console.log("Message sent")}, 1000);
        resolve();
    })
}

const router = new Router();

router.get('/', (context) => {
    console.log("Received a GET '/' request");
    context.response.body = { message: "Get '/' request received" }
});

router.get('/books', (context) => {
    console.log("Received a GET '/books' request");
    context.response.body = books;
});

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen("127.0.0.1:8000");
