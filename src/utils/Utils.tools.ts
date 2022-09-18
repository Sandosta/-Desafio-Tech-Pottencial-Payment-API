import { Logger } from "@nestjs/common";

export function env(_env: string) {
    return process.env[_env];
}


let log = new Logger();
export function debug(...msg: string[]) {
    if (env("DEBUG").toLowerCase() == "true") {
        log.debug(msg);
    }
}