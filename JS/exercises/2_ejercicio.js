function sonAnagramas(palabra1, palabra2) {
    if (palabra1 === palabra2) {
        return false;
    }

    if (palabra1.length !== palabra2.length) {
        return false;
    }

    const normalizar = (str) => {
        return str.toLowerCase()
            .split('')
            .sort()
            .join('');
    };

    return normalizar(palabra1) === normalizar(palabra2);
}

console.log(sonAnagramas("amor", "roma"));

