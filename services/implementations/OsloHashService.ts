import { sha256 } from "@oslojs/crypto/sha2";
import HashServiceInterface from "../interfaces/HashService.js";
import { encodeHexLowerCase } from "@oslojs/encoding";
import { injectable } from "inversify";

@injectable()
class OsloHashService implements HashServiceInterface {
    hash(string: string): string {
        return encodeHexLowerCase(sha256(new TextEncoder().encode(string)));
    }
    
}

export default OsloHashService;