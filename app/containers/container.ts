import { Container } from "inversify";

import { Contracts } from "./contracts";
import SecureStorageService from "@/services/SecureStorageService";
const container = new Container()
container.bind<StorageService>(Contracts.StorageService).to(SecureStorageService);
export {container};