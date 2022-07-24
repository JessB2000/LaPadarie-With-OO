import { App } from './app'
import { connect } from './db'

async function main() {
    const app = new App;
    await app.listen();
}

main();
