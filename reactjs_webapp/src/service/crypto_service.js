import CryptoJS from "crypto-js";

const sha256_hash = (data) => {
    return CryptoJS.SHA256(data);
};

export {sha256_hash};
